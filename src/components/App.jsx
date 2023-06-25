import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Puff } from 'react-loader-spinner';

import { Searchbar } from "./searchbar/Searchbar"
import { ImageGallery } from './image_gallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';

import PropTypes from "prop-types";

import "../components/styles.css"


export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    const fetchImages = async (query, page) => {
      setIsLoading(true);

      try {
        const apiKey = '35870886-75af865edd7f3268a0fe2e3e2';
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        );

        const newImages = response.data.hits;
        setImages((prevImages) => [...prevImages, ...newImages]);
        setTotalHits(response.data.totalHits);
      } catch (error) {
        console.error('Error fetching images:', error);
        alert('Error fetching images');
      }

      setIsLoading(false);
    };

    fetchImages(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const handleImageClick = (imageUrl) => {
    setShowModal(true);
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const showLoadMoreButton = images.length < totalHits && images.length > 0;

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} currentPage={currentPage} />
      {isLoading && (
        <div className="puff-container">
          <Puff color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {showLoadMoreButton && (
        <Button onClick={handleLoadMore}>
          Load more
        </Button>
      )}
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={modalImage} alt="" />
        </Modal>
      )}
    </div>
  );
};


App.propTypes = {
  searchQuery: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  totalHits: PropTypes.number,
  isLoading: PropTypes.bool,
  showModal: PropTypes.bool,
  modalImage: PropTypes.string,
};