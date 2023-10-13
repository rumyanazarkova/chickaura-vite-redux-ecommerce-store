import React from 'react'
import styled from 'styled-components'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronRight
        className={className}
        style={{ ...style, fontSize: '3rem', color: 'black',
        background:'white', position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className,style,  onClick } = props;
    return (
      <BsChevronLeft
        className={className}
        style={{ ...style, zIndex:10 ,fontSize: '3rem', color: 'black',
        background:'white', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}
        onClick={onClick}
      />
    );
  }


const BigCarousel = ({ products }) => {
  const navigate=useNavigate()
  
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
  return <Wrapper>
      <Slider {...settings}>
        {products.map((product,index) => {
          const { id,image, name,category} = product;
          return (
            <article key={index} className='carousel-item'>
              <img src={image} alt={name} className='product-img' onClick={() => navigate(`/${category}/${id}`)}/>
              <p className='name'>{name}</p>
            </article>
          )
        })}
      </Slider>
    </Wrapper>
}

const Wrapper = styled.section`
  position: relative;
  .carousel-item{
    padding: 0 .3rem;
  }
  img{
    cursor: pointer;
    }
`;


export default BigCarousel
