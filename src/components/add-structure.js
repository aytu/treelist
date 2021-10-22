import { Button, SelectBox, Switch, TextBox } from 'devextreme-react'
import DataSource from 'devextreme/data/data_source';
import React, { useState } from 'react'
import '../assets/scss/add-structure.scss';
import { ADD_STRUCTURE, useStore, useUpdateStore } from '../contexts/storeContext';


export default function AddStructure() {
    const {store}=useStore();
    const updateStore=useUpdateStore();
    const [structure,setStructure]=useState({parent_id:-1})
    const dataSource=new DataSource({
        store:store
    });
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
       updateStore({type: ADD_STRUCTURE,payload:structure});  

    }
 
    return (
         <div className="container">
           <div className="input-group">
            <span>Name:</span>
            <TextBox onValueChanged={inputValueChanged}
              name="name" 
            />
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
          <div className="input-group">
            <Button type="normal" stylingMode="outlined" text="Save" onClick={addStructure}/>
            <Button type="normal" stylingMode="outlined" text="Cancel" />
          </div>
        
        </div>
    )
}
