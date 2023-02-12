import PropTypes from 'prop-types';

import { GalleryItem, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ items, handleClick }) => {
  return items.map(item => (
    <GalleryItem key={item.id} onClick={() => handleClick(item.largeImageURL)}>
      <Img src={item.webformatURL} alt="" />
    </GalleryItem>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
