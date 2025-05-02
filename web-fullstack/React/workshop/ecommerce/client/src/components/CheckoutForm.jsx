// Docs Stripe: https://docs.stripe.com/payments/quickstart

import React, { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import "../stripe.css"
import useEcomStore from "../store/ecom-store";
import { saveOrder } from "../api/user";



export default function CheckoutForm() {

    const token = useEcomStore((state) => state.token)

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const payload = await stripe.confirmPayment({
            elements,
            // confirmParams: {
            //     // Make sure to change this to your payment completion page
            //     return_url: "http://localhost:3000/complete",
            // },
            redirect: "if_required"
        });

        if (payload.error) {
            setMessage(payload.error.message);
        } else {
            //Create order
            console.log('Payment successful: ', payload)
            try {
                const res = await saveOrder(token, payload)
                console.log(res)
                setIsLoading(false);


            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }

    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button className="stripe-button" disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}