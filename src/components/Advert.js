function Advert({image}) {
    return (
        <div className=" w-[100vw] flex justify-center border-t-[1px] border-gray-600 border-b-[1px] p-2  ">
            <img
                className="  max-w-[500px] "
                src={image}  
                alt="" 
            />
        </div>
    )
}

export default Advert
