import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState('')

    const [transactionId, setTransactionId] = useState('')

    const navigate = useNavigate()


    const { user } = useAuth()

    const [cart, refetch] = useCart()

    const [error, setError] = useState('')



    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure()


    // 

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    console.log(totalPrice)



    useEffect(() => {

        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {


                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [axiosSecure, totalPrice])

    console.log(clientSecret)



    const handleSubmit = async (event) => {

        event.preventDefault()



        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }




        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Error', error)

            setError(error.message)
        } else {
            console.log('Payment Method', paymentMethod)

            setError('')
        }

        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName | 'anonymous'
                }
            }

        })

        if (confirmError) {
            console.log("confirm error")
        }
        else {
            console.log("payment intent", paymentIntent)

            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)

                setTransactionId(paymentIntent.id)

                // save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuId),
                    status: 'pending'


                }


                // save the payment info to the database

                const res = await axiosSecure.post('/payments', payment)

                console.log("payment saved", res.data)

                if (res.data.insertedId) {

                    // refetch the cart item

                    refetch()

                    Swal.fire({

                        icon: "success",
                        title: "Payment has been successful",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // navigate to the payment history

                    setTimeout(()=> {
                        navigate('/dashboard/paymentHistory')
                    }, 2500)


                }




            }
        }







    }





    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="border px-4 mt-4 bg-orange-600 text-white" type="submit" disabled={!stripe}>
                Pay
            </button>

            <p className="text-red-400 "> {error} </p>


            {transactionId && <p className="text-green-600"> Your transaction id is : {transactionId} </p>}




        </form>
    );
};

export default CheckoutForm;