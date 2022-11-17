import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

const Gallery = (props)=> {

const currentCategory = {
    name: 'comercial',
    description: 'Photos of grocery stores, food trucks, and other commercial projects',
};
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className='flex-row'>
                <img 
                src={photo}
                alt='commercial example'
                className='img-thumbnail mx-1' 
                />
            </div>
        </section>
    );
}

export default Gallery;