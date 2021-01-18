import { makeObservable, observable, computed, action } from "mobx"

class DashboardStore {
    data
    value
    
    constructor() {
          
        this.data = {
            profit:"213400",
            profitToday:"230",
            order:"1200",
            orderToday:"130",
            topProducts:[
                {
                    imgLink:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    name:"Backpack",
                    unitsSold:"12",
                    price:"599"

                },
                {
                    imgLink:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    name:"Slim Fit T-Shirt",
                    unitsSold:"10",
                    price:"499"

                },
                {
                    imgLink:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    name:"Mens Cotton Jacket",
                    unitsSold:"10",
                    price:"499"

                },
                {
                    imgLink:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    name:"Backpack",
                    unitsSold:"12",
                    price:"599"

                },
            ],
            saleData:[
                {
                    type:"Monthly",    
                    data:[
                        {
                            label:"Jan",
                            data:124,
                        },
                        {
                            label:"Feb",
                            data:100,
                        },
                        {
                            label:"Mar",
                            data:45,
                        },
                        {
                            label:"Apr",
                            data:12,
                        },
                        {
                            label:"May",
                            data:50,
                        },
                        {
                            label:"Jun",
                            data:60,
                        },
                    ],
                },
                {
                    type:"Daily",    
                    data:[
                        {
                            label:"15-7",
                            data:124,
                        },
                        {
                            label:"16-7",
                            data:124,
                        },
                        {
                            label:"18-7",
                            data:124,
                        },
                        {
                            label:"19-7",
                            data:124,
                        },
                        {
                            label:"20-7",
                            data:124,
                        },
                        {
                            label:"21-7",
                            data:124,
                        },
                    ],
                }
                
            ],
            visitData:[
                {
                    label:"15-7",
                    data:124,
                },
                {
                    label:"16-7",
                    data:124,
                },
                {
                    label:"18-7",
                    data:124,
                },
                {
                    label:"19-7",
                    data:124,
                },
                {
                    label:"20-7",
                    data:124,
                },
                {
                    label:"21-7",
                    data:124,
                },
            ],
            
                
        };
        this.value=0;

        makeObservable(this, {
            
            data:observable,
            value:observable,
           
            
            updateValue: action,

           
        })
    }
    
    updateValue(){
        this.value+=1;
        
    }  
}

const DashboardStoreInstance = new DashboardStore();

export {DashboardStoreInstance};