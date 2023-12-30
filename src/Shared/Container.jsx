import React from 'react';

const Container = ({chilldern}) => {
    return (
        <div className='max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto px-5'>
           {chilldern} 
        </div>
    );
};

export default Container;