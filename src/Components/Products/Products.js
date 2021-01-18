import {observer} from "mobx-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import {ThemeStoreInstance} from "../../store/ThemeStore";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Products = observer(() => {

    const [selectedWindow1, setSelectedWindow1] = useState(false); 
    const [selectedWindow2, setSelectedWindow2] = useState(false);

    const [ hide1, setHide1 ] = useState(true); 
    const [ hide2, setHide2 ] = useState(true);

    const showWindowClasses1 = " window-animate-in-class-25 bg-blue-200 " ;
    const hideWindowClasses1 = " window-animate-out-class-25 bg-blue-200 pointer-events-none" ;
    
    const showWindowClasses2 = " window-animate-in-class-75 bg-blue-200 " ;
    const hideWindowClasses2 = " window-animate-out-class-75 bg-blue-200 pointer-events-none" ;

    const hiddenClasses = " hidden pointer-events-none" ;

    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const Styles= {
        backgroundColor:theme.color2,
    };


    return ( 
        <div className="w-full h-full flex justify-center items-center rounded-xl page-animate-in-class relative" style={Styles}>
            <div className="h-94 w-94 m-auto grid grid-cols-2 grid-rows-1 gap-3 relative " >

                <div className = "flex justify-center items-center w-full h-full col-span-1 row-span-1 rounded-xl" style={{ backgroundColor:theme.color3, borderRadius:"30px 5px 30px 5px" }}>
                    <div className = "bg-red-300 py-3 px-5 rounded-xl font-medium cursor-pointer hover:bg-red-400 duration-150 w-52 text-center xl:text-md sm:text-md " style={{color : theme.textColor}} onClick={()=>{setSelectedWindow1(true); setHide1(false) }} >
                            Add New Product
                    </div>

                </div>

                <div className = "flex justify-center items-center w-full h-full col-span-1 row-span-1 rounded-xl" style={{ backgroundColor:theme.color3, borderRadius:"30px 5px 30px 5px" }}  >
                    <div className = "bg-red-300 py-3 px-5 rounded-xl font-medium cursor-pointer hover:bg-red-400 duration-150 w-52 text-center xl:text-md sm:text-md " style={{color : theme.textColor}} onClick={()=>{setSelectedWindow2(true); setHide2(false) }} >
                            Edit Product
                    </div>
                </div>
    

            </div>

            <div className = {` w-full h-full bg-red-400 absolute rounded-xl ${ (selectedWindow1)? showWindowClasses1 : hideWindowClasses1 } ${(hide1)? hiddenClasses:""} `} >

                <div className=" text-xl m-3 z-10 absolute text-red-800" onClick={()=>{setSelectedWindow1(false)}} >
                    <FaTimes/>
                </div>
                
                <AddProduct/>
                
                

            </div>

            <div className = {` w-full h-full bg-red-400 absolute rounded-xl ${ (selectedWindow2)? showWindowClasses2 : hideWindowClasses2 } ${(hide2)? hiddenClasses:""} `} >

                <div className="text-xl m-3 " onClick={()=>{setSelectedWindow2(false)}} >
                    <FaTimes/>
                </div>
                <div className="w-full h-full">
                    <EditProduct/>
                </div>

            </div>


        </div>
    );
})
 
export default Products;