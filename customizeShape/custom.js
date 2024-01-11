const fillColor = document.getElementById('color');
const borderSize = document.getElementById('borderSize');
const borderStyle = document.getElementById('borderStyle');
const borderColor = document.getElementById('borderColor');
const shapeWidth = document.getElementById('width');
const shapeHeight = document.getElementById('height');
const shapeRadius = document.getElementById('radius');
const shadowX = document.getElementById('shadowX');
const shadowY = document.getElementById('shadowY');
const shadowBlur = document.getElementById('shadowBlur');
const shadowColor = document.getElementById('shadowColor');
const cssContent = document.getElementById('cssContent');


const mainShape = document.getElementById('CustomizeMeNow');



function shape(){
    mainShape.style.backgroundColor = fillColor.value;
    mainShape.style.border = `${borderSize.value} ${borderStyle.value} ${borderColor.value}`;
    mainShape.style.width = `${shapeWidth.value}px`;
    mainShape.style.height = `${shapeHeight.value}px`;
    mainShape.style.borderRadius = `${shapeRadius.value}px`;
    mainShape.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${shadowColor.value}`;
    
    cssContent.innerHTML =
    `background-color: ${fillColor.value} <br>
    width: ${shapeWidth.value}px <br>
    height: ${shapeHeight.value}px <br>
    border-radius: ${shapeRadius.value}px <br>
    box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${shadowColor.value} <br>
    border: ${borderSize.value} ${borderStyle.value} ${borderColor.value} <br>
    `;
}


document.getElementById('updateShape').addEventListener('click', shape);
document.getElementById('copyText').addEventListener('click', function(){
    alert('This function is not working currently. Please copy the properties manually.');
    // var textCopy = cssContent.value;
    // textCopy.select();
    // textCopy.setSelectionRange(0, 99999);
    // document.execCommand('copy');
    // navigator.clipboard.writeText(textCopy.value);
    // alert('Text Copied');
});

//alert('Text Copied');


document.getElementById('resetShape').addEventListener('click', () => {
    document.querySelector('.confirmReset').classList.remove('hidden');
});

document.querySelector('.confirmResetButton').addEventListener('click', ()=>{
    setTimeout(function(){
        location.reload();
    }, 500);
});
document.querySelector('.rejectResetButton').addEventListener('click', ()=>{
    document.querySelector('.confirmReset').classList.add('hidden');
});


// confirmResetButton btn btn-sm btn-primary">Yes, I Want</button>
//             <button type="button" class="rejectResetButton


