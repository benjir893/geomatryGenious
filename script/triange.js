function tiangleAreaCalculation(){
    const triangleBaseInput = document.getElementById('baseInput');
    const triangleBaseValue = triangleBaseInput.value;
    const baseValue = parseFloat(triangleBaseValue);
    
    const triangleHeightInput = document.getElementById('heightInput');
    const triangleHeightValue = triangleHeightInput.value;
    const heightValue = parseFloat(triangleHeightValue);
    
    const triangleArea = 0.5*baseValue*heightValue;
    const triangleResult = document.getElementById('triangleResult');
    triangleResult.innerText = triangleArea;
}