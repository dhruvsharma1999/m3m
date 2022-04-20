import React from 'react';
import ImageUploading from 'react-images-uploading';

export default function MultiImageUploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="mhc-multiImage">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
              <div className="d-flex flex-wrap">
          
        
  
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
            
                  <button onClick={() => onImageRemove(index)} className="close"></button>
                </div>
              </div>
            ))} 

<button
className='btn mhc-add-more'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
         <br />  Add <br />More
            </button>
                  </div>
         
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

      {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}

                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}