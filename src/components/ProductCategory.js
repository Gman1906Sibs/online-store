

function ProductCategory() {
    return (
        <div className=" bg-white w-full mx-[20px] my-[10px] px-3 py-2 rounded-lg transition transform hover:scale-110 " >
            <p className=" mx-3 my-2 ">Engine Spares</p>

            <img src="https://media.autopro.com.au/media/catalog/category/full_sets_engine.jpg"
                alt="" 
                className=" "
            />

            <button className=" mx-3 my-2 text-[#ff4d00] " >shop now</button>
            
        </div>
    )
}

export default ProductCategory
