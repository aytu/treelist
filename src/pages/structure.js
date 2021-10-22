import { TreeList, Column, Editing } from 'devextreme-react/tree-list';
import React from 'react'
import { structures } from '../data'

export default function Structure() {
    return (
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
                        allowAdding={true}    
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
    )
}
