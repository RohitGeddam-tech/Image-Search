//inside here we willl put a liitle bit of mark up for a functional component

import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map((image) => { 
        return <ImageCard key={image.id} images={image}/> 
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;

//map images from image list component
//we want it to somehow return theimg tag that has the appropriate src.
//props.images.map((image) => {return <img src="" /> })

//to sprcify the url for the image we want to show on the screen we will reference
//return props.images.map((image) => {return <img src={image.urls.regular} /> });

//adding keys to the component
//const images = props.images.map((image) => {return <div key={image.id}> 
//< img src={image.urls.regular} /> </div>});

//adding alt tag
//const images = props.images.map((image) => {
    //return <img alt={image.description} key={image.id} 
    //src={image.urls.regular} />});

/*  const ImageList = (props) => {
        const images = props.images.map(({ description, id, urls }) => { 
            return <img alt={description} key={id} src={urls.regular} /> 
    }); };


*/
