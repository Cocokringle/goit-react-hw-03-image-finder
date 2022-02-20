import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css'
import Loader from "components/Loader/Loader";
export default function ImageGallery({images,isLoading, toggleModal}) {
    return (
      <>
      <ul className={s.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags ={image.tags}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
    {isLoading &&  <Loader/>}
      </>

    )

   
}
