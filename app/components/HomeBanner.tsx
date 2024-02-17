const HomeBanner= () => {
    return (
        <div className="relative bg-gradient-to-r
        from-green-500 to-green-700 mb-8">
            <div className="mx-auto 
            px-8 
            py-12 
            flex 
            flex-col 
            gap-2 
            md:flex-row 
            items-center 
            justify-evenly ">
                <div className="mb-8 md:mb-0 text-center ">
                    <h1 className="text-4xl md:text-6xl
                    dont-bold text-white mb-4">
                        Save the World!
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2">
                        By reusing the biomass
                    </p>
                    <p className="text-2xl
                    md:text-5xl
                    text-yellow-400
                    font-bold">
                        Purchase more to get BUNDLE PRICE!
                    </p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    {/* <Image
                    src='/banner.image.png'
                    alt='Banner Image'
                    className="object-contain"
                    /> */}
                </div>
            </div>
        </div>
      
    );
};
 
export default HomeBanner;