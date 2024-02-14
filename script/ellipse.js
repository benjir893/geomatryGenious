function ellipseArea(){
    const a = lengthMeasurment('lengthA');
    const b = lengthMeasurment('lengthB');
    const ellipseArea = 3.14*(a*b);
    const displayValue = setEllipesValue('display',ellipseArea)
    return displayValue;
    
}

function lengthMeasurment(elementId){
    const flengthInput = document.getElementById(elementId);
    const flengthValue = flengthInput.value;
    const lengthValue =parseFloat(flengthValue);
    return lengthValue;
}

function setEllipesValue(setElementId, eArea){
    const aredisplay =document.getElementById(setElementId);
    aredisplay.innerText= eArea;
}