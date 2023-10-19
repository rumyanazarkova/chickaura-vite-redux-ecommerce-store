import styled from "styled-components"
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSolidChevronRight } from 'react-icons/bi'
const FAQmenu = () => {
 
  return <Wrapper>
    <div className="heading">
   <h5>Popular questions</h5>
   <h5 className="icon-question"> <AiOutlineQuestionCircle/></h5>
  
   </div>
   <div className="links">

   <Link to='/shipping-info'>Shipping info<span><BiSolidChevronRight/></span></Link>

   <Link to='/returns'>30 day return policy<span><BiSolidChevronRight/></span></Link>

   <Link to='/order-changes'>Can I make changes to my order?<span><BiSolidChevronRight/></span></Link>

   <Link to='/order-cancellation'>Order Cancellation<span><BiSolidChevronRight/></span></Link>
   </div>
   </Wrapper>
}

const Wrapper= styled.article`
  background: var(--clr-very-light-grey);
  padding: 2rem;
  min-width:350px;
  max-height:600px;
  .heading{
    display: flex;
    align-items: center;
    gap:.5rem;
    margin-bottom:1rem;
    font-size:1.5rem;
    font-weight: 600;  
    color:black;
  }
  .icon-question{
    display: flex;
    font-size: 2.5rem;
  }
  .links{
    display: flex;
    flex-direction: column;
    gap:1.5rem;
  }

  .links a{
    display:flex;
   white-space:nowrap;
    gap:.2rem;
    text-decoration: none;
    font-weight: 500;
    color:black;
  }
  .links span{
   display: flex;
   justify-content: center;
   place-items:center;  
  }
  .links a:hover,
  .links a:active{
    color:black;
    font-weight: 600;
  }


`
export default FAQmenu