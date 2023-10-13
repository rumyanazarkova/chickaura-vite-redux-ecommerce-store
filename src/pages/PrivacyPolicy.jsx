import styled from "styled-components"
import FAQmenu from '../components/FAQmenu'

const PrivacyPolicy = () => {
  return <Wrapper>
<FAQmenu/>    
<article className="faq-area">
<h2>PRIVACY POLICY</h2>
<p>
Our highest priority is to protect your information and respect your privacy while using our website, so we take care to take appropriate measures for your security and convenience when using our websites. This Policy defines the rules and scope of the processing of your data by us and your related rights and responsibilities.
</p>

<h5>Terms and definitions:</h5>

<p><span>Website</span>- the online store at https://www.chickaura.com/.</p>

<p><span>User</span> – a natural person using the Website.</p>

<p><span>ChickAura</span> - company ChickAura Fashion Bulgaria EOOD, 25 CHERNI VRAH blvd., 1407, Sofia, Bulgaria BG 000000</p>

<p><span>GDPR</span> – Regulation (EU) No. 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free movement of such data and on the repeal of Directive 95/46/EC.</p>

<h5>The personal data administrator is:</h5>

<p>ChickAura Fashion Bulgaria EOOD, 25 CHERNI VRAH blvd., 1407, Sofia, Bulgaria BG 000000</p>

<p>ChickAura has appointed a Data Protection Officer who you can contact for all matters related to the processing of personal data and the exercise of rights related to data processing:</p>

<p>- by mail to: ChickAura Fashion Bulgaria EOOD, 25 CHERNI VRAH blvd., 1407, Sofia, Bulgaria</p>

<p>- by email to: dataprivacy@chickaura.com.</p>

<p>Purposes and legal grounds for the processing of personal data.</p>


<h5>Online Shopping and Services.</h5>

<p>We process your data to the extent necessary for the conclusion and execution of the contract for the sale and offer of our other services, such as:</p>

<p><span>1.</span> providing the possibility to use our websites and mobile applications to present and sell our products;</p>

<p><span>2.</span> providing an opportunity to provide local services, including those offered in LPP's physical stores, as well as during events and exhibitions in which LPP participates;</p>

<p><span>3.</span> implementation of regular and recurring promotional programs;</p>

<p><span>4.</span> processing concluded transactions, such as settlement of payments and shipment of goods;</p>

<p><span>5.</span> providing customer service and exercising their rights, such as warranty or return rights, both before and after the conclusion of the sales contract, including through direct communication (phone, email);</p>

<p><span>6.</span> sharing LPP's proprietary information, notices, newsletters and other direct communications;</p>

<p><span>7.</span> ensuring the protection, functionality and stability of our services at all levels;</p>

<p><span>8.</span> evaluation and measurement of data related to the shopping process, including returns and cancellations by the User;</p>

<p><span>9.</span> offering, providing and using gift vouchers and discounts;</p>

<p><span>10.</span> presentation of LPP's own products based on your fashion preferences.</p>

<p>In case of conclusion and execution of the contract and provision of the services that you intend to use, your personal data is processed on the basis of the concluded sales contract (e.g. Article 6(1)(b) of the GDPR). In other cases, the legitimate interest of the LLP company arising from its work is the legal basis.</p>

<h5>Presentation of products and services.</h5>

<p>Your data may also be processed for:</p>

<p><span>1.</span> analyze the frequency of product views on the Website and present LLP products and services that match your shopping history and preferences;</p>

<p><span>2.</span> personalizing offers of LPP brands based on the data you have shared;</p>

<p><span>3.</span> adapting page views and creating recommendations based on your fashion preferences.</p>

<p>For this purpose, we use device data and access data as well as analog data received from our partners. The personalized presentation of products and services allows you to use the Website conveniently and easily and guarantees the availability of all the products we offer. Through personalization, we can present goods and services that match your needs.</p>

<p>The legal basis for data processing in order to match our products to your preferences is LPP's legitimate interest in the form of direct marketing.</p>
</article>

</Wrapper>
}


const Wrapper=styled.main`
display: grid;
@media (min-width:800px) {
  display: flex;
}
`
export default PrivacyPolicy