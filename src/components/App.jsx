import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreButton from './Button/Button'
import api from '../services/image-api'
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from './Modal/Modal';



export default class App extends Component {
  state = {
    images: [],
    imageName: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
    isVisible: false,
  };

  getImageName = imageName => {
    this.setState({ imageName });
  };

  onClickMoreBtn = () => {
    this.setState({
			page: this.state.page + 1,
		});

  }

  toggleModal = (image) => {
    
    this.setState(({ showModal }) => ({
      largeImage: image,
      showModal: !showModal,
    }));
 
  };

  componentDidUpdate(prevProps, prevState){
    const prevImage = prevState.imageName;
		const currentImage = this.state.imageName;

    if(prevImage !== currentImage){
      this.setState({
          images: [],
          page: 1,
      })
    }
    if (prevImage !== currentImage || prevState.page!== this.state.page) {
			this.setState({
				isLoading: true,
        isVisible: true,
			});

      api.fetchImages(currentImage, this.state.page).then((images) => {
        if (images.totalHits - this.state.page * 12 < 12) {
          this.setState({ isVisible: false });
        }
        if (images.totalHits.length === 0) {
          alert('There are no photos');
        }
        this.setState({
          images: [...this.state.images, ...images.hits],
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
    }
    
  }
  render() {
    const {images, isLoading, showModal, largeImage, imageName, isVisible} = this.state
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.getImageName}/>
        <ImageGallery  toggleModal={this.toggleModal} images={images} onClickMoreBtn={this.onClickMoreBtn} isLoading={isLoading}></ImageGallery>
        {isVisible && <LoadMoreButton onClickMoreBtn={this.onClickMoreBtn}/>}
        {showModal && (
          <Modal image={largeImage} onClose={this.toggleModal} alt={imageName}/>
        )}
      </div>
    );
  }
}