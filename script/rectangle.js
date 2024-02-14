function retangleArea(){
    const rectangleWidthInput = document.getElementById('rectangleWidth');
    const rectangleWidthValue = rectangleWidthInput.value;
    const widthValue = parseFloat(rectangleWidthValue);
   

    const rectangleLengthInput = document.getElementById('rectangleLength');
    const rectangleLengthValue = rectangleLengthInput.value;
    const LengthleValue = parseFloat(rectangleLengthValue);
    
    const rectangleArea = widthValue*LengthleValue;
    const rectangleAreaOutput = document.getElementById('rectangleArea');
    rectangleAreaOutput.innerText = rectangleArea;
}