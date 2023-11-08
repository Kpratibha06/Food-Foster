import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: []
    },
    //here it is reducers because when you are creating a slice there are multiple small reducers function
    reducers: {
        addItem : (state, action) =>{
            // Redux ToolKit uses immer BTS
            //mutating the state over here
            state.items.push(action.payload);
        },
        removeItem : (state, action) =>{
            state.items.pop();
        },
        // originalState = ["Pizza"]
        clearCart: (state) =>{
            // RTK says either mutate the existing state or return a new state
            state.items.length = 0; //state = []
            // return {items : []}; // this new object will be replaced insideOriginalsate ={items : []}
        }
    }
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;
//when we are exporting it we are exporting a small reducer from that
export default cartSlice.reducer;