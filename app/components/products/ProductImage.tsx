"use client"
import{CartProductType} from "@/app/product/[productId]/ProductDetails";
import Image from 'next/image';


interface ProductImageProps{
    cartProduct:CartProductType,
    product:any,
    image:{
        src:string;
        alt:string;
    },
}

const ProductImage:React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    image,
}) => {
    return ( 
    // <div className="grid
    // grid-cols-6
    // gap-2
    // h-full
    // max-h-[500px]
    // min-h-[300px]
    // sm:min-h-[400px]">
    //     <div className="flex
    //     flex-col
    //     items-center
    //     justify-center
    //     gap-4
    //     cursor-pointer
    //     border
    //     h-full
    //     max-h
    //     max-h-[500px]
    //     min-h-[300px]
    //     sm:min-h-[400px]">
    //     <div className={`relative w-[80%] aspect-square rounded`}> 
    //         {/* <Image src={image.image} fill className="object-contain" /> */}
    //         <Image src={image.src} alt={image.alt} className="w-full object-contain" width={500} height={500} />
    //     </div>
    //     </div>
        <div className="cols-span-5 relative aspect-square">
            <Image fill
            src={image.src}
            alt={image.alt}
            className="w-full
            h-full
            object-contain
            max-h-[500px]
            min-h-[300px]
            sm:min-h-[400px]
            "  />
        </div>
    // </div> 
    );
}

export default ProductImage ;