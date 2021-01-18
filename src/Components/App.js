import React, { useState ,useEffect} from "react";
import Dashboard from "./Dashboard/Dashboard";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";


import { FaCartArrowDown ,FaRegChartBar ,FaTruckMoving , FaRegComments} from 'react-icons/fa';

import {observer} from "mobx-react";
import {ThemeStoreInstance} from "../store/ThemeStore";

import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";



const App = observer(()=> {
    const options = ["Dashboard","Products","Orders","Reviews"];
    const links = ["/","/Products","/Orders","/Reviews"];
    const icons = [FaRegChartBar,FaCartArrowDown,FaTruckMoving,FaRegComments];

    const location = useLocation();
    useEffect(()=>{
        
        switch (location.pathname) {
            case "/":
                if (selected!==0) setPreviousSelected(selected);
                setSelected(0);
                break;
            case "/Products":
                if (selected!==1) setPreviousSelected(selected);
                setSelected(1);
                break;
            case "/Orders":
                if (selected!==2) setPreviousSelected(selected);
                setSelected(2);
                break;
            case "/Reviews":
                if (selected!==3) setPreviousSelected(selected);
                setSelected(3);
                break;
        
            default:

                break;
        }
    },[location])
    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const [selected , setSelected] = useState(0);
    const [previousSelected , setPreviousSelected] = useState();

    const selectedClasses = "bg-gray-400 option-animate-in-class";
    const previousSelectedClasses = "bg-gray-400 option-animate-out-class";

    const optionClasses="z-10 h-14 2xl:w-72 xl:w-44 sm:w-44 m-auto flex items-center sm:justify-center xl:justify-start px-2 py-1 relative";
    const backgroundClasses = "z-0 h-14 2xl:w-72 xl:w-44 sm:w-44 absolute rounded-xl"



    const Navigation = options.map((inst,ind)=>{
        const Icon = icons.find((inst, iconInd)=>iconInd === ind);
        let Styles = {};
        let textStyles = {
            color:theme.secondaryTextColor,
            transitionDuration:"500ms",
        };

        if(selected === ind){
            Styles = {
                backgroundColor:theme.color2,
            }
            textStyles = {
                ...textStyles,
                color:theme.textColor
            }
        }
        if(previousSelected === ind){
            Styles = {
                ...Styles,
                backgroundColor:theme.color2
            }
            textStyles = {
                ...textStyles,
                color:theme.secondaryTextColor
            }
        }
        return(
            <Link key ={ind} to={links[ind]}>
                    <div style = { Styles } className = {`${backgroundClasses} ${ selected === ind ? selectedClasses:"" } ${ previousSelected === ind ? previousSelectedClasses:"" }`} >
                        
                    </div>
                    <div className={`${optionClasses}`}>
                        <div className="w-8" >
                            <Icon style={textStyles} className="sm:text-xl xl:text-2xl"/>
                        </div>
                        <p className="sm:text-lg sm:m-0 xl:text-lg xl:m-1.2" style={textStyles} >{inst}</p>
                    </div>
                    
                        
            </Link>
        )
    })

    return (
        
        
        
            <div className="w-screen h-screen" style={{ backgroundColor: theme.color1 }} >
                <div className="xl:grid xl:grid-rows-1 xl:grid-cols-9 " style={{ width:"94%", marginLeft:"3%", height:"94%",paddingTop:"2%" }}>

                    <div className=" xl:col-span-1 xl:row-span-1 xl:flex-col sm:flex-row flex w-full justify-center ">

                        {Navigation}
                            
                    </div>

                    <div className="xl:col-span-8 xl: sm:row-span-11 h-full rounded-xl" >
                        <Switch>
                            <Route path="/Orders">
                                <Orders onLoad={()=>{console.log("Orders loaded");}} />
                            </Route>
                            <Route path="/Products">
                                <Products/>
                            </Route>
                            <Route path="/Reviews">
                                <Reviews/>
                            </Route>
                            <Route path="/">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </div>
                    
                </div>
            </div>
        
        
  );
})
 
export default App;