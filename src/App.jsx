
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Home,
  Footer,
  Women,
  Men,
  MidSeasonSale,
  ContactUs,
  ShippingInfo,
  PrivacyPolicy,
  Returns,
  OrderChanges,
  OrderCancellation,
  Cart,
  Favorites,
  SingleProduct,
  SquarePaymentForm,
  Newsletter,
  ThankYou,
  LetUsHelpYou,
  AuthWrapper,
  PrivateRoute
} from './pages'


function App() {

  return (<AuthWrapper>
    {(authProps) => (
    <Router>
      <Navbar {...authProps}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mid-season-sale' element={<MidSeasonSale />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />


        <Route path='/cart' element={<Cart  {...authProps}/>} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path=':product/:id' element={<SingleProduct />} />
        
       
        <Route path='/checkout' element={
        <PrivateRoute {...authProps}>
        <SquarePaymentForm />
        </PrivateRoute>  
        } />
       

        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/shipping-info' element={<ShippingInfo />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/returns' element={<Returns />} />
        <Route path='/order-changes' element={<OrderChanges />} />
        <Route path='/order-cancellation' element={<OrderCancellation />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/subscribtion' element={<ThankYou />} />
        <Route path='/let-us-help-you' element={<LetUsHelpYou />} />
        
      </Routes>
      <Footer />
    </Router>
    )}
   </AuthWrapper>
  )
}

export default App

