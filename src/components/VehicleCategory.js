function VehicleCategory() {
    return (
        <div className=" z-30 relative ">
                <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-85e0e9ab23134961c88e4ecea2bff53f.jpg" 
                    alt="" 
                    className=" w-[50%] relative z-10 p-1 bg-[#ffffff] mx-[40px] mb-[40px] rounded-lg md:w-[75%] "
                />

                <div className=" text-xs md:text-sm mx-[40px] my-[-25%] md:mx-[40px] md:my-[-45%] lg:my-[-40%] rounded-r-lg bg-[#ffffff] w-[120px] h-5 md:h-7 flex justify-center z-30 absolute  ">
                    <p className=" text-[#ff4d00] ">Car Spares</p>
                </div>
                
        </div>
    )
}

export default VehicleCategory;
