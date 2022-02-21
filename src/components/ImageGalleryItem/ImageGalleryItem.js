import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ webformatURL, tags, largeImageURL, toggleModal}){
    return (
        <li className={s.ImageGalleryItem}>
            <img className={s.ImageGalleryItem_image} src={webformatURL} alt={tags} onClick={() => toggleModal(largeImageURL)} />
        </li>
      );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
  }
  