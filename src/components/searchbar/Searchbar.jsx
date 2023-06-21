import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchInput = event.target.elements.searchInput.value;
    onSubmit(searchInput);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
      </form>
    </header>
  );
};

// export class Searchbar extends Component {
//     handleSubmit = (event) => {
//       event.preventDefault();
//       const { onSubmit } = this.props;
//       const searchInput = event.target.elements.searchInput.value;
//       onSubmit(searchInput);
//     };
  
//     render() {
//       return (
//         <header className="searchbar">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <button type="submit" className="button">
//               <span className="button-label">Search</span>
//             </button>
  
//             <input
//               className="input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               name="searchInput"
//             />
//           </form>
//         </header>
//       );
//     }
//   }

  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };