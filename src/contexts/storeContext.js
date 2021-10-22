import React, { useContext } from "react";
import LocalStore from 'devextreme/data/local_store';
import { structures } from "../data";

const store = new LocalStore({
    key: 'id',   
    name: 'structures',
    immediate: true,
    data: structures
});

export function useStore(){
    return useContext(storeContext);
}

const storeContext=React.createContext();


export default function StoreProvider({children}) {
    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
}
