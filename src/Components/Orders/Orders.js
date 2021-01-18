import {observer} from "mobx-react";
import {ThemeStoreInstance} from "../../store/ThemeStore";

const Orders = observer(() => {

    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const Styles= {
        backgroundColor:theme.color2,
    };


    return ( 
        <div className="w-full h-full flex justify-center items-center rounded-xl page-animate-in-class" style={Styles}>
            <div className="h-94 w-94 m-auto grid grid-cols-12 grid-rows-6 gap-3 relative " >

                <div className = "w-full h-full bg-red-400 col-span-4 row-span-2">

                </div>

                <div className = "w-full h-full bg-red-400 col-span-4 row-span-2">

                </div>
                <div className = "w-full h-full bg-red-400 col-span-4 row-span-6">

                </div>
                <div className = "w-full h-full bg-red-400 col-span-8 row-span-4">

                </div>

            </div>
        </div>
    )
})
 
export default Orders;