import { Button, SelectBox, Switch, TextBox } from 'devextreme-react'
import DataSource from 'devextreme/data/data_source';
import React, { useState } from 'react'
import '../assets/scss/add-structure.scss';
import { ADD_STRUCTURE, useStore, useUpdateStore } from '../contexts/storeContext';
import ValidationGroup from 'devextreme-react/validation-group';
import { CustomRule, PatternRule, StringLengthRule } from 'devextreme-react/tree-list';
import ValidationSummary from 'devextreme-react/validation-summary';
import {  Validator, RequiredRule } from 'devextreme-react/validator';
import  Query  from 'devextreme/data/query';

export default function AddStructure() {
    const {store}=useStore();
    const updateStore=useUpdateStore();
    const [structure,setStructure]=useState({parent_id:-1})
    const dataSource=new DataSource({
        store:store
    });
    const namePattern = /^[^0-9]+$/;
    const nameUnique=({value})=>{             
        const filteredData =  Query(store._array)
            .filter(["name", "=", value])           
            .toArray();                
           return filteredData.length===0;         
     }
    const inputValueChanged=(data)=>{       
        setStructure({...structure, name:data.value});
    }
    const selectValueChanged=(data)=>{       
        setStructure({...structure, parent_id :data.value})
    }
    const switchValueChanged=(data)=>{       
        setStructure({...structure, status :data.value})
    }
    const addStructure=(e)=>{     
        let result = e.validationGroup.validate();
        if(result.isValid){
            updateStore({type: ADD_STRUCTURE,payload:structure});  
        }     
    }
 
    return (
        <ValidationGroup>       
         <div className="container">
           <div className="input-group ">
            <span>Name:</span>      
                 <TextBox  value={structure.name} valueChangeEvent="keyup" onValueChanged={inputValueChanged} >
                    <Validator>
                            <RequiredRule message="Name is required" />
                            <PatternRule message="Do not use digits in the Name" pattern={namePattern} />
                            <StringLengthRule message="Name must have at least 3 symbols" min={3} />
                            <StringLengthRule message="Name must have maximum 30 symbols" max={30} />
                            <CustomRule message="Name is already exists" validationCallback={nameUnique} />
                    </Validator>
                </TextBox>    
          </div>          
          <div className="input-group">
            <span>Parent:</span>
            <SelectBox dataSource={dataSource}
              onValueChanged={selectValueChanged}
              displayExpr="name"
              valueExpr="id"
              name="name" 
            />
          </div>
          <div className="input-group">
            <span>Status:</span>
            <div>
                <Switch
                 onValueChanged={switchValueChanged}
                 name="name" 
                />
            </div>
          </div>
          <div className="btn-group">         
            <Button width={60}
                  icon="icomoon icon-floppy-disk"
                  type="success"
                  stylingMode="outlined"
                  onClick={addStructure}></Button>
            <Button width={60}
                  icon="icomoon icon-cross"
                  type="success"
                  stylingMode="outlined">                      
             </Button>
          </div>
          <ValidationSummary id="summary"></ValidationSummary>
        </div>             
     </ValidationGroup>
    )
}
