import React, { useEffect } from 'react';
import PropTypes from "prop-types";


export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">{children}</div>
    </div>
  );
};

// export class Modal extends Component {
//     componentDidMount() {
//       window.addEventListener('keydown', this.handleKeyDown);
//     }
  
//     componentWillUnmount() {
//       window.removeEventListener('keydown', this.handleKeyDown);
//     }
  
//     handleKeyDown = (event) => {
//       const { onClose } = this.props;
//       if (event.code === 'Escape') {
//         onClose();
//       }
//     };
  
//     handleOverlayClick = (event) => {
//       const { onClose } = this.props;
//       if (event.target === event.currentTarget) {
//         onClose();
//       }
//     };
  
//     render() {
//       const { children } = this.props;
//       return (
//         <div className="overlay" onClick={this.handleOverlayClick}>
//           <div className="modal">{children}</div>
//         </div>
//       );
//     }
//   }

  Modal.propTypes = {
    onClose: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired 
  };