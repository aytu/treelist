import { Button } from 'devextreme-react';
import { TreeList, Column, Editing } from 'devextreme-react/tree-list';
import React, { useState } from 'react'
import AddStructure from '../components/add-structure';
import { structures } from '../data'

export default function Structure() {
    const [isShow,setIsShow]=useState(false);
    const handleShowClick=()=>{
        setIsShow(prevState=>!prevState);
    }
    return (
        <> 
            <Button type="normal" stylingMode="outlined" text="Show" onClick={handleShowClick}/>
            {isShow ? <AddStructure/> : '' }
            <div>
                <TreeList
                        id="structures"
                        dataSource={structures}
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
