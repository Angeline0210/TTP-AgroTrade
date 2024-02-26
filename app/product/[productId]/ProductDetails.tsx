'use client';
import SetQuantity from "@/app/components/products/SetQuantity";
import {Rating} from "@mui/material";
import {useCallback,useEffect,useState} from 'react';
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductDetailsProps{
    product:any
}

export type CartProductType={
    id:string,
    name:string,
    description:string,
    category:string,
    image: {
        src:string;
        alt:string;
    },
    quantity:number,
    price:number
}


const Horizontal=()=>{
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails: React.FC<ProductDetailsProps>=({product})=>{
    const {handleAddProductToCart,cartProducts}=useCart()
    // const {cartTotalQty}=useCart()
    const[isProductInCart,setIsProductInCart]=useState(false);
    const productRating= product.reviews.reduce((acc:number,item:any)=>item.rating +acc, 0) /product.reviews.length
    const [cartProduct, setCartProduct]=useState<CartProductType>({ 
        id: product.id,
        name: product.name,
        description: product.description,
        category:product.category,
        image: product.image,
        quantity:1,
        price:product.price,

    })
    const router=useRouter()

    console.log(cartProducts);

    useEffect(()=>{
        setIsProductInCart(false)
        if(cartProducts){
            const existingIndex=cartProducts.findIndex((item:any)=>item.id===product.id)
            if(existingIndex >-1){
                setIsProductInCart(true);
            }
        }
    },[cartProducts]);

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prev) => {
            if (prev.quantity < 99) {
                return { ...prev, quantity: prev.quantity + 1 };
            }
            return prev; // Don't allow the quantity to go beyond 99
        });
    }, [setCartProduct]);
    
    const handleQtyDecrease = useCallback(() => {
        setCartProduct((prev) => {
            if (prev.quantity > 1) {
                return { ...prev, quantity: prev.quantity - 1 };
            }
            return prev; // Don't allow the quantity to go below 1
        });
    }, [setCartProduct]);
    

    // const handleQtyIncrease=useCallback(()=>{
    //     if(cartProduct.quantity === 99){
    //         return;
    //     }

    //     setCartProduct((prev)=>{
    //         return {...prev, quantity: ++prev.quantity}
    //     });
    // },[cartProduct]);
    
    // const handleQtyDecrease=useCallback(()=>{
    //     if(cartProduct.quantity === 1){
    //         return;
    //     }

    //     setCartProduct((prev)=>{
    //         return {...prev, quantity: --prev.quantity}
    //     });
    // },[cartProduct]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} image={product.image[0]}/>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium 
                text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2" >
                    <Rating value={productRating} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">{product.description}</div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">CATEGORY: </span>{product.category}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? 'In stock' : 'Out of stock'}</div>
                <Horizontal/>

                {isProductInCart? (
                <>
                <p className="mb-2 text-slate-500 flex item-center gap-1">
                    <MdCheckCircle className="text-teal-400" size={20} />
                    <span>Product added to cart</span>
                </p>
                <div className="max-w-[300px]">
                    <Button label="View Cart" outline onClick={()=>{router.push('/cart')}}/>
                </div>
                </>):(
                <>
                    <SetQuantity cartProduct={cartProduct}
                    handleQtyIncrease={handleQtyIncrease}
                    handleQtyDecrease={handleQtyDecrease}
                    />
                    <Horizontal/>
                    <div className="max-w-[300px]">
                        <Button 
                        label="Add to Cart" onClick={()=> handleAddProductToCart(cartProduct)} />
                    </div>
                </>)}
                
            </div>
        </div>
    );
};

export default ProductDetails;