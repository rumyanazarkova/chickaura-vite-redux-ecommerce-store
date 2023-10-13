import { Navigate } from 'react-router-dom';
import  SquarePaymentForm  from './SquarePaymentForm'

const PrivateRoute = ({ user }) => { 
  if(!user){
    <Navigate to='/'/>
  }
 return <SquarePaymentForm/>

};
export default PrivateRoute;