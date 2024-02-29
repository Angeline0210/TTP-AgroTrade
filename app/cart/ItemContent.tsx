'use client'
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";



interface ItemContentProps{
    item:CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
    const imageSource = Array.isArray(item.image) ? item.image[0] : item.image;
    
    return ( <div className="
    grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    border-t-[1.5px]
    border-slate-200
    py-4
    items-center">
        <div className="
        col-span-2
        justify-start 
        flex
        gap-2
        md:gap-4
        ">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image 
                    src={imageSource.src} 
                    alt={item.name}
                    height={70} 
                    width={70}
                    className="object-contain"  />
                </div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={'/product/${item.id}'}>
                    {truncateText(item.name)}
                    <div className="[w-70px]">
                        <button className="text-slate-500 underline" onClick={()=>{}}>
                            Remove
                        </button>

                    </div>
                </Link>

            </div>
        </div>
        <div>{formatPrice(item.price)}</div>
        <div></div>
        <div></div>
    </div> );
}
 
export default ItemContent;