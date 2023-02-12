import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';
export const ImageGallery = ({ children }) => {
  return <Gallery>{children}</Gallery>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
