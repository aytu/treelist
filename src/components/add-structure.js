import { Button, SelectBox, Switch, TextBox } from 'devextreme-react'
import React from 'react'
import '../assets/scss/add-structure.scss';

export default function AddStructure() {
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
            <SelectBox 
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
