const tBody = document.getElementsByTagName('tbody')[0];
const addNewRow = document.getElementsByClassName('addNewRow')[0];
const removeRow = document.querySelectorAll('.removeRow');
const keyStyle = document.querySelector('select');

const navKeyRow = (id) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>
            keys: 
            <input type="text" name="keys" class="form-control navKeys">
        </td>
        <td>Values: 
            <input type="text" name="values" class="form-control cat_settingValues">
        </td>
        <td><button type="button" class="btn btn-xs btn-danger removeRow">X</button></td>
    `;
    return newRow;
};

let id = 1;
window.addEventListener('load', () => {
    tBody.appendChild(navKeyRow(id));
});
addNewRow.addEventListener('click', ()=>{
    id++;
    tBody.appendChild(navKeyRow(id));
});
removeRow.forEach((el)=>{
    el.addEventListener('click', () => {
        console.log("yes it is clicked");
        el.closest('tr').remove();
    });
});
tBody.addEventListener('click', (event) => {
    const removeRowlength = document.querySelectorAll('.removeRow');
    if (event.target.classList.contains('removeRow') && removeRowlength.length != 1) {
        event.target.closest('tr').remove();
    }
    if(removeRowlength.length == 1){
        alert('You can not delete the last row. Thank you.');
    }
});
//tabg Style key
const tabStyle = (inputValues)=>{
    const keyValueInput = document.querySelectorAll('.navKeys');
    inputValues.forEach((el, i)=>{
		if(el.length===1){
			const keyValue = el.toLowerCase().split(' ').join('');
			keyValueInput[i].value = keyValue;
		}
        else{
            const keyValue = el.toLowerCase().split(' ').join('_');
            keyValueInput[i].value = keyValue;
        }
    })
}

//camel Style key
const camelStyle = (inputValues)=>{
    const keyValueInput = document.querySelectorAll('.navKeys');
    inputValues.forEach((el, i)=>{
        const keyValue = el.toLowerCase().split(' ');
        for (let j = 1; j < keyValue.length; j++) {
            keyValue[j] = keyValue[j][0].toUpperCase() + keyValue[j].slice(1);
        }

        const camelCaseValue = keyValue.join('');
        
        keyValueInput[i].value = camelCaseValue;
    })
}

//camel Style key
const pascalStyle = (inputValues)=>{
    const keyValueInput = document.querySelectorAll('.navKeys');
    inputValues.forEach((el, i)=>{
        const keyValue = el.toLowerCase().split(' ');
        for (let j = 0; j < keyValue.length; j++) {
            keyValue[j] = keyValue[j][0].toUpperCase() + keyValue[j].slice(1);
        }

        const camelCaseValue = keyValue.join('');
        
        keyValueInput[i].value = camelCaseValue;
    })
}


document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('filterKey')) {
        handleFilterKey(e.target); // Pass the clicked element to the function
    }
    console.log(e.target)
});

//now it is collecting values & calling the functions to generate the keys
const handleFilterKey = (e) => {
    const inputValues = [];
    const values = document.querySelectorAll('.cat_settingValues');
    values.forEach(el => inputValues.push(el.value));
    const keysOption = e.closest('.closestKeyOption').querySelector('#keysOption');
    if(keysOption.value === 'tags_style'){
        tabStyle(inputValues);
    }
    if(keysOption.value === 'camel_style'){
        camelStyle(inputValues);
    }
    if(keysOption.value === 'pascal_style'){
        pascalStyle(inputValues);
    }
}