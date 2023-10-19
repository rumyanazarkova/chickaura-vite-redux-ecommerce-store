import { useSelector } from "react-redux"
import { formatPrice } from "../helpers";
import styled from "styled-components";
import { BsArrowReturnLeft } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";

const CartTotals = ({loginWithRedirect,user}) => {
    const allCartItems = useSelector((state) => state.cart.cartItems);

    let productPrice = 0;
    let savedAmount = null;
    allCartItems.forEach((item) => {
        const itemPrice = item.qty * item.price;
        productPrice += itemPrice;

        if (item.oldPrice) {
            const itemDiscount = item.oldPrice - item.price;
            savedAmount += itemDiscount;
        }
    });

    let delivery = 550;

    if (productPrice >= 5000) {
        delivery = 0;
    }

    const total = delivery + productPrice
    const couponCode = '';

    return <Wrapper>
        {savedAmount && <div className="total-saved">
            <p>Total saved: {formatPrice(savedAmount)}</p>
        </div>}

        <form className="coupon">
            <label htmlFor="coupon">Add a coupon</label>
            <div className="input-submit">
                <input
                    type="text"
                    className="coupon-input"
                    defaultValue={couponCode}
                />
                <button className='coupon-btn' type="submit">Add</button>
            </div>
        </form>

        <div className="pricing">
            <p>Product pice:</p>
            <span> {formatPrice(productPrice)}</span>
            <p>Delivery:</p>
            <span> {formatPrice(delivery)}</span>
            <p className="total">Total:</p>
            <span className="total">{formatPrice(total)}</span>
        </div>

        {user ? <Link to='/checkout' className='checkout btn'>Go to checkout</Link> :
      <button type='button' className='checkout btn' onClick={loginWithRedirect}>Log In</button>
      }

        <div className="info">
            <p><span className="info-logo-icon-span">C</span>  Delivery to the store is <span>always free</span></p>

            <div className="icon-text-info">
                <p className='info-icon'>
                    <CiDeliveryTruck />
                </p>
                <p>Free delivery on purchases over $50</p>
            </div>
            <div className="icon-text-info">
                <p className='info-icon'>
                    <BsArrowReturnLeft />
                </p>
                <p>Free return up to 30 days</p>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    padding:1rem 0;
    .total-saved{
        background: var(--clr-green);
        padding: 1rem 0;
        text-align: center;
        font-size: .9rem;
        font-weight: 500;
        color:black;
    }
    .pricing{
        margin-top:1rem;
        border-top:1px solid #d1d0d0;
        padding: 1rem;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:.5rem;
        font-size: 1rem;
        color:var(--clr-dark-grey);
        font-weight: 500;
    }
   .pricing span{
        display: flex;
        justify-content: end;
    }
    .total{
        font-weight: 600;
        font-size: 1.1rem;
    }
    .checkout{
        position: sticky;
        bottom:2rem;
        margin: 0 auto;
        display: flex;
        width:95%;
        place-content:center;
        padding:.8rem 0;
        font-size:1.2rem;
        text-decoration: none;  
    }
   
    .coupon{
        display: grid; 
        padding:1rem;   
    }
    .coupon label{
        font-size: .8rem;
        font-weight: 600;
        color:black;
    }
    .input-submit{
        display: flex;
        gap:.5rem
    }
    .coupon input{
        background: transparent;
        border:none;
        border-bottom: 1px solid var(--clr-light-grey);
    }
    .coupon-btn{
        border:3px solid black;
        padding:.5rem 2rem;
        font-weight: 600;
    }
    .coupon-btn:active{
        background: var(--black);
        color:var(--white);
    }
    .info {
    color:var(--clr-dark-grey); 
      padding:2.5rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: .9rem;
      font-weight: 500;

    }
    .icon-text-info{
        display: flex;
        align-items: center;
        gap:.6rem;
    }
    .info span{
        font-weight:700;
    }
    .info-icon{
        color: black;
        font-size: 1.5rem;
    }
    .info-logo-icon-span{
        padding:.1rem .3rem;
        background: #d1d0d0;
        margin-right:.5rem;
    }
@media (min-width: 1000px) {
  padding: 1rem;
.pricing{
    padding: 2rem 1rem;
    border:none;
    gap:1rem;
}
.coupon label{
        font-size: .9rem;   
    }
 .coupon input{ 
      flex:1; 
 }  
 .coupon-btn{  
        padding:.5rem 2.5rem;
 }
 .checkout-btn{  
        width:100%;    
        position: static;
}

}

 

`
export default CartTotals