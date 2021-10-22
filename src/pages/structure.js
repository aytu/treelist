import { Button } from 'devextreme-react';
import { TreeList, Column, Editing } from 'devextreme-react/tree-list';
import DataSource from 'devextreme/data/data_source';
import React, { useState } from 'react'
import AddStructure from '../components/add-structure';
import { useStore } from '../contexts/storeContext';


export default function Structure() {
    const [isShow,setIsShow]=useState(false);
    const { store }=useStore();
    const handleShowClick=()=>{
        setIsShow(prevState=>!prevState);
    }
    const dataSource=new DataSource({
        store:store
    });
    return (
        <> 
            <Button type="normal" stylingMode="outlined" text="Show" onClick={handleShowClick}/>
            {isShow ? <AddStructure/> : '' }
            <div>
                <TreeList
                        id="structures"
                        dataSource={dataSource}
                        rootValue={-1}                  
                        showRowLines={true}
                        showBorders={true}
                        columnAutoWidth={true}
                        keyExpr="id"
                        parentIdExpr="parent_id"
                    >
                    <Editing
                            mode="row"                           
                            allowUpdating={true}
                            allowDeleting={true} />
                    <Column dataField="name"
                            dataType="string"
                            width="60%"
                            caption="Name" />
                            
                    <Column dataField="status"
                            dataType="boolean"
                            width="20%"
                            caption="Status"/>
                </TreeList>
            </div>
        </>
    )
}
