import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HlWuXFycZUXA8c0dCMMQG9KaFTd5ngXG5CZ7IZgUmqdFxiWNdLPm1QmkAWqgBZqITvxsOp29ucrZbwQo3hJZpHb004P4fhWsk";

  const onToken = (token) => {
    console.log(token);
    alert("Patment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
