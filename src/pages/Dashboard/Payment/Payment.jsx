import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";


   //  TODO : add publishable key 

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {


    return (
        <div className="ml-5">

            <SectionTitle
            heading={'Payment'}
            subHeading={'Please pay to eat'}
            
            ></SectionTitle>

            <div >
                <Elements stripe = {stripePromise} >

                    <CheckoutForm></CheckoutForm>


                </Elements>
            </div>


            
        </div>
    );
};

export default Payment;