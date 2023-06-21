// export class ImageGallery extends Component {
//     state = {
//         noImages: false // стан для перевірки наявності зображень
//      };

// render() {
//   const { images, onImageClick } = this.props;
//     if (images.length === 0) {
     
//       setTimeout(() => {
//         this.setState({ noImages: true }); 
//       }, 3000);
//       if (this.state.noImages) {
//         return <p className="noImages">No images found.</p>;
//         } else {
//             return null; // нічого не повертати
//           }
//     }
//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={nanoid()}
//             webformatURL={image.webformatURL}
//             largeImageURL={image.largeImageURL}
//             alt={image.alt}
//             onClick={() => onImageClick(image.largeImageURL)}
//          />
//         ))}
//       </ul>
//     );
//   }
// }


// export class ImageGallery extends Component {
//   render() {
//     const { images, onImageClick } = this.props;
//     if (images.length === 0) {
//       return <p className='noImages'>No images found.</p>;
//     }
//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={nanoid()}
//             webformatURL={image.webformatURL}
//             largeImageURL={image.largeImageURL}
//             alt={image.alt}
//             onClick={() => onImageClick(image.largeImageURL)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }