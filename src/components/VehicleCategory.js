function VehicleCategory({img, title}) {
    return (
        <div className=" z-30 relative ">
            <button>
            <img src={img} 
                    alt="" 
                    className=" w-[50%] max-w-[400px] relative z-10 p-1 bg-[#ffffff] mx-[40px] mb-[40px] rounded-lg md:w-[75%] "
                />

                <div className=" text-xs md:text-sm mx-[40px] my-[-25%] md:mx-[40px] md:my-[-45%] lg:my-[-40%] rounded-r-lg bg-[#ffffff] w-[120px] h-5 md:h-7 flex justify-center z-30 absolute  ">
                    <p className=" text-[#ff4d00] ">{title}</p>
                </div>
            </button>                
        </div>
    )
}

export default VehicleCategory;
