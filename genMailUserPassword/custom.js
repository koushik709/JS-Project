const inputName = document.querySelector('.inputName');
const generate = document.querySelector('.generate');

generate.addEventListener('click', function(){
    let inputValue = inputName.value;
    if(inputValue === ""){
        alert('Please type something');
        setTimeout(function(){
            location.reload();
        }, 500);
    } else {
        const inputText = inputValue.toLowerCase().split(" ");
        const UserNumber = Math.floor(Math.random(10)*123);
        const userGen = `@${inputText.size > 0 ? inputText[1] : inputText[0]}${UserNumber}` ;
        const fullName = inputText.join('') + UserNumber + "@gmail.com";
        const passwordGen = `a${Math.floor(Math.random(10)*10)}#${Math.floor(Math.random(10)*10)}k@${UserNumber}_YKtB`;

        console.log("Yes it is clicked", fullName, userGen);
        document.querySelector('#mail').value = fullName;
        document.querySelector('#username').value = userGen;
        document.querySelector('#password').value = passwordGen;
        document.querySelector('.inputBody').classList.remove('hidden');
        
        console.log("Yes it is clicked", fullName, userGen);
    }
});






