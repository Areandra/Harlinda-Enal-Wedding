import CreditCard from '../components/CreditCard/CreditCard';
import '../page/GiftPage.css'

function GiftPage() {
  return (
    <>
        <section id="GiftPage">
            <div>
                <h1>GiftPage</h1>
                <p>
                  Tanpa mengurangi rasa hormat,bagi anda yang ingin memberikan tanda kasih untuk mempelai, dapat melalui virtual acount dan e-wallet.
                </p>
                <CreditCard name = "Aril"/>
            </div>
        </section>
    </>
  );
}
export default GiftPage