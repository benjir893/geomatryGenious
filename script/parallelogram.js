function parallelogramArea(){
 
    const base= parallelogramBase('parallBase');
    const height =parallelogramBase('parallHeight');
    const parallArea = (base*height).toFixed(2);
    const paraArea =setvalue(parallArea,'paralArea');
    return paraArea;

}

function parallelogramBase(elementId){
    const parallelogramBaseInput = document.getElementById(elementId);
    const parallelogramBaseValue = parallelogramBaseInput.value;
    const parallBase =parseFloat(parallelogramBaseValue);
    return parallBase;
}

function setvalue(area,setElementId){
    const parallelogramAreaInput = document.getElementById(setElementId);
    parallelogramAreaInput.innerText = area; 
}