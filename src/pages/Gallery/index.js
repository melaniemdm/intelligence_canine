import ImageGallery from 'react-image-gallery';


const PicturesGallery = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  function Gallery() {
    return( <div>
      return <ImageGallery items={PicturesGallery} />;</div>
    )
  }
  export default Gallery;