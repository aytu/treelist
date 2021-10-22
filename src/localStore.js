
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

const store = new LocalStore({
    key: 'id',   
    name: 'structures',
    immediate: true,
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