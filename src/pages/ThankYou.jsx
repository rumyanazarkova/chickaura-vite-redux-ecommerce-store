import styled from "styled-components"

const ThankYou = () => {
  return <Wrapper>
    <section>
      <h2>THANK YOU</h2>
      <h5>SOON YOU WILL GET AN E-MAIL WITH A CONFIRMATION LINK.</h5>

      <p>If you can`t find the email after a few minutes please double check your inbox, including SPAM or Offers tabs etc.
        Please be aware that some providers may extend e-mail receiving time.
        Thank you for your patience.</p>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
 display:flex;
  place-content:center;
section{
  display:flex;
  flex-direction: column;
  place-content:center; 
  gap:2rem;
  text-align: center;
  padding:0 2.5rem;
}
  h2{
  font-size: 1.7rem;
  }
  h5{
  font-size: 1.1rem;
  font-weight: 600;
  }
  p{
    font-size: .9rem;
  }
  @media (min-width: 1000px){
    section{
      max-width:1000px;
    }
    h2{
  font-size: 2rem;
  }
  h5{
  font-size: 1.3rem;
  font-weight: 600;
  }
  p{
    font-size: 1.1rem;
  }
  }
`
export default ThankYou