import { Button, SelectBox, Switch, TextBox } from 'devextreme-react'
import DataSource from 'devextreme/data/data_source';
import React from 'react'
import '../assets/scss/add-structure.scss';
import { useStore } from '../contexts/storeContext';

export default function AddStructure() {
    const store=useStore();
    const dataSource=new DataSource({
        store:store
    });
    return (
         <div className="container">
           <div className="input-group">
            <span>Name:</span>
            <TextBox 
              name="name" 
            />
          </div>
          <div className="input-group">
            <span>Parent:</span>
            <SelectBox dataSource={dataSource}
              displayExpr="name"
              valueExpr="id"
              name="name" 
            />
          </div>
          <div className="input-group">
            <span>Status:</span>
            <div>
                <Switch
                name="name" 
                />
            </div>
          </div>
          <div className="input-group">
            <Button type="normal" stylingMode="outlined" text="Save" />
            <Button type="normal" stylingMode="outlined" text="Cancel" />
          </div>
        
        </div>
    )
}
