import Image from 'next/image';

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-green-500 to-green-700 mb-8" style={{height:'500px'}}>
            {/* Background Photo */}
            <div className="absolute inset-0 z-0" style={{opacity:'1.0'}}>
                <Image src="/background-image.jpg" layout="fill" objectFit="cover" alt="Background Photo" />
            </div>
            {/* Content */}
            <div className="relative z-10 text-white py-12 flex justify-center items-center h-full">
                <div className="text-center mr-8" style={{marginTop:'-70px'}}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
                    Shaping a Sustainable Future Together
                        </h1>
                        <p className="text-lg md:text-xl mb-4">
                            <span className="text-3xl md:text-5xl font-bold" style={{ color: 'white', fontFamily: 'Arial, sans-serif'}}>
                            By <span style={{ color: '#FCD34D' }}>Reusing</span> the <span style={{ color: '#FCD34D' }}>Biomass</span>
                            </span>
                        </p>
                        {/* <p className="text-2xl md:text-5xl text-yellow-400 font-bold">
                            Purchase more to get BUNDLE PRICE!
                        </p> */}
                    </div>
                    {/* <div className="w-1/3 relative aspect-video">
                        <Image src="/banner-image.png" layout="fill" objectFit="contain" alt="Banner Image" />
                    </div> */}
                </div>
            </div>
    );
};






// const HomeBanner= () => {
//     return (
//         <div className="relative bg-gradient-to-r
//         from-green-500 to-green-700 mb-8">
//             <div className="mx-auto 
//             px-8 
//             py-12 
//             flex 
//             flex-col 
//             gap-2 
//             md:flex-row 
//             items-center 
//             justify-evenly ">
//                 <div className="mb-8 md:mb-0 text-center ">
//                     <h1 className="text-4xl md:text-6xl
//                     dont-bold text-white mb-4">
//                         Save the World!
//                     </h1>
//                     <p className="text-lg md:text-xl text-white mb-2">
//                         By reusing the biomass
//                     </p>
//                     <p className="text-2xl
//                     md:text-5xl
//                     text-yellow-400
//                     font-bold">
//                         Purchase more to get BUNDLE PRICE!
//                     </p>
//                 </div>
//                 <div className="w-2/3 relative aspect-video">
//                     <Image src="/banner-image.png" fill alt="Banner Image" className="object-contain"/>
//                 </div>
//             </div>
//         </div>
      
//     );
// };
 
export default HomeBanner;