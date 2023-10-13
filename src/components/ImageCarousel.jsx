import React, { useState } from 'react'
import styled from 'styled-components'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";


const ImageCarousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    return (
        <Wrapper>
            <div className='gallery'>{
                images.map((image, index) => {
                    return (
                        <img 
                            src={image} 
                            alt='image' 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            className={`${image === images[currentIndex] ? 'active' : ''}`} 
                        />
                    );
                })
            }</div>

            <div className='main-arrows-container'>
                <button onClick={handlePrev} className='arrow-btn left'><BsChevronLeft/></button>    
                <button onClick={handleNext} className='arrow-btn right'><BsChevronRight/></button>  
                <img src={images[currentIndex]} alt='main-img' className='main-img'></img>
            </div>
        </Wrapper>
    );


}

const Wrapper = styled.section`

display: flex;
 gap:1rem; 
 .main-arrows-container{
    position: relative; 
 }
.main-img{
 width: 100%;
}
.arrow-btn{
 position: absolute;
 z-index: 1;
 padding:1.3rem .8rem;
 background: white;
 font-size: 1rem;
}
.left{
top:45%;
left:0;
}
.right{
top:45%;
right:0;
}

.gallery {
display: none;
flex-direction: column;
gap:1rem;
img {
    width: 80px;
    cursor: pointer;
}
}
  @media (min-width: 1000px) {
.gallery{
  display: flex;
}
}
 
`
export default ImageCarousel
