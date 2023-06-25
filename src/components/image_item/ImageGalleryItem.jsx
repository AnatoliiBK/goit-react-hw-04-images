import PropTypes from "prop-types";

export const ImageGalleryItem = ({ webformatURL, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webformatURL} alt={alt} className='imageGalleryItem-image' />
    </li>
  );
};


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

