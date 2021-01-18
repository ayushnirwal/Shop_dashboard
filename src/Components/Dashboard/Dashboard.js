import {observer} from "mobx-react";
import {ThemeStoreInstance} from "../../store/ThemeStore";
import {DashboardStoreInstance} from "../../store/DashboardStore" 
import { Link } from "react-router-dom";
import DashboardGraph from "./DashboardGraph";
import VisitGraph from "./VisitGraph";

const Dashboard = observer(() => {

    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const data = DashboardStoreInstance.data;
    const mainBoxStyles= {
        backgroundColor:theme.color2,
    };
    const dataBoxStyles= {
        backgroundColor:theme.color3,
        borderRadius:"30px 5px 30px 5px"
    };
    const innerDataStyles= {
        backgroundColor:theme.color4,
        borderRadius:"20px 5px 20px 5px",
        color:theme.color1
    };

    const topProductList = data.topProducts.map((inst,ind)=>{
        return(
            <div key={ind} className= " xl:w-80 sm:w-11/12 sm:mx-auto py-3 my-3 flex justify-center items-center rounded-xl" style={{border:`2px solid ${theme.textColor}`}} >
                <p style={{color:theme.xtColor}} >
                    {`${ind+1}.`}
                </p>

                <div className="xl:w-16 xl:h-16 sm:w-24 sm:h-24 mx-3 overflow-hidden rounded-lg border-gray-400 border-2">
                    <img src={inst.imgLink}/>
                </div>

                <div className="xl:w-36 xl:h-12 sm:w-5/12 flex flex-col justify-center items-center">

                    <p style={{color:theme.textColor}} className="font-medium xl:text-sm sm:text-3xl">
                        {inst.name}
                    </p>
                    <p style={{color:theme.textColor}} className="font-light xl:text-sm sm:text-2xl">
                        {` Price - ${inst.price}`}
                    </p>
                    <p style={{color:theme.textColor}} className="font-light xl:text-sm sm:text-2xl">
                        {` Units sold - ${inst.unitsSold}`}
                    </p>

                </div>
            </div>
        );
    })


    return ( 
        <div className="w-full h-full flex justify-center items-center rounded-xl page-animate-in-class" style={mainBoxStyles}>
            <div className="h-94 w-94 m-auto relative grid gap-3 xl:grid-cols-12 xl:grid-rows-6 sm:grid-cols-2 " >

                <div className = "sm:py-5 xl:my-0 xl:py-0 w-full xl:h-full xl:col-span-4 xl:row-span-2 sm:col-span-1 flex justify-center items-center gap-3" style={dataBoxStyles} >
                    
                    <div>
                        <p className="text-2xl font-bold" style={{color:theme.textColor}} >{data.profit}</p>
                        <p style={{color:theme.textColor}} >Profit</p>
                    </div>
                    <div className = " px-5 py-3 font-bold" style={innerDataStyles}>
                        <p>{`+${data.profitToday}`}</p>
                    </div>

                </div>

                <div className = "sm:py-5 xl:py-0 w-full xl:h-full xl:col-span-4 xl:row-span-2 sm:col-span-1 flex justify-center items-center gap-3" style={dataBoxStyles} >
                    
                    <div>
                        <p className="text-2xl font-bold" style={{color:theme.textColor}} >{data.order}</p>
                        <p style={{color:theme.textColor}} >Orders</p>
                    </div>
                    <div className = " px-5 py-3 font-bold" style={innerDataStyles}>
                        <p>{`+${data.orderToday}`}</p>
                    </div>

                </div>

                <div className = "sm:py-5 xl:py-0 w-full xl:h-full xl:col-span-4 xl:row-span-4 sm:col-span-2 sm:h-96 flex flex-col items-center overflow-scroll" style={dataBoxStyles}>
                    <h1 className = "mt-2 text-xl font-bold" style={{ color:theme.textColor }}> Top Products </h1>
                    <div className="w-full">
                        <Link to ="\" className="float-right mr-3">
                            <p className="xl:text-lg sm:text-3xl">See all</p>
                        </Link>
                    </div>
                    <div className="w-full">
                        {topProductList}
                    </div>
                </div>
                <div className = "sm:py-5 xl:py-0 w-full xl:h-full xl:col-span-8 xl:row-span-4 sm:col-span-2 " style={dataBoxStyles}>
                    <DashboardGraph/>
                </div>
                <div className = "sm:py-5 xl:py-0 w-full xl:h-full xl:col-span-4 xl:row-span-2 sm:col-span-2 " style={dataBoxStyles}>
                    <VisitGraph/>
                </div>

            </div>
        </div>
        
        
    );
})
 
export default Dashboard;