import Footer from "./Footer";
import HomeSlider from "./HomeSlider";
import ProductCategory from "./ProductCategory";
import VehicleCategory from "./VehicleCategory";

function Home() {
    return (
        <div className=" bg-black min-h-[100vh] max-w-[1500px] " >
            <div className=" hidden lg:flex " >
                <HomeSlider />
            </div>

            <div className=" z-[-5] max-w-[1500px] flex-col  md:flex md:flex-row md:justify-evenly ">
                <VehicleCategory />
                <VehicleCategory />
                <VehicleCategory /> 
            </div>

            <div className=" hidden md:flex justify-center ">
                <img src="https://www.deere.com/assets/images/common/products/articulated-dump-trucks/adt-hero-1366x347.jpg" 
                    alt="" 
                    className=" w-[100%] bg-[#ffffff] p-[5px] rounded-lg mx-[40px] md:max-w-[90%] "
                />
            </div>

            <div className=" z-50 text-[100px] flex justify-center m-10 underline text-[#ff4d00] ">
                <h1>SHOP BY CATEGORY</h1>
            </div>

            <div className=" md:flex ">
                <div className=" flex justify-between ">
                    <ProductCategory />
                    <ProductCategory />
                </div>
                <div className=" flex justify-between ">
                    <ProductCategory />
                    <ProductCategory />
                </div>
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
