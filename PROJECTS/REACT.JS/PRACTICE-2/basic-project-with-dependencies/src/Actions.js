export  const InAction=()=>async dispatch=>{
    dispatch({
        type:"INCREMENT"
    })
}
export  const DeAction=()=>async dispatch=>{
    dispatch({
        type:"DECREMENT"
    })
}