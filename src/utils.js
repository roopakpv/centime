const flattenArray=[];
export const iterate = (obj) => {
   
    Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'object') {
        flattenArray.push({[key]: obj[key]});
    }
    else
    {
        
        iterate(obj[key])

    }}
    )
    return flattenArray;
}
