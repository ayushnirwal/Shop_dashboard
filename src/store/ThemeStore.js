import { makeObservable, observable, computed, action } from "mobx"

class ThemeDataStore {
    value
    selected
    theme
    
    constructor() {
          
        this.value = 0;
        this.selected = 0;
        this.theme=[
            {
                color1:"#F3F6FF",
                color2:"#FFFFFF",
                textColor:"#42427D",
                secondaryTextColor:"#A0AAC8",
                color3:"#C7F2FF",
                color4:"#42427D",

            },
            {
                color1:"#F3F6FF",
                color2:"#2c588d",
                color3:"#e3f6f5",
                color4:"#272643",
                color5:"#ffffff",
            },
        ];

        makeObservable(this, {
            
            value:observable,
            selected:observable,
            theme:observable,
            
            updateValue: action,

           
        })
    }
    
    updateValue(){
        this.value+=1;
        
    }  
}

const ThemeStoreInstance = new ThemeDataStore();

export {ThemeStoreInstance};