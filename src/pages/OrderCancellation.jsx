import styled from "styled-components"
import FAQmenu from "../components/FAQmenu"


const OrderCancellation = () => {
  return <Wrapper>
    <FAQmenu />
    <article className="faq-area">
      <h2>Order cancellation</h2>

      <h5>Do you want to cancel your order?</h5>
      <p>Customer Service also cannot cancel orders.If you wanted to cancel your order but it was too late, we suggest to do the following:
      </p>

      <p><span>1. </span>After the order has been sent you can refuse to collect the parcel from the courier (it will be returned to us and your money will be refunded).</p>

      <p><span>2. </span>After you have received the parcel you can create a returns form within 30 days from the date of delivery and return the items back to us.</p>

      <h5>Why was my order cancelled?</h5>

      <p>Orders may sometimes get cancelled because of the following factors:</p>

      <li>lack of finalising payment</li>
      <li>an error in communication between the payment system and our data base </li>
      <li>item going out of stock during checkout</li>

      <p>We are very sorry for any inconvenience this may cause, if the desired items are still available we recommend to place a new order.</p>

      <p>If an item is out of stock on our website we recommend to do the following:</p>

      <p><span>1. </span>Use the 'Notify me when available' option. You will be notified by e-mail when an item will be back in stock. Important! Please remember that everyone who signed up to be notified receives an e-mail informing them about an item being back in stock, this means that sometimes items can be sold out once again before you are able to finalise a purchase.</p>
      <p><span>2. </span>Check availability in store. Please choose the desired size and the website will show you whether it's available in our stores.</p>
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
export default OrderCancellation