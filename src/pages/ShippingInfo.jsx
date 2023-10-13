import styled from "styled-components"
import FAQmenu from "../components/FAQmenu"
import { TbTruckDelivery } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";

const ShippingInfo = () => {
  return <Wrapper>
    <FAQmenu />
    <article className="faq-area">
      <h2>Shipping info</h2>

      <article className="table-shipping">
        <div className="row">
          <h5>Delivery type</h5>
          <h5>Delivery time</h5>
          <h5>Delivery cost</h5>
        </div>
        <div className="row">
          <div>
            <span className="icon"><LiaStoreAltSolid /></span>
            <p>Store Pickup</p>
          </div>

          <p>3-7 days</p>
          <p>FREE</p>
        </div>
        <div className="row">
          <div>
            <span className="icon"><TbTruckDelivery /></span>
            <p>Courier</p>
          </div>
          
          <p>3-7 days</p>
          <p>$5.50</p>
        </div>
      </article>

      <p>Delivery is fully tracked and delivery notifications are sent via SMS, emails are also provided by the carrier. The courier will attempt to deliver the order to the given address and, if he does not find the recipient to be in, will deliver the parcel to the nearest DPD Parcel-shop if possible. If they don’t succeed, the package will be returned to our warehouse. A courier can deliver your package between 8am and 8pm.</p>

      <p>If your order is to be delivered to the ChickAura store you chose, you will be notified via email and a text message that the order is ready for pick up. The order will be waiting for you for 5 days. If the order is not picked up during this time, it will be cancelled and refunded.</p>

      <p>Delivery is not available on bank holidays and weekends. Delivery times cannot be guaranteed. Shipping to underserviced areas may require longer delivery times.</p>

      <span>Important!</span>

      <p>Delivery times may be extended during sales and promotions periods. When sales and promotions periods are underway, the ‘pick-up in store’ option is also unavailable. Current delivery time, cost and available delivery options are visible when placing an order (during checkout).</p>

      <span>Free Delivery</span>
      <p>Watch out for free delivery days! Information about such a promotion is always displayed on the main page and during checkout. In such situations delivery is free for all orders, no matter the order amount.</p>

    </article>
  </Wrapper>


}
const Wrapper = styled.main`
   display: grid;
   .table-shipping{
    margin: 2rem auto;
    display: grid;
    border:1px solid var(--clr-light-grey);
    flex-direction: column;
    flex:1;
   }
   .row{
    display: flex;
    text-align: center;
    align-items:center;
    padding:.5rem;
   }
   .row:not(:last-child){
    border-bottom:1px solid var(--clr-light-grey);
   }
   .row div{
    display: flex;
    flex-direction: column;
    p{
      margin:0;
    }
   }
   .row>p,
   .row>h5,
   .row>div
   {
    flex-basis:100%;
   }
   .icon{
    color:inherit;
    font-size: 2.5rem;
    padding:0;
   }
   @media (min-width:800px) {
    display: flex;
   }

`
export default ShippingInfo