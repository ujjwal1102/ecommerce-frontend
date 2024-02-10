import { useState, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { client } from "../../services/userAuthApis";
import { useNavigate } from "react-router-dom";
const PaymentModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const total_price = 100;
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formattedCardNumber = input.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedCardNumber);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 7);
    const formattedExpiryDate = input
      .replace(/(\d{2})(\d{0,4})/, (match, p1, p2) => {
        return p1 + (p2 ? " / " + p2.slice(0, 4) : "");
      })
      .trim();
    setExpiryDate(formattedExpiryDate);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3));
  };

  const handlePaymentSubmit = async () => {
    const cardFormData = {
      total_price: total_price,
      card_number: cardNumber,
      card_name: cardName,
      cvv: cvv,
      expiry_date: expiryDate,
    };
    await client
      .post("orders/stripe-checkout-payment/", cardFormData)
      .then((res) => {
        console.log("resp : ", res);
        if (res.data.url !== null) {
          // navigate(res.data.url);
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log("err : ", err);
      });
    console.log("Payment submitted");
  };
  return (
    <>
      <Button
        className="btn btn-outline-success w-100"
        variant="transparent"
        onClick={handleShow}
      >
        Proceed to Pay
      </Button>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        contentClassName="rounded-4 "
      >
        <Modal.Header closeButton style={{ border: "0px" }}>
          <Modal.Title>Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <section className="gradient-custom">
            <div className="">
              <div className="row d-flex justify-content-center">
                <div className="col">
                  <div
                    className="card shadow-sm border-0"
                    style={{ borderRadius: 15 }}
                  >
                    <div className="card-body p-4">
                      <form>
                        <div className="d-flex">
                          <div className="w-100">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control "
                              placeholder="1234 5678 9012 3457"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>
                          <div className="my-auto">
                            <span
                              className="material-icons"
                              style={{ fontSize: "48px" }}
                            >
                              credit_card
                            </span>
                          </div>
                        </div>
                        <div className="d-flex ">
                          <div className="w-100">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control "
                              siez={17}
                              placeholder="Cardholder's Name"
                              value={cardName}
                              onChange={handleCardNameChange}
                            />
                            <label className="form-label" htmlFor="typeName">
                              Cardholder's Name
                            </label>
                          </div>
                        </div>
                        <div className="row d-flex gx-4">
                          <div className="col col-lg-6">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control "
                              placeholder="MM / YY"
                              size={7}
                              minLength={7}
                              maxLength={7}
                              value={expiryDate}
                              onChange={handleExpiryDateChange}
                            />
                            <label className="form-label" htmlFor="typeExp">
                              Expiration
                            </label>
                          </div>
                          <div className="col col-lg-4">
                            <input
                              type="password"
                              id="typeText2"
                              className="form-control "
                              placeholder="***"
                              size={1}
                              minLength={3}
                              maxLength={3}
                              value={cvv}
                              onChange={handleCvvChange}
                            />
                            <label className="form-label" htmlFor="typeText2">
                              CVV
                            </label>
                          </div>
                          <div className="col col-lg-1">
                            <button
                              type="button"
                              className=" btn btn-info px-3 btn-rounded"
                              onClick={() => handlePaymentSubmit()}
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
        {/* <Modal.Footer style={{ border: "0px" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default PaymentModal;

// ################################################################################################
// ############ FOR THE FOLLOWING METHOD YOU HAVE TO CREATE CUSTOMER IN STRIPE ##############
// ####################################################################################
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { client } from "../../services/userAuthApis";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const secret_key = ""
// const stripePromise = loadStripe(
//   "pk_test_51OWagBSJ5u8vbpAj2KXxCupHhT7ioPOducutxINS8hoFcKx6n9hdleFiMamRF8INQgz0uE5wPcLxizXpqrEk0ONv001mcZFjus"
// );

// const PaymentForm = () => {
//   const [cardName, setCardName] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleCardNameChange = (e) => {
//     setCardName(e.target.value);
//   };

//   const handlePaymentSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { paymentMethod, error } = await stripe.createPaymentMethod({
//         type: "card",
//         card: cardElement,
//         billing_details: {
//           name: cardName,
//         },
//       });

//       if (error) {
//         console.error(error);
//       } else {
//         const { id } = paymentMethod;

//         // Send the paymentMethod ID to your server for further processing
//         const cardFormData = {
//           total_price: 100,
//           payment_method_id: id,
//           card_name: cardName,
//         };

//         try {
//           const res = await client.post("orders/stripe-checkout-payment/", cardFormData);

//           if (res.data.requires_action) {
//             // Additional authentication required
//             const { payment_intent_client_secret } = res.data;

//             // Use the secret key to confirm the PaymentIntent
//             const { paymentIntent, error } = await stripe.confirmCardPayment(payment_intent_client_secret, {
//               payment_method: id,
//               use_stripe_sdk: true, // Correct parameter name
//             });

//             if (error) {
//               console.error(error);
//             } else if (paymentIntent.status === 'succeeded') {
//               console.log("Payment submitted");
//             } else {
//               console.log("Payment failed");
//             }
//           } else {
//             console.log("Payment submitted");
//           }

//         } catch (err) {
//           console.log("err: ", err);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handlePaymentSubmit}>
//       <CardElement />
//       <div className="w-100 mt-3">
//         <input
//           type="text"
//           id="typeName"
//           className="form-control "
//           size={17}
//           placeholder="Cardholder's Name"
//           value={cardName}
//           onChange={handleCardNameChange}
//         />
//         <label className="form-label" htmlFor="typeName">
//           Cardholder's Name
//         </label>
//       </div>
//       <div className="row d-flex gx-4 mt-3">
//         <div className="col col-lg-1">
//           <button type="submit" className="btn btn-info px-3 btn-rounded">
//             <i className="fas fa-arrow-right" />
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// const PaymentModal = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button
//         className="btn btn-outline-success w-100"
//         variant="transparent"
//         onClick={handleShow}
//       >
//         Proceed to Pay
//       </Button>

//       <Modal
//         centered
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         contentClassName="rounded-4 "
//       >
//         <Modal.Header closeButton style={{ border: "0px" }}>
//           <Modal.Title>Payment Method</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="">
//           <section className="gradient-custom">
//             <div className="">
//               <div className="row d-flex justify-content-center">
//                 <div className="col">
//                   <div
//                     className="card shadow-sm border-0"
//                     style={{ borderRadius: 15 }}
//                   >
//                     <div className="card-body p-4">
//                       <Elements stripe={stripePromise}>
//                         <PaymentForm />
//                       </Elements>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default PaymentModal;
