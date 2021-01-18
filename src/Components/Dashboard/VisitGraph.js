import {observer} from "mobx-react";
import {ThemeStoreInstance} from "../../store/ThemeStore";
import {DashboardStoreInstance} from "../../store/DashboardStore";
import { Line } from "react-chartjs-2";
import hexToRgbaString from "./hexToRgba";



const VisitGraph = observer(() => {
    const theme = ThemeStoreInstance.theme[ThemeStoreInstance.selected];
    const data = DashboardStoreInstance.data.visitData;
    
    const labels = data.map((inst)=>inst.label);
    const dataArray = data.map((inst)=>inst.data);

    const chartData = {
        labels,
        datasets: [
            {
            label:"Visits on Website",
            data: dataArray,
            fill: true,
            backgroundColor: hexToRgbaString( theme.textColor ,0.3),
            borderColor: hexToRgbaString( theme.textColor , 1)
            }
        ]
    }
    
    return ( 
        <div className="w-full flex justify-center items-center">
            
            <Line data={chartData}/>
            
        
        </div>
            
        
        
    );
})
 
export default VisitGraph;