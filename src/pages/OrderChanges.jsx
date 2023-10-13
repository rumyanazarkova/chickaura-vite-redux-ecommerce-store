import styled from "styled-components"
import FAQmenu from "../components/FAQmenu"
import { Link } from "react-router-dom"

const OrderChanges = () => {
  return <Wrapper>
    <FAQmenu />
    <article className="faq-area">
    <h2>Can I make changes to my order?</h2>
    <p>After your order has been confirmed it is not possible to make any changes to your order.</p>

    <p>If you wanted to cancel your order we suggest to do the following:</p>
    
    <p><span>1. </span>After the order has been sent you can refuse to collect the parcel from the courier (it will be returned to us and your funds will be refunded).</p>

     <p><span>2. </span>After you have received the parcel you can create a returns form within <span>30 days</span> from the date of delivery and return the items back to us.</p>

     <p><span>3. </span>Contact our <Link to='/contact-us'><span>support agents</span></Link> so we can cancel the shippiing</p>
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
export default OrderChanges