import styled from "styled-components"
import FAQmenu from "../components/FAQmenu"
import { Link } from "react-router-dom"


const Returns = () => {
  return <Wrapper>
    <FAQmenu />
    <article className="faq-area">
      <h2>30 day returns policy</h2>
      <p>You have 30 days from the date of receipt of your order to return any unwanted or unsuitable products. If you want to return items free of charge you may do so through the pre-paid DPD return label offered by us (requires printing)*, in our stores, or through a shipping method of your choice (this option is carried out at your own cost and responsibility).</p>

      <span>*Please note that DPD return labels are only available for Bulgaria.To arrange a collection, please contact us at support.gb@chickaura.com. Please include your order number and specify a date for a collection with two days notice (from Monday to Friday and excluding bank holidays).</span>

      <p><span>Important! </span>The products which you wish to return cannot bear any marks of usage and must have all the original tags attached.</p>

      <span>Returning in store</span>

      <p>You may also return items in any ChickAura store. Take the products you would like to return as well as your receipt and head to one of the tills in order to go through with a return. You do not need to take the original box which your order was delivered in.</p>

      <p>You can check location of the closest store <span><Link to='/contact-us'>HERE.</Link></span></p>
    </article>
  </Wrapper>
}

const Wrapper = styled.main`
  display: grid;
  a{
    text-decoration: none;
    color:var(--clr-dark-gray);
  }
  @media (min-width:800px) {
    display: flex;
  }
`
export default Returns