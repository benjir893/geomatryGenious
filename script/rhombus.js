function rhombusArea(){
    const fdistance = setDistances('fDistance');
    const sdistance = setDistances('sDistance');
    const rhombusArea = 0.5*(fdistance*sdistance).toFixed(2);
    const displayArea = setrhombusDisplay('rhombusAreaDisplay', rhombusArea);
    return displayArea;
}

function setDistances(elementId){
    const distanceInput = document.getElementById(elementId);
    const distanceValue = distanceInput.value;
    const distance = parseFloat(distanceValue);
    return distance;
}

function setrhombusDisplay(setElementId, area){
    const aredisplay = document.getElementById(setElementId);
    aredisplay.innerText= area;
}