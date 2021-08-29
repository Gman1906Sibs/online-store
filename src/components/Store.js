import Advert from "./Advert";
import Footer from "./Footer";
import Product from "./Product";
import SalesTitle from "./SalesTitle";
import ViewMore from "./ViewMore";

function Store() {
    return (
        <div>
            <div className=" bg-black min-h-[100vh] px-3 w-[100vw] ">
                <Advert  image="https://www.tjrstudios.com/wp-content/uploads/2018/07/TJR_WebsiteBanner_Animation1.gif" />   

                <SalesTitle 
                    title='Engine Spares' 
                    text='Manufacturers say that oil should be changed every six months or every 3,000 miles'
                />     

                <div className=" md:flex sm:flex-row ">
                    <Product 
                        id="1477547457"
                        title= 'Bosch Automotive '
                        text= '0242236528 FR7NI33 Iridium Spark Plug (10X Longer Service Life), 10 Pack, FR7NI33-10Pk'
                        price= {2.28}
                        image= "https://www.loyalparts.com/wp-content/uploads/2019/10/TOYOTA-90919-01249-FK20HBR11-GENUINE-IRIDIUM-SPARK-PLUG.jpg"
                        rating= {5}
                    />
                    <Product 
                        className=" hidden "
                        title= 'Castrol 03128C '
                        text= ' Edge High Mileage 5W-30 Advanced Full Synthetic Motor Oil, 5 Quart'
                        price= {12.99}
                        image= "https://sc04.alicdn.com/kf/H769397dda3f44460bfd83ed32fe8ea3dT.png"
                        rating= {4}
                    />
                    <Product 
                        id="3658538"
                        title= 'BLOX RACING '
                        text= ' - Metal Head Gasket - 81mm (For Ls/Vtec Kit) Performance D.I.Y. (BXFL-00500-81)'
                        price= {9.99}
                        image= "http://sc04.alicdn.com/kf/H61693e830a014dd6a87cd26ebac4a784e.jpg"
                        rating= {2}
                    />
                    <ViewMore />
                </div>       

                <SalesTitle 
                    title='Tyres / Rims' 
                    text='Tyres have the date they were produced on the sidewall - it is called a dot code'
                />     

                <div className=" md:flex sm:flex-row ">
                    <Product 
                        id="5858468"
                        title= 'On-Road Car Tyres '
                        text= ', LAFEINA 65mm Rubber RC Tire for 1/10 Traxxas HSP Tamiya HPI Kyosho RC On Road Run-flating Car Parts'
                        price= {62.28}
                        image= "https://m.media-amazon.com/images/I/51cX7KIyBaL.jpg"
                        rating= {3}
                    />
                    <Product 
                        id="68657753"
                        title= 'Motorcycle Rim '
                        text= '  Wheel Decal Accessory Sticker Compatible With Honda CBR 1000RR'
                        price= {99.99}
                        image= "https://image.made-in-china.com/2f0j00SpcYvPBrOfkT/Genuine-150cc-Motorcycle-Parts-Wheel-Rim-for-Honda-Cbf150-Wheel-Sub-Assy-Rear.jpg"
                        rating= {3}
                    />
                    <Product 
                        id="86589994"
                        title= 'American Racing '
                        text= '  Hot Rod Nova Mag Gray Wheel with Machined (18x9"/5x4.5")'
                        price= {129.99}
                        image= "https://cdn.shopify.com/s/files/1/0255/5917/1117/products/blue1_1_3_large.jpg?v=1593438394"
                        rating= {3}
                    />
                    <ViewMore />
                </div>   

                <Advert  image="https://cdn.shopify.com/s/files/1/2016/3805/files/LorisSaleBanner_1024x1024.gif" />     

                <SalesTitle 
                    title='Bodykits / Fairings' 
                    text='If you pair your bike with the right kind of fairing, your bike will end up looking glamorous'
                />     

                <div className=" md:flex sm:flex-row ">
                    <Product 
                        id="65457375"
                        title= 'VOLKSWAGEN GOLF '
                        text= ' V 5 (2003-2007) GTI EDITION 30 DESIGN'
                        price= {222.28}
                        image= "https://sklep-tuningowy.pl/36865-large_default/body-kit-volkswagen-golf-v-5-2003-2007-gti-edition-30-design.jpg"
                        rating= {3}
                    />
                    <Product 
                        id="57488659"
                        title= 'SUZUKI GSXR 1300 '
                        text= '  Hayabusa New Injection Mold ABS Plastics Bodywork Body Kit Bodyframe Body Work'
                        price= {216.99}
                        image= "https://images-na.ssl-images-amazon.com/images/I/61PKQGrMV8L._AC_SX569_.jpg"
                        rating= {4}
                    />
                    <Product 
                        id="7848643836"
                        title= 'High quality Fiber Glass'
                        text= ' body kit for BMW 6 Series E64 Madly design body kits for BMW E64 body kit 2004-2009 Year'
                        price= {149.99}
                        image= "https://sc04.alicdn.com/kf/HTB15TlbexiH3KVjSZPfq6xBiVXa6.jpg"
                        rating= {1}
                    />
                    <ViewMore />
                </div>       

                <SalesTitle 
                    title='Accessories' 
                    text='Be safe but at the same look good with our quality products at affordable prices'
                />     

                <div className=" md:flex sm:flex-row ">
                    <Product 
                        id="268996695"
                        title= 'New Scorpion '
                        text= '  Covert X Matte Flat Black Motorcycle Helmet'
                        price= {42.28}
                        image= "https://i.ebayimg.com/images/g/l8EAAOSwxZtepHm4/s-l400.jpg"
                        rating= {3}
                    />
                    <Product 
                        id="347658895"
                        title= 'Motorcycle Gloves '
                        text= ' Leather REVIT Hyperion Black Red'
                        price= {6.99}
                        image= "https://motorcycle-soul.com/3171/motorcycle-gloves-leather-revit-hyperion-black-red.jpg"
                        rating= {5}
                    />
                    <Product 
                        id="4458383638"
                        title= 'Underglow Neon Led'
                        text= '  Light Kit with Remote Control, High Intensity 5050 SMD Multi-Color'
                        price= {9.99}
                        image= "https://images-na.ssl-images-amazon.com/images/I/71iuY-CYufL._AC_SY355_PIbundle-4,TopRight,0,0_SH20_.jpg"
                        rating= {3}
                    />
                    <ViewMore />
                </div>  

                <Advert image="https://strapi.synerise.com/uploads/57ba8e53d4c140d39566e2b5f341ea28.gif" /> 

                <Footer />
            </div>
        </div>
    )
}

export default Store
