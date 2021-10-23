import { Button } from 'devextreme-react';
import { StateStoring } from 'devextreme-react/data-grid';
import { TreeList, Column, Editing } from 'devextreme-react/tree-list';
import DataSource from 'devextreme/data/data_source';
import React, { useRef } from 'react'
import AddStructure from '../components/add-structure';
import { IS_SHOW, useStore, useUpdateStore } from '../contexts/storeContext';
import { CustomRule, PatternRule, StringLengthRule,ValidationRule,Lookup,Button as TreeButton,
    HeaderFilter, Paging, Pager, Scrolling,SearchPanel } from 'devextreme-react/tree-list';
import  Query  from 'devextreme/data/query';
import {   RequiredRule } from 'devextreme-react/validator';
import '../assets/icomoon/style.scss';

export default function Structure() {    
    const { store, isShow }=useStore();
    const updateStore=useUpdateStore();
    const nodes=useRef([]);
    const lookupData = {
        store: store,
        sort: 'name'
      };  
    const allowedPageSizes = [5, 10, 20];
    const namePattern = /^[^0-9]+$/;
    const nameUnique=(p)=>{          
        console.log(p)   
        const filteredData =  Query(store._array)
            .filter(s=>s.id!==p.data.id)
            .filter(["name", "=", p.value])                
            .toArray();   
          return filteredData.length===0;         
     }
     function findChildren(node) {          
        if (node.children) {  
            node.children.forEach(function(item) {  
              nodes.current.push(item);       
              findChildren(item);  
            })       
        }  
    } 
     const onEditorPreparing = (e) => {
        if(e.lookup){        
            findChildren(e.row.node);           
             const data=lookupData.store._array.filter(function(d) {
                 return nodes.current.filter(c=>c.key===d.id).length===0
             });     
             e.editorOptions.dataSource=data;       
            nodes.current=[];
        }        
        //  if (e.dataField === "parent_id" && e.row.data["parent_id"] === -1) {
        //    e.editorOptions.disabled = true;
        //    e.editorOptions.value = null;
        //  }
       }

    const handleShowClick=()=>{
        updateStore({type:IS_SHOW})
    }
    const dataSource=new DataSource({
        store:store
    });
    return (
        <> 
            <Button type="normal"
                  stylingMode="outlined"
                  icon="icomoon icon-plus"
                  onClick={handleShowClick}/>

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
                        onEditorPreparing={onEditorPreparing}
                    >
                    <StateStoring enabled={true} type="localStorage" storageKey="structureStorage" />
                    <SearchPanel visible={true} />
                    <HeaderFilter visible={true} />
                    <Scrolling
                        mode="all" />
                        <Paging
                        enabled={true}
                        //defaultPageSize={5} 
                        />
                        <Pager
                        showPageSizeSelector={true}
                        showInfo={true}
                        infoText="Page #{0}. Total: {1} ({2} items)"/>
                    {/* <Scrolling
                        mode="standart" />
                    <Paging
                        enabled={true}
                        defaultPageSize={5} />
                    <Pager
                        showInfo={true}
                        infoText="Page #{0}. Total: {1} ({2} items)"/> */}
                    <Editing
                            mode="form"                           
                            allowUpdating={true}
                            allowDeleting={true} />
                    <Column dataField="name"
                            dataType="string"
                            width="60%"
                            caption="Name">    
                            <RequiredRule message="Name is required" />
                            <PatternRule message="Do not use digits in the Name" pattern={namePattern} />
                            <StringLengthRule message="Name must have at least 3 symbols" min={3} />
                            <StringLengthRule message="Name must have maximum 30 symbols" max={30} />
                            <CustomRule message="Name is already exists" validationCallback={nameUnique} />
                    </Column>
                    <Column visible={false} dataField="parent_id" caption="Parent_ID"  width="20%">
                        <Lookup dataSource={lookupData} valueExpr="id" displayExpr="name" />
                    {/* <ValidationRule type="required" /> */}
                    </Column>       
                    <Column dataField="status"
                            dataType="boolean"
                            width="20%"
                            caption="Status"/>
                    <Column type="buttons">
                           <TreeButton icon="iconmoon icon-pencil"  name="edit"/>                       
                           <TreeButton icon="iconmoon icon-bin" name="delete"/>     
                    </Column>
                </TreeList>
            </div>
        </>
    )
}
