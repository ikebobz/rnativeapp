//import { setStatusBarStyle } from "expo-status-bar"


const workmgt = (state = [],action) => {
  // debugger;
  switch(action.type)
  {
    case 'ACTION_ADDWORK':
        return [...state,{
            employeeid: action.payload.employeeid,
            productid: action.payload.productid,
            quantity: action.payload.quantity
        }]
    default:
        return state
  }
}
export default workmgt;
