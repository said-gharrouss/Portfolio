
const inistialState = "day";

export const reducer = (state = inistialState,action) => {
    switch(action.type){
        case "day" :
            return state = "night";
        case "night" : 
            return state = "day";
        default : 
            return state ;
    }
}