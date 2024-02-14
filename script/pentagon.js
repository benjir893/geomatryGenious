function pentagonArea(){
   const p = getpentagonLength('pValue');
   const b = getpentagonLength('bValue');
   const pentagonarea = 0.5*(p*b);
   const pentArea = setPentagonValue('pAreaDisplay', pentagonarea)
   return pentArea;
}

function getpentagonLength(elementId){
    const pentagonLengthInput = document.getElementById(elementId);
    const pentagonLengthValue = pentagonLengthInput.value;
    const lengthValue = parseFloat(pentagonLengthValue);
    return lengthValue;
}
//pAreaDisplay
function setPentagonValue(setElementId,area){
    const setDisplayArea = document.getElementById(setElementId);
     setDisplayArea.innerText = area;
}