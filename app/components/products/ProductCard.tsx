'use client';
import Image from 'next/image';
import {truncateText} from "@/utils/truncateText";
import {formatPrice} from "@/utils/formatPrice";
import {Rating} from "@mui/material";

// interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     category:string;
//     inStock:boolean;
//     image: {
//       src: string;
//       alt: string;
//     };
//     // Add other properties as needed
//   }
  

interface ProductCardProps{
    // data:Product;
    data:any
}

const ProductCard:React.FC<ProductCardProps>= ({data}) => {
    const productImage=data.image[0];  //assuming there's only one image

    return (
    <div className="col-span-1 
    cursor-pointer 
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm">
        <div className="flex
        flex-col
        items-center
        w-full
        gap-1">
            <div className="aspect-square 
            overflow-hidden
            relative
            h-40
            w-50">

             <Image
                 fill
                 src={productImage.src}
                //  src={data.images[0].image}
                //  alt={data.name}
                alt={productImage.alt}
                 className="w-full
                 h-full
                 object-cover"
                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px" //added this
                 onError={(e) => console.error('Image failed to load', e)}

            />

            </div>
            <div className="mt-4">{truncateText(data.name)}</div>
            <div>
                <Rating value={4} readOnly />
            </div>
            <div>{data.reviews.length} reviews</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>
    );
}
 
export default ProductCard;