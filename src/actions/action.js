export const addItem = (item) => ({
    type: 'ACTION_ADDWORK',
    payload:{
        employeeid:item.eid,
        productid:item.pid,
        quantity:item.quantity
    }
})