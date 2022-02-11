export function loadState () {
    try{
        const serialState = localStorage.getItem('appState')
        if(serialState === null) return undefined
        else
        return JSON.parse(serialState)
    }
    catch(err)
    {
        return undefined
    }
}

export function saveState (state) {
 try {
   //debugger;
   const serialState = JSON.stringify(state)
   localStorage.setItem('appState', serialState)
 }
 catch (err) {
     console.log(err)
 }
}
