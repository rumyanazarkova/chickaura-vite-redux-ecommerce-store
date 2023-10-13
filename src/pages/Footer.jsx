import { FaFacebook, FaTiktok } from "react-icons/fa"
import { AiFillInstagram, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Footer = () => {
 
  return <Wrapper>
    <div className='follow'>
      <p> Follow us on </p>
      <div className='footer-follow-icons'>
        <Link to='https://www.facebook.com/'>
          <FaFacebook />
        </Link>
        <Link to='https://www.instagram.com/'>
          <AiFillInstagram />
        </Link>
        <Link to='https://www.tiktok.com/'>
          <FaTiktok />
        </Link>
      </div>
    </div>
    <div className="footer-links-policy">
      <Link to='/shipping-info'>Shipping Info</Link>
      <Link to='/returns'>Returns</Link>
      <Link to='/contact-us'>Contact Us</Link>
      <Link to='/privacy-policy'>Privacy Policy</Link>
    </div>

      <div className="footer-subscribe">
        <Link to='/newsletter'>SIGN UP AND GET 10% OFF <AiOutlineArrowRight/></Link>
    
        </div>
    

      <h5>
        &copy; {new Date().getFullYear()}
        <span> ChickAura  All Rights Reserved</span>
      </h5>
    
  </Wrapper>
  
}
const Wrapper=styled.footer`
  display: flex;
  flex-direction:column;
  padding: 1.5rem 0; 
  gap:1rem;
  place-items:center;

 .follow,
 .footer-links-policy{
  display:flex;
  flex-direction:column;
  gap:.5rem;
 } 
 .follow{
  grid-area:one;
 }
.footer-follow-icons{
  display: flex;
  justify-content: center;
  gap:.5rem;
  font-size:1.2rem;
}
.footer-links-policy{
 
  grid-area:three;
  align-items:center;
}
.footer-subscribe{
  grid-area:four;
  display:grid;
  gap:.3rem;
 place-items:center;
}
h5{
  grid-area:two;
}
@media (min-width: 1000px) {
  display:grid;
  grid-template-areas:
  'one three four'
  'two three four';
}

`
export default Footer