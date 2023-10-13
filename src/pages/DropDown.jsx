import styled from "styled-components"


const DropDown = ({loginWithRedirect,user,logout}) => {

  if(user){
    return <Wrapper>
    <p>Welcome, {user.name}</p>
    <button className="login btn" onClick={()=>logout()}>Log Out</button>
    </Wrapper>
  }  

  return <Wrapper>
    <p>Already a member?</p>
    <button className="login btn" onClick={()=>loginWithRedirect()}>Log In</button>
    </Wrapper>
}

const Wrapper=styled.div`
display: flex;
flex-direction: column;
gap:1.5rem;
min-width:250px;
padding:2rem 1rem;
background:var(--white);
color:var(--black);
font-size: 1.3rem;
font-weight: 500;
.login{
    padding:.8rem 2rem;
    font-size: inherit;
    font-weight: 600;
}
`
export default DropDown