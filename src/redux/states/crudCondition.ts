import { crudCondution } from "../../interface/InterfaceCondition"

export const initialState : crudCondution ={
 condition:{
    pagination:[],
    results: [{
        '_id':"",
        cityid: "",
        name:"",
        state:"",
        probabilityofprecip:0,
        relativehumidity:0,
        lastreporttime:0,
        'date-insert':'',
        validdateut:'',
        winddirectioncardinal:'',
        longitude:'',
        skydescriptionlong:''
    },
       
    ]

 },

 oneCondition:{
    pagination:[],
    results: [{
        '_id':"",
        cityid: "",
        name:"",
        state:"",
        probabilityofprecip:0,
        relativehumidity:0,
        lastreporttime:0,
        'date-insert':'',
        validdateut:'',
        winddirectioncardinal:'',
        longitude:'',
        skydescriptionlong:''
    },
       
    ]

 },

}