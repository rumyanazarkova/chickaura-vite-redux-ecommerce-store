import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Newsletter = () => {
const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
navigate('/subscribtion')
}
  return <Wrapper>
 <h2>SIGN UP FOR THE NEWSLETTER AND GET 10% DISCOUNT</h2> 

<h5>WANT TO RECEIVE THE LATEST TRENDS AND SPECIAL OFFERS? SIGN UP AND GET 10% DISCOUNT</h5>
<form onSubmit={handleSubmit}>
  <input
    className="email-input"
    placeholder="e-mail"
    type="email"
    required
  />
  <div className="policy">
    <input className="checkbox" type="checkbox" id="acceptTerms" name="acceptTerms" value="acceptTerms" required />
    <p>I accept the <Link to='/privacy-policy'>Privacy Policy</Link></p>
  </div>
  <button type="submit">SIGN UP</button>
</form>
  </Wrapper>
}

const Wrapper=styled.main`
  display:flex;
  flex-direction: column;
  place-content:center;
  gap:2rem;
  padding:0 2.5rem;
  text-align: center;
  h2{
  font-size: 1.7rem;
  }
  h5{
  font-size: 1.1rem;
  font-weight: 600;
  }
  form{
    padding:0 3rem;
    display: flex;
    flex-direction: column;
    gap:1.5rem;
    align-items: start;
  }
  .email-input{
   width:100%;
   display: flex;
   padding-bottom: 1rem;
   border: none;
   border-bottom: 1px solid var(--clr-light-grey);
  }
  p{
    font-size: .9rem;
    
  }
p a{
  text-decoration: none;
  font-weight: 600;
  color: var(--clr-dark-grey);
}
  .policy{
    display: flex;
    gap:.3rem;
   
  }
  button{
    background: black;
    color:white;
    margin:0 auto;
    font-size:1.3rem;
    padding:.7rem 2rem;
  }
  @media (min-width: 1000px) {
   form{
     margin:0 auto;
  }
  .email-input{
    width:600px;
  }
  h2{
    font-size: 2rem;
  }
  h5{
    font-size: 1.2rem;
  }
  }


`
export default Newsletter