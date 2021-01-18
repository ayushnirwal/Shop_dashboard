
const hexToRgbaString = (hex,alpha) =>{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const data = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
    
    if(data){
        return "rgba(" +String(data.r) + "," + String(data.g) + "," + String(data.b) + "," + String(alpha) +")";
    }
}

export default hexToRgbaString;

