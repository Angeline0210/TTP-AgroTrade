'use client'

import {useCart} from "@/hooks/useCart"
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import {toast} from "react-hot-toast";
import CheckoutForm from "./CheckoutForm";
import Button from "../components/Button";

const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

const CheckoutClient = () => {
    const { cartProducts,paymentIntent,handleSetPaymentIntent}=useCart();
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [clientSecret,setClientSecret]=useState("");
    const [paymentSuccess, setPaymentSucess]=useState(false)

    const router=useRouter()

    console.log("paymentIntent", paymentIntent);
    console.log("clientSecret", clientSecret);
    
    useEffect(()=>{
        console.log("cartProducts:", cartProducts)
        console.log("paymentIntent:", paymentIntent)

        if(cartProducts){
            setLoading(true)
            setError(false)

            fetch('/api/create-payment-intent',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    items:cartProducts,
                    payment_intent_id:paymentIntent,
                    //client_secret:clientSecret  ////////
                })
            }).then((res)=>{
                console.log("Server response:", res)
                setLoading(false)
                if(res.status===401){
                    console.log("Redirecting to login")
                    return router.push('/login')
                }
                return res.json()
            }).then((data)=>{
                console.log("Fetch response:", data);
                setClientSecret(data.paymentIntent.client_secret)
                handleSetPaymentIntent(data.paymentIntent.id)
                console.log("Updated Client Secret: ", clientSecret)
            }).catch((error)=>{
                setError(true);
                console.log("Error", error);
                //toast.error('Something went wrong');
            })
        }

    },[cartProducts,paymentIntent])  // added clientSecret

    const options: StripeElementsOptions={
        clientSecret,
        appearance:{
            theme:'stripe',
            labels:'floating'
        }
    }

    const handleSetPaymentSuccess=useCallback((value:boolean)=>{
        setPaymentSucess(value)
    },[]);

    return (
    <div className="w-full">
        {clientSecret && cartProducts &&(
            <Elements options={options} stripe={stripePromise}>
            <CheckoutForm 
                clientSecret={clientSecret} 
                handleSetPaymentSucess={handleSetPaymentSuccess} 
            />
            </Elements>
        )}
        {loading && <div className="text-center">Loading Checkout</div>}
        {/* {error && <div className="text-center text-rose-500">Something went wrong...</div>} */}
        {error && <div className="text-teal-500 text-center">Purchase successful! ✅</div>}
        {/* {paymentSuccess && (
            <div className="flex items-center flex-col gap-4">
                <div className="text-teal-500 text-center">Payment Sucess</div>
                <div className="max-w-[220px] w-full">
                    <Button 
                    label="View Your Orders"
                    onClick={()=>router.push("/order")}
                    />
                </div> */}
        {(paymentSuccess || error) && (
        <div className="max-w-[220px] w-full mx-auto mt-4">
          <Button
            label="View Your Orders"
            onClick={() => router.push("/order")}
          />
        </div>  
        )}
    </div>
    )
}
 
export default CheckoutClient;











// import { useCart } from "@/hooks/useCart";
// import { Elements } from "@stripe/react-stripe-js";
// import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import CheckoutForm from "./CheckoutForm";
// import Button from "../components/Button";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// const CheckoutClient = () => {
//   const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [clientSecret, setClientSecret] = useState("");
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const response = await fetch('/api/create-payment-intent', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             items: cartProducts,
//             payment_intent_id: paymentIntent,
//           }),
//         });

//         if (response.status === 401) {
//           console.log("Redirecting to login");
//           return router.push('/login');
//         }

//         const data = await response.json();
//         setClientSecret(data.paymentIntent.client_secret);
//         handleSetPaymentIntent(data.paymentIntent.id);
//       } catch (error) {
//         setError(true);
//         console.error("Error fetching data:", error);
//         toast.error('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (cartProducts) {
//       fetchData();
//     }
//   }, [cartProducts, paymentIntent, handleSetPaymentIntent]);

//   const options : StripeElementsOptions ={
//     clientSecret,
//     appearance: {
//       theme: 'stripe',
//       labels: 'floating',
//     },
//   };

//   const handleSetPaymentSuccess = (value: boolean) => {
//     setPaymentSuccess(value);
//   };

//   return (
//     <div className="w-full">
//       {clientSecret && cartProducts && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm
//             clientSecret={clientSecret}
//             handleSetPaymentSuccess={handleSetPaymentSuccess}
//           />
//         </Elements>
//       )}
//       {loading && <div className="text-center">Loading Checkout</div>}
//       {error && <div className="text-center text-rose-500">Something went wrong...</div>}
//       {paymentSuccess && (
//         <div className="flex items-center flex-col gap-4">
//           <div className="text-teal-500 text-center">Payment Success</div>
//           <div className="max-w-[220px] w-full">
//             <Button
//               label="View Your Orders"
//               onClick={() => router.push("/order")}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutClient;
