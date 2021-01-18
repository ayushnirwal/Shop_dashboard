import {observer} from "mobx-react";
import {ThemeStoreInstance} from "../../store/ThemeStore";
import {DashboardStoreInstance} from "../../store/DashboardStore";
import { FaArrowCircleDown } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import hexToRgbaString from "./hexToRgba";



const DashboardGraph = observer(() => {
    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const [selectedGraph,setSelectedGraph] = useState(""); 
    const [selectedData,setSelectedData] = useState({});
    const [showDropDown,setShowDropDown] = useState(false);

    const data = DashboardStoreInstance.data;

    const dropDownHideClasses =" hidden pointer-events-none ";
    const dropDownShowClasses ="";
    
    const options = data.saleData.map((inst)=>inst.type);
    const dropDownOptions = options.map((inst,ind)=>{
        return(
            <div key={ind} className="cursor-pointer" onClick={()=>{setSelectedGraph(inst); setShowDropDown(false)}}>
                {inst}
            </div>
        );
    })

    useEffect(()=>{
        setSelectedGraph(options[0]);
    },[])

    useEffect(()=>{
        if(selectedGraph ===""){
            setSelectedGraph(options[0]);
            return;    
        }
        
        const dataFromStore = data.saleData.find((inst)=>inst.type===selectedGraph).data;
        const labelArray = dataFromStore.map((inst)=>inst.label);
        const dataArray = dataFromStore.map((inst)=>inst.data);
        const chartData = {
            labels: labelArray,
            datasets: [
              {
                label:"Units Sold",
                data: dataArray,
                fill: true,
                backgroundColor: hexToRgbaString( theme.textColor ,0.3),
                borderColor: hexToRgbaString( theme.textColor , 1)
              }
            ]
        };

        setSelectedData(chartData);
    },[selectedGraph])
    
    return ( 
        <div className="w-full h-full">
            <div className="relative">
                <div className="z-0 mt-3 mr-5 flex items-center justify-center float-right cursor-pointer border-2 border-gray-600 rounded-md px-3 py-1" onClick={()=>{setShowDropDown(!showDropDown)}}>
                    <p className="mx-3">
                        {selectedGraph}
                    </p>
                    
                    <FaArrowCircleDown/>
                </div>
                <div className= {`absolute z-10 right-12 top-10 bg-gray-100 p-4 rounded-xl border-2 border-gray-600 ${(showDropDown) ? dropDownShowClasses : dropDownHideClasses }` }>
                    {dropDownOptions}
                </div>
            </div>
            
            <div className="w-11/12 mx-10 flex justify-center items-center">
                <Line data={selectedData}/>
            </div>
        </div>
        
    );
})
 
export default DashboardGraph;