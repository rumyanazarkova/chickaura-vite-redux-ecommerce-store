import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { clearCartThunk  } from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';


const SquarePaymentForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  useEffect(() => {
    const initializePaymentForm = async () => {
      const payments = Square.payments(import.meta.env.VITE_SQUARE_APP_ID, import.meta.env.VITE_SQUARE_LOCATION_ID);
      const card = await payments.card();
      await card.attach('#card-container');

      const cardButton = document.getElementById('card-button');
      const statusContainer = document.getElementById('payment-status-container');

      cardButton.addEventListener('click', async () => {
        try {
          const result = await card.tokenize();
          if (result.status === 'OK') {
            console.log(`Payment token is ${result.token}`);
            statusContainer.innerHTML = "Payment Successful!";
            dispatch(clearCartThunk())
            setTimeout(() => {
              navigate('/'); 
            }, 3000);
          } else {
            let errorMessage = `Tokenization failed with status: ${result.status}`;
            if (result.errors) {
              errorMessage += ` and errors: ${JSON.stringify(result.errors)}`;
            }
            throw new Error(errorMessage);
          }
        } catch (e) {
          console.error(e);
          statusContainer.innerHTML = "Payment Failed";
        }
      });
    };

    initializePaymentForm();
  }, []);

  return <Wrapper>
    <section className='checkout'>
    <h3>Dummy card value:</h3>
     <p>Card number: 4111 1111 1111 1111</p> 
      <p>MM/YY: 03/24  CVV: 111 ZIP: 23456</p>
      <div id="payment-form">
        <div id="payment-status-container"></div>
        <div id="card-container"></div>
        <button id="card-button" type="button">Pay</button>
      </div>
      </section>
      </Wrapper>
};

const Wrapper=styled.main`
.checkout{
  padding: 2rem;
  text-align:center;
  display: flex;
  flex-direction: column;
  gap:1rem;
}
#card-button{
 background: var(--black);
 color:var(--white);
 padding: 1rem 2rem;
 font-size: 1.2rem;
 font-weight: 600;
 cursor: pointer;
}
`

export default SquarePaymentForm;
