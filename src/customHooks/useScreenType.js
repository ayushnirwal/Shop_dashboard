import { useState, useEffect } from 'react';
function useScreenType() {

    const [screenType, setScreenType] = useState(undefined);
  
    useEffect(() => {
        function handleResize() {
            let tmp = undefined;
            if(window.innerWidth > 1535){
                tmp = "2xl";
            }
            else if(window.innerWidth <= 1535 && window.innerWidth > 1279){
                tmp = "xl";
            }
            else if(window.innerWidth <= 1279 && window.innerWidth > 1023){
                tmp = "lg";
            }
            else if(window.innerWidth <= 1023 && window.innerWidth > 767){
                tmp = "md";
            }
            else if(window.innerWidth <= 767 ){
                tmp = "sm";
            }
            
            if (screenType == undefined || tmp !==screenType){
                setScreenType(tmp);
            }
        }
      
      
      window.addEventListener("resize", handleResize);
      
      
      handleResize();
      
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
  
    return screenType;
  }

  export default useScreenType;