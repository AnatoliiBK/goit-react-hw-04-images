export function App() {
    // state = {
    //   searchQuery: '',
    //   images: [],
    //   currentPage: 1,
    //   totalHits: 0,
    //   isLoading: false,
    //   showModal: false,
    //   modalImage: '',
    // };
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalHits, setTotalHits] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

  
    // componentDidMount() {
    //   const { searchQuery } = this.state;
    //   this.fetchImages(searchQuery);
    // }
    useEffect(() => {
        fetchImages(searchQuery);
    }, []);
      
  
    // fetchImages = async (query) => {
    //   this.setState({ isLoading: true });
  
    //   try {
    //     const apiKey = '35870886-75af865edd7f3268a0fe2e3e2';
    //     const response = await axios.get(
    //       `https://pixabay.com/api/?q=${query}&page=${this.state.currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    //     );
  
    //     this.setState((prevState) => ({
    //       images: [...prevState.images, ...response.data.hits],
    //       currentPage: prevState.currentPage + 1,
    //       totalHits: response.data.totalHits,
    //     }));
    //   } catch (error) {
    //     console.error('Error fetching images:', error);
    //     alert('Error fetching images');
    //   }
  
    //   this.setState({ isLoading: false });
    // };
    const fetchImages = async (query) => {
        setIsLoading(true);
      
        try {
          const apiKey = '35870886-75af865edd7f3268a0fe2e3e2';
          const response = await axios.get(
            `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
          );
      
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
          setCurrentPage((prevPage) => prevPage + 1);
          setTotalHits(response.data.totalHits);
        } catch (error) {
          console.error('Error fetching images:', error);
          alert('Error fetching images');
        }
      
        setIsLoading(false);
      };
      
      useEffect(() => {
        if (searchQuery !== '') {
          fetchImages(searchQuery);
        }
    }, [currentPage]);
      
  
    // handleSearchSubmit = (query) => {
    //   this.setState({ searchQuery: query, images: [], currentPage: 1 }, () => {
    //     this.fetchImages(query);
    //   });
    // };
    const handleSearchSubmit = (query) => {
        setSearchQuery(query);
        setImages([]);
        setCurrentPage(1);
    };
  
    // handleImageClick = (imageUrl) => {
    //   this.setState({ showModal: true, modalImage: imageUrl });
    // };
    const handleImageClick = (imageUrl) => {
        setShowModal(true);
        setModalImage(imageUrl);
    };
  
    // handleCloseModal = () => {
    //   this.setState({ showModal: false, modalImage: '' });
    // };
    const handleCloseModal = () => {
        setShowModal(false);
        setModalImage('');
    };
  
    // render() {
    //   const { images, isLoading, showModal, modalImage, totalHits } = this.state;
  
    //   const showLoadMoreButton = images.length < totalHits;
  
    //   return (
    //     <div className="App">
    //       <Searchbar onSubmit={this.handleSearchSubmit} />
    //       <ImageGallery images={images} onImageClick={this.handleImageClick} />
    //       {isLoading && (
    //         <div className="puff-container">
    //           <Puff color="#00BFFF" height={80} width={80} />
    //         </div>
    //       )}
    //       {showLoadMoreButton && (
    //         <Button onClick={() => this.fetchImages(this.state.searchQuery)}>
    //           Load more
    //         </Button>
    //       )}
    //       {showModal && (
    //         <Modal onClose={this.handleCloseModal}>
    //           <img src={modalImage} alt="" />
    //         </Modal>
    //       )}
    //     </div>
    //   );
    // }

    
    return (
        <div className="App">
          <Searchbar onSubmit={handleSearchSubmit} />
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {isLoading && (
            <div className="puff-container">
              <Puff color="#00BFFF" height={80} width={80} />
            </div>
          )}
          {images.length < totalHits && (
            <Button onClick={() => fetchImages(searchQuery)}>Load more</Button>
          )}
          {showModal && (
            <Modal onClose={handleCloseModal}>
              <img src={modalImage} alt="" />
            </Modal>
          )}
        </div>
      );
      
  }