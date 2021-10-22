import React, { useContext, useReducer } from "react";
import  store  from "../localStore";

export const ADD_STRUCTURE="ADD_STRUCTURE";
export const IS_SHOW="IS_SHOW";

const initialState={
    store:store,
    is_show:false
}
function reducer(state,action){
    switch (action.type) {
        case ADD_STRUCTURE:
            state.store.insert(action.payload);
          return {store:store };
           
        default:
          return state;
    }

}
export function useStore(){
    return useContext(storeContext);
}
export function useUpdateStore(){
    return useContext(updateStoreContext);
}

const storeContext=React.createContext();
const updateStoreContext=React.createContext();

export default function StoreProvider({children}) {
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <storeContext.Provider value={state}>
            <updateStoreContext.Provider value={dispatch}>
                {children}
            </updateStoreContext.Provider>          
        </storeContext.Provider>
    )
}
