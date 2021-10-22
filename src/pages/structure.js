import { Button } from 'devextreme-react';
import { StateStoring } from 'devextreme-react/data-grid';
import { TreeList, Column, Editing } from 'devextreme-react/tree-list';
import DataSource from 'devextreme/data/data_source';
import React from 'react'
import AddStructure from '../components/add-structure';
import { IS_SHOW, useStore, useUpdateStore } from '../contexts/storeContext';


export default function Structure() {    
    const { store, isShow }=useStore();
    const updateStore=useUpdateStore();
    const handleShowClick=()=>{
        updateStore({type:IS_SHOW})
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
                    <StateStoring enabled={true} type="localStorage" storageKey="structureStorage" />
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
