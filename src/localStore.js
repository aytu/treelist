import LocalStore from 'devextreme/data/local_store';

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
    immediate: true  
});

export default store;