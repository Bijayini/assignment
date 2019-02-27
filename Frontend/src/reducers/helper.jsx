const replaceAt = (array, index, value)=> {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
};

const editArrayOfObject = (array, newValue,keyInArray,uniqueValue)=>{
    const changedItem = array.find(item=> item[keyInArray] === uniqueValue);
    const index = array.indexOf(changedItem);
    const newItem = {...array[index], ...newValue};
    return replaceAt(array,index, newItem);
};



export {replaceAt, editArrayOfObject};