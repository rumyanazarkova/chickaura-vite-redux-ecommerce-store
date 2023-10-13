import styled from 'styled-components'
import { IoPersonOutline, IoMenu, IoHeartOutline, IoBagOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Sidebar from './Sidebar';
import DropDown from './DropDown';

const Navbar = ({ loginWithRedirect,logout, user }) => {

  const navigate = useNavigate()
  const favorites = useSelector((state) => state.favorites.allFavorites)
  const cartItems = useSelector((state) => state.cart.allCartItems)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSibebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }

  return <Wrapper>
    <nav>
      <section className='top-row'>

        <button className='help-btn' onClick={() => navigate('/privacy-policy')}>
          <FaRegQuestionCircle /> Help
        </button>

        <div className='logo-hamburger'>
          <div className='hamburger'>
            <button
              onClick={handleSibebar}
            ><IoMenu /></button>
            <p>menu</p>
          </div>
          <Link to='/'><h2>ChickAura</h2></Link>
        </div>

        <ul className='icon-links'>
          <div className='icon login'>
            <IoPersonOutline />
            <div className='dropdown-content'>
              <DropDown loginWithRedirect={loginWithRedirect} logout={logout} user={user} />
            </div>

          </div>
          <div className='icon'>
            <IoHeartOutline onClick={() => navigate('/favorites')} />
            <span className='value'>{favorites}</span>
          </div>
          <div
            className='icon'
          >
            <IoBagOutline onClick={() => navigate('/cart')} />
            <span className='value'>{cartItems}</span>
          </div>
        </ul>
      </section>

      <ul className='nav-links'>
        <Link to='/mid-season-sale'>Mid Season Sale</Link>
        <Link to='/women'>Women</Link>
        <Link to='/men'>Men</Link>
      </ul>
    </nav>
    {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
  </Wrapper>
}

const Wrapper = styled.section`
  position: sticky;
  top:0;
  z-index: 1000;
  font-size: 1.2rem;
nav{
  display: grid;
  position: sticky;
  top:0;
  z-index: 10;
}
  
  .top-row{
    display: flex;
    justify-content:space-between;
    padding:1rem 2rem;
  }
  .help-btn{
    display:none;
    gap:.3rem;
    color:white;
    background: transparent;
    border:none;
    font-size: 1.1rem;
  }
  .logo-hamburger{
    display: flex;
    align-items:center;
    gap:.7rem;
  }
  .hamburger{
    display: flex;
    flex-direction: column;
    cursor:pointer;
  }
  .hamburger button{
    display: flex;
    border:none;
    background: transparent;
    color:white;
    font-size: 2rem;
    place-items:center;
    padding:0;
  }
  .hamburger p{
    text-align:center;
    font-size: .6rem;
  }
  .icon-links{
    display: flex;
    align-items: center;
    gap:.5rem;
    font-size:1.5rem;
  }
  .value{
    font-size:1rem;
    margin-left:.2rem;
  }
  .nav-links{
    display: none;
    justify-content: center; 
    gap:1.5rem;
    align-items:center;
    padding:0 5rem .9em 5rem;
  }
  ul.nav-links > :first-child{
    color: var(--clr-light-red);
  }
.login{
  position: relative;
}
  .dropdown-content{
   display: none; 
   position: absolute;
   right:0;
  }
  .icon:hover .dropdown-content {
    display: block;
  }

  @media (min-width:1000px) {
     .top-row{
      padding:.9em 5rem;
  } 
    .help-btn{
    display:flex;
  }
    .nav-links{
    display: flex;
  }
  .hamburger{
    display: none;
  }
  }

`
export default Navbar