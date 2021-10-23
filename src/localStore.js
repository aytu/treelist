
import LocalStore from 'devextreme/data/local_store';
import  Query  from 'devextreme/data/query';

export const structures = [{
    'id': 1,
    'parent_id': -1,
    'name': 'Field1',
    'status': true
}, {
    'id': 2,
    'parent_id': -1,
    'name': 'Field2',
    'status': true
}, {
    'id': 3,
    'parent_id': 2,
    'name': 'Field3',
    'status': true
}];
let removedChildrenIds=[];
function findChildren(key){
    const children= Query(store._array)
    .filter(x=>x.parent_id===key)      
    .toArray();  
    children.forEach(c=>{
           removedChildrenIds.push(c);         
    })

}

const store = new LocalStore({
    key: 'id',   
    name: 'structures',
    immediate: true,
    onUpdating:function(key,values){      
        if(values["parent_id"]===key){           
            values["parent_id"]=-1;
        }
    },
    onRemoved:function(key){
        findChildren(key);
        removedChildrenIds.forEach(x=>store.remove(x.id));
        removedChildrenIds=[];        
    },    
    onInserting:function(values,key){
        Query(store._array)
        .select("id")
        .max("id")
        .then(result=>{
            if(store._array.length===0){
                values.id=1;
            }else{
                values.id=result+1;
            }
        })
    }
});

export default store;