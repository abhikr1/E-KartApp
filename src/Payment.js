import React from 'react';

import './Product.css';
import NavBar from './NavBar'

  function initiatePayment(paymentHandlers, onOrderCreateFailure) {
    fetch('/api/orders', {
        method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
        const options = {
            key: process.env.REACT_APP_RZP_KEY_ID,
            amount: res.amount,
            currency: res.currency,
            order_id: res.rzpOrderId,
            name: 'Avengers-Kart',
            image: '/images/logo3.png',
            description: 'E Commerce',
            theme: {
                color: '#ff3e6c',
            },
            modal: {
                ondismiss: paymentHandlers.onDismiss || (() => {}),
                escape: false,
            },
            handler: response => {
                paymentHandlers.onSuccess &&
                    paymentHandlers.onSuccess({
                        ...response,
                        id: res.orderId,
                        amount: res.amount,
                        currency: res.currency,
                    });
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    },
    err => {
        onOrderCreateFailure && onOrderCreateFailure(err);
    });
}

export { initiatePayment };
