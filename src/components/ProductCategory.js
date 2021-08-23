import{ Link } from "react-router-dom";

function ProductCategory({image, title}) {
    return (
        <div className="bg-white w-full mx-[20px] my-[10px] px-3 py-2 rounded-lg transition transform md:hover:scale-110  ">
            <Link to="/store">
                <button className=""  >
                    <p className=" text-left mx-3 my-2 ">{title}</p>

                    <img src= {image}
                        alt="" 
                        className="  "
                    />

                    <p className=" text-left mx-3 my-2 text-[#ff4d00] " >shop now</p>
                    
                </button>
            </Link>
        </div>
        
        
    )
}

export default ProductCategory
