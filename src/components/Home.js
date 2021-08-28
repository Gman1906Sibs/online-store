import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import ProductCategory from "./ProductCategory";
import VehicleCategory from "./VehicleCategory";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";


function Home() {

    const cart = useSelector((state) => state)
    
    const dispatch = useDispatch();

    const {addToCart, emptyCart, removeFromCart} = bindActionCreators(actionCreators, dispatch);


    return (
        <div className=" bg-black min-h-[100vh] max-w-[100vw] lg:max-w-[1500px] justify-center items-center " >
            <div className=" hidden lg:flex " >
                <HomeSlider />
            </div>
                <div className=" z-[-5] max-w-[1500px] flex-col  md:flex md:flex-row md:justify-evenly ">
                    <VehicleCategory 
                        img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-85e0e9ab23134961c88e4ecea2bff53f.jpg" 
                        title = "Car Spares "
                    />
                    <VehicleCategory 
                        img="https://i.pinimg.com/originals/3a/89/8c/3a898c9553278c317cd8fae633f107b6.jpg"
                        title="Bike Spare"
                    />
                    <VehicleCategory 
                        img="https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/fcb772f5-69d6-47c2-a3db-87dcd413fa74.jpg"
                        title= "Truck Spares"
                    /> 
                </div>

            <div className=" hidden md:flex justify-center ">
                <img src="https://www.deere.com/assets/images/common/products/articulated-dump-trucks/adt-hero-1366x347.jpg" 
                    alt="" 
                    className=" w-[100%] bg-[#ffffff] p-[5px] rounded-lg mx-[40px] md:max-w-[90%] "
                />
            </div>

            <div className=" z-50 text-[20px] md:text-50px lg:text-[100px] flex justify-center m-10 underline text-[#ff4d00] ">
                <h1>SHOP BY CATEGORY</h1>
            </div>

            <div className=" md:flex max-w-[90vw] ">
                
                {/* <div className=" flex justify-between "> */}
                    <ProductCategory 
                        image="https://media.autopro.com.au/media/catalog/category/full_sets_engine.jpg"
                        title="Engine Spares"
                    />
                    <ProductCategory 
                        image="https://sc01.alicdn.com/kf/HTB1cOemOFXXXXa0XXXXq6xXFXXX3.jpg"
                        title="Body Kits / Fairings"
                    />
    
                    <ProductCategory 
                        image="https://static.pxlecdn.com/photos/343276993/medium/ca5e8c9aa17adc2a84de.jpg"
                        title="Tyres /Rims"
                    />
                    <ProductCategory 
                        image="https://www.royaldistributing.com/media/catalog/product/0/4/04ff4e85-88e9-4e3f-88e7-903715ff9ba4_40-85215-3_1.jpg"
                        title="Accessories"
                    />
                
            </div>

            <div className=" hidden md:flex justify-center my-5 ">
                <img src="https://www.koni.com/CorporateSite/media/itt/PageMedia/Cars/Slider/37773_KONI_EU_Mustang_Webslider_R2.jpg?ext=.jpg" 
                    alt="" 
                    className=" w-[100%] bg-[#ffffff] p-[5px] rounded-lg mx-[40px] md:max-w-[90%] "
                />
            </div>

            <Footer />
            
        </div>
    )
}

export default Home
