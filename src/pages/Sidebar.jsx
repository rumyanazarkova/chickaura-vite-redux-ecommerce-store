import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const Sidebar = ({setIsSidebarOpen}) => {
 

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return <Wrapper>
   <div className="close-btn-section">
   <button onClick={handleCloseSidebar}><AiOutlineClose/></button>
    </div> 
   
  <div className="cathegory-links">
  <Link to='/mid-season-sale' onClick={handleCloseSidebar}>MID SEASON SALE</Link>
  <Link to='/women' onClick={handleCloseSidebar}>WOMEN</Link>
  <Link to='/men' onClick={handleCloseSidebar}>MEN</Link>
  </div>

  <div className="help-links">
  <Link to='/newsletter' onClick={handleCloseSidebar}>Register for newsletter and get 10% off</Link>
  <Link to='/contact-us' onClick={handleCloseSidebar}>ChickAura Stores</Link>
  <Link to='/privacy-policy' onClick={handleCloseSidebar}>Help</Link>
  </div> 
    </Wrapper>
}

const Wrapper=styled.section`
    z-index: 15;
    background:white;
    position:absolute; 
    width:100%;
    color:var(--clr-dark-gray);
    font-weight: 500;

a{
color:var(--clr-dark-grey);
 text-decoration:none;
 cursor: pointer;
}
.close-btn-section{
    display:flex;
    place-content:end;
    padding: 1.5rem 2rem;
}  
.close-btn-section button{
  background: transparent;
  color:black;
  font-size:1.7rem;
}
.cathegory-links{
    display:flex;
    flex-direction:column;
}
.cathegory-links a{
 padding:1.5rem ;
 border-bottom: 2px solid #cecece;
}
.cathegory-links > :first-child{
    font-weight: 600;
    color: var(--clr-red);
}
.help-links{
   display: flex;
   flex-wrap:wrap;
   flex-direction: column;
   align-items: center;
   text-align:center;
   gap:1.6rem;
   padding: 2rem 1rem;
}
@media (min-width: 1000px) {
    display: none;
}
`
export default Sidebar