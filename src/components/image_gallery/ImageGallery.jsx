import React, { useState, useEffect } from 'react';
import { ImageGalleryItem } from "components/image_item/ImageGalleryItem";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";


export const ImageGallery = ({ images, onImageClick }) => {
  const [showNoImagesMessage, setShowNoImagesMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkNoImagesMessage = () => {
      if (images.length === 0 && !showNoImagesMessage) {
        showNoImagesMessageWithDelay();
      } else if (images.length > 0 && showNoImagesMessage) {
        hideNoImagesMessage();
      }
    };

    const showNoImagesMessageWithDelay = () => {
      setIsLoading(true);

      setTimeout(() => {
        setShowNoImagesMessage(true);
        setIsLoading(false);
      }, 2000);
    };

    const hideNoImagesMessage = () => {
      setShowNoImagesMessage(false);
    };

    checkNoImagesMessage();
  }, [images, showNoImagesMessage]);

  if (images.length === 0 && showNoImagesMessage) {
    return <p className="noImages">No images found.</p>;
  }

  return (
    <div>
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={nanoid()}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.alt}
            onClick={() => onImageClick(image.largeImageURL)}
          />
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

// export class ImageGallery extends Component {
//   state = {
//     showNoImagesMessage: false,
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.images !== this.props.images) {
//       this.checkNoImagesMessage();
//     }
//   }

//   checkNoImagesMessage() {
//     const { images } = this.props;
//     const { showNoImagesMessage } = this.state;

//     if (images.length === 0 && !showNoImagesMessage) {
//       this.showNoImagesMessageWithDelay();
//     } else if (images.length >= 0 && showNoImagesMessage) {
//       this.hideNoImagesMessage();
//     }
//   }

//   showNoImagesMessageWithDelay() {
//     this.setState({ isLoading: true });

//     setTimeout(() => {
//       this.setState({
//         showNoImagesMessage: true,
//         isLoading: false,
//       });
//     }, 2000);
//   }

//   hideNoImagesMessage() {
//     this.setState({ showNoImagesMessage: false });
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showNoImagesMessage, isLoading } = this.state;

//     if (images.length === 0 && showNoImagesMessage) {
//       return <p className="noImages">No images found.</p>;
//     }

//     return (
//       <div>
//         <ul className="gallery">
//           {images.map((image) => (
//             <ImageGalleryItem
//               key={nanoid()}
//               webformatURL={image.webformatURL}
//               largeImageURL={image.largeImageURL}
//               alt={image.alt}
//               onClick={() => onImageClick(image.largeImageURL)}
//             />
//           ))}
//         </ul>
//         {isLoading && <p>Loading...</p>}
//       </div>
//     );
//   }
// }

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
  showNoImagesMessage: PropTypes.bool,
  isLoading: PropTypes.bool,
};