import { useEffect, useState } from 'react';

import SearchForm from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import { searchPhoto } from '../shared/api/Api';

import { Finder, Img } from './App.styled';

const per_page = 12;

export const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const [largeImg, setLargeImg] = useState('');
  const [message, setMessage] = useState(false);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPhoto = async () => {
      try {
        setLoading(true);

        const data = await searchPhoto(search, page, per_page);

        setTotalPage(Math.ceil(data.totalHits / per_page));

        if (data.hits.length === 0) {
          setMessage(true);
          return;
        }
        setItems(items => [...items, ...data.hits]);
        setError(null);
        setMessage(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhoto();
  }, [search, page]);

  const loadMore = () => setPage(page + 1);

  const searchPhotos = searchObj => {
    const { search: searchWord } = searchObj;
    if (searchWord === search) {
      return;
    }
    setSearch(searchWord);
    setPage(1);
    setTotalPage(null);
    setItems([]);
  };

  const closeModal = () => setshowModal(false);

  const handleClickImg = largeImg => {
    setshowModal(true);
    setLargeImg(largeImg);
  };

  return (
    <Finder>
      <SearchForm onSubmit={searchPhotos} />
      {loading && <Loader />}
      {error && <span>{error}</span>}
      {message && <span>Нічого не знайдено</span>}
      {Boolean(items.length) && (
        <ImageGallery>
          <ImageGalleryItem items={items} handleClick={handleClickImg} />
        </ImageGallery>
      )}

      {page < totalPage && (
        <Button handleClick={loadMore}>
          <span>Load more</span>
        </Button>
      )}
      {showModal && (
        <Modal close={closeModal}>
          <Img src={largeImg} alt="" />
        </Modal>
      )}
    </Finder>
  );
};
/*
export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    totalPage: null,
    per_page: 12,
    largeImg: '',
    message: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    try {
      this.setState({ loading: true });
      const { search, page, per_page } = this.state;

      const data = await searchPhoto(search, page, per_page);

      const totalPage = Math.ceil(data.totalHits / per_page);

      if (data.hits.length === 0) {
        this.setState({ message: true });
        return;
      }
      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
        totalPage,
        error: null,
        message: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  searchPhoto = ({ search }) => {
    this.setState({ search });
    this.setState(prevState => {
      if (prevState.search !== this.state.search) {
        return { search, items: [], page: 1 };
      }
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  handleClickImg = largeImg => {
    this.setState({
      showModal: true,
      largeImg,
    });
  };
  render() {
    const {
      items,
      loading,
      page,
      totalPage,
      showModal,
      largeImg,
      error,
      message,
    } = this.state;
    const { loadMore, searchPhoto, closeModal, handleClickImg } = this;
    return (
      <Finder>
        <SearchForm onSubmit={searchPhoto} />
        {loading && <Loader />}
        {error && <span>{error}</span>}
        {message && <span>Нічого не знайдено</span>}
        {Boolean(items.length) && (
          <ImageGallery>
            <ImageGalleryItem items={items} handleClick={handleClickImg} />
          </ImageGallery>
        )}

        {page < totalPage && (
          <Button handleClick={loadMore}>
            <span>Load more</span>
          </Button>
        )}
        {showModal && (
          <Modal close={closeModal}>
            <Img src={largeImg} alt="" />
          </Modal>
        )}
      </Finder>
    );
  }
}
*/
