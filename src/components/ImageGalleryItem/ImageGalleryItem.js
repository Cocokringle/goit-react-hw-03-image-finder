import s from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ webformatURL, tags, largeImageURL, toggleModal}){
    return (
        <li className={s.ImageGalleryItem}>
            <img className={s.ImageGalleryItem_image} src={webformatURL} alt={tags} onClick={() => toggleModal(largeImageURL)} />
        </li>
      );
}