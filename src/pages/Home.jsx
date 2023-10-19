import BigCarousel from "../components/BigCarousel"
import homeHeader from '../assets/home-header.jpg'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useGetProductsForHomeQuery } from "../features/api/apiSlice"
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  const {
    data
  } = useGetProductsForHomeQuery()

  let productsArr = []
  for (const key in data) {
    let array = data[key]
    productsArr.push(...array)
  }
  productsArr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  }).splice(10)


  return <Wrapper>
    <div className="image-container">
      <img src={homeHeader} alt='main-image' />
      <button onClick={() => navigate('/women')} className="image-btn her">For Her</button>
      <button onClick={() => navigate('/men')} className="image-btn him">For Him</button>
    </div>

    <div className="new-in">
      <h3>NEW IN</h3>
      {data && <BigCarousel products={productsArr} />}
    </div>

    <div className="newsletter">
      <Link to={'/newsletter'}>SIGN UP FOR OUR NEWSLETTER AND GET 10% OFF <AiOutlineArrowRight /></Link>
    </div>

  </Wrapper>

}
const Wrapper = styled.main`
  img{
    width:100%;
    }
  .image-container{
    position: relative;
  }  
  .image-btn{
    position: absolute;
    top:70%;
    color:black;
    background:white;
    padding:.5rem 1rem;
    font-size: 1.2rem;  
    font-weight: 600;
  }  
  .her{
    left:15%;
  }
  .him{
    right:15%;
  }
  .newsletter {
    display: flex;
    justify-content: center;
   font-size: 1.6rem;
   font-weight: 500;
   padding:1rem 2rem 6rem 2rem;
   
   a{
    color:var(--black);
  }
  }
  .new-in {
   display:flex ;
   flex-direction: column;
   gap:1rem;
   margin: 2rem 0;
    h3{
   text-align: center;
  }
  }
  @media (min-width:500px) { 
  .her{
    left:25%;
  }
  .him{
    right:25%;
  }
  }

@media (min-width: 1200px) {
  .image-btn{
    position: absolute;
    top:55%;
    padding:1rem 2rem;
    font-size: 1.5rem;  
    font-weight: 600;
  }  
  .newsletter {
   font-size: 3rem;
   padding:4rem;
  }
}
`
export default Home