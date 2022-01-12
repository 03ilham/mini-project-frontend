import { PayPalButton } from "react-paypal-button-v2";
import React from "react";
import { useSelector } from "react-redux";

export default function ButtonPaypal() {
  const order = useSelector((state) => state.orderState.order);

  return (
    <div>
      <button>
        <PayPalButton
            // options={{
            //   clientId: "AW6mFv71XPL5XCPir5VC-uzF5JwXu2Px-_qTU5d3WIgftp_GFsHjjv2WY5q2tVM62XKgpfSpjouoq929",
            //   currency: 'ID'
            // }}
          amount={order.order_total_price}
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            console.log(details, data);
          }}
        />
      </button>
    </div>
  );
}
