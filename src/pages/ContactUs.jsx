import StoreLocator from "../components/StoreLocator"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const ContactUs = () => {
  const navigate = useNavigate()
  return <Wrapper>
    <h3 className="heading">Find Our Stores</h3>

    <StoreLocator />

    <div className="stores">
      <div className="store">
        <p>CHICKAURA Mall of Sofia</p>
        <p>Aleksandar Stamboliyski Boulevard 101 A, 1303</p>

        <p>Phone 02081378657</p>
        <div className='working-time'>
          <p>Mon-Fri 10:00-21:00</p>
          <p>Sat 10:00-21:00</p>
          <p>Sun 12:00-20:00</p>
        </div>
      </div>
      <div className="store">
        <p>CHICKAURA The Mall</p>
        <p>Tsarigradsko shose Boulevard 115, 1238</p>

        <p>Phone 0208457807</p>
        <div className='working-time'>
          <p>Mon-Fri 10:00-21:00</p>
          <p>Sat 10:00-21:00</p>
          <p>Sun 12:00-20:00</p>
        </div>
      </div>
      <div className="store">
        <p>CHICKAURA Paradise Center</p>
        <p>Cherni vrah Boulevard 100, 1407</p>

        <p>Phone 02081375422</p>
        <div className='working-time'>
          <p>Mon-Fri 10:00-21:00</p>
          <p>Sat 10:00-21:00</p>
          <p>Sun 12:00-20:00</p>
        </div>
      </div>
    </div>

    <div className="contact-us">
      <h3>Need help?</h3>
      <h5>If you require assistance or have any questions, don't hesitate to reach out. Our team is here to help you. </h5>
      <button className="help btn" onClick={() => navigate('/let-us-help-you')}>Write to us</button>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  display: grid;
  margin: 1rem;
gap:1.5rem;

   .stores{
    display: grid;
    gap:2rem;
   }
   .store{
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    gap:.7rem;
    p{
      line-height: 1.4;
    }
   }
   .contact-us{
   display: flex;
   flex-direction: column;
   gap:2rem;
    text-align: center;
    padding: 3rem;
   }
   .contact-us h3{
  font-size: 2rem;
   }
   .contact-us h5{
font-size: 1.3rem;
   }
.help{
  margin: 0 auto;
  font-size: 1.7rem;
  padding: .7rem 2rem;

}
   @media (min-width: 800px) {
    .stores{
    display: flex;
    gap:1rem;
   }
   }
 
  

  
`

export default ContactUs