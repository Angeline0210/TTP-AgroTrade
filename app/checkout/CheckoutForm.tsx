'use client'

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Heading from "../components/Heading";

interface CheckoutFormProps{
    clientSecret:string,
    handleSetPaymentSucess:(value:boolean)=>void
}
const CheckoutForm:React.FC<CheckoutFormProps> = ({
    clientSecret,
    handleSetPaymentSucess}) => {
        const{cartTotalAmount, handleClearCart, handleSetPaymentIntent}=useCart()
        const stripe=useStripe()
        const elements= useElements()
        const [isLoading, setIsLoading]=useState(false)
        const formattedPrice=formatPrice(cartTotalAmount);

        useEffect(()=>{
            if (!stripe){
                return
            }
            if (!clientSecret){
                return
            }
            handleSetPaymentSucess(false)
        },[stripe]);

        const handleSubmit=async(e: React.FormEvent)=>{
            e.preventDefault();

            if(!stripe ||!elements ){
                return
            }
            setIsLoading(true)

            stripe.confirmPayment({
                elements,redirect:'if_required'
            }).then(result=>{
                if(!result.error){
                    toast.success('Checkout Success')

                    handleClearCart()
                    handleSetPaymentSucess(true)
                    handleSetPaymentIntent(null)
                }
                setIsLoading(false)
            })
        }

    return <form onSubmit={handleSubmit} id="payment-form">
        <div className="mb-6">
            <Heading title="Enter your details to complete checkout"/>
        </div>
        <h2 className="font-semibold mt-4 mb-2">Payment Information</h2>
    </form>;
}
 
export default CheckoutForm;







// import { useCart } from "@/hooks/useCart";
// import { formatPrice } from "@/utils/formatPrice";
// import { useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import Heading from "../components/Heading";

// interface CheckoutFormProps {
//   clientSecret: string;
//   handleSetPaymentSuccess: (value: boolean) => void;
// }

// const CheckoutForm: React.FC<CheckoutFormProps> = ({
//   clientSecret,
//   handleSetPaymentSuccess,
// }) => {
//   const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } = useCart();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isLoading, setIsLoading] = useState(false);
//   const formattedPrice = formatPrice(cartTotalAmount);

//   useEffect(() => {
//     if (!stripe || !clientSecret) {
//       return;
//     }
//     handleSetPaymentSuccess(false);
//   }, [stripe, clientSecret]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//         const cardElement = elements.getElement("card");
    
//         if (!cardElement) {
//           console.error("Card element not found");
//           return;
//         }
    
//         const result = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: cardElement,
//           },
//         });

//       if (result.error) {
//         console.error(result.error.message);
//         const errorMessage = result.error.message || "An error occurred during payment";
//         toast.error(errorMessage);
//       } else {
//         // Payment successful
//         toast.success('Payment Success');
//         handleClearCart();
//         handleSetPaymentSuccess(true);
//         handleSetPaymentIntent(null);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} id="payment-form">
//       <div className="mb-6">
//         <Heading title="Enter your details to complete checkout" />
//       </div>
//       <h2 className="font-semibold mt-4 mb-2">Payment Information</h2>
//       {/* Add your payment form fields and submit button here */}
//     </form>
//   );
// };

// export default CheckoutForm;
