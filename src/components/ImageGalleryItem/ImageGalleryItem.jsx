import { ImageContainer, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => (
  <ImageContainer>
    <Image src={webformatURL} alt={tags} />
  </ImageContainer>
);
