//image Uploader //video uploader
const fileInput = document.querySelectorAll('.fileInput')
let inputImage = '';
fileInput.forEach((el, l)=>{
    el.addEventListener('change', (e)=>{
        const filePath = new FileReader();
        filePath.readAsDataURL(el.files[0]);
        filePath.addEventListener('load', () => {
            inputImage = filePath.result;
            if(l===0){
                document.querySelector('#displayImage').style.backgroundImage = `url(${inputImage})`;
            }
            if(l===1){
                document.querySelector('#displayVideo').src = inputImage;
            }
        });
    });
});


const jsmediatags = window.jsmediatags;

document.querySelector('#fileInputAudio').addEventListener('change', (event)=>{
    const file = event.target.files[0];

    jsmediatags.read(file, {
        onSuccess: function(tag){
            //console.log(tag);
            const data = tag.tags.picture.data;
            const format = tag.tags.picture.format;
            let base64String = "";
            for(let i=0; i< data.length; i++){
                base64String += String.fromCharCode(data[i]);
            }
            document.querySelector('#displayImage3').style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;


            document.querySelector('#title').innerHTML = `<b>Title: </b>${tag.tags.title}`;
            document.querySelector('#artist').innerHTML = `<b>Artitst: </b>${tag.tags.artist}`;
            document.querySelector('#album').innerHTML = `<b>Album: </b>${tag.tags.album}`;
            document.querySelector('#genre').innerHTML = `<b>Genre: </b>${tag.tags.genre}`;
        },
        onError: function(error){
            console.log(error);
        }
    });
});



// Sticky Notes



// sticky modal

const deleteSticky = document.querySelectorAll('.deleteSticky');
const addSticky = document.querySelector('.addSticky');
const modalbg = document.querySelector('.modalbg');
const stickyModal = document.querySelector('.stickyModal');

const CancelSticky = document.querySelector('.CancelSticky');
const submitSticky = document.querySelector('.submitSticky');


const bodyCard = document.querySelector('.stickyCardBody');
const textVal = document.getElementsByName('stickyText');

const stickyCard = function(text){
    const cardElement = document.createElement('div');
    cardElement.classList.add('Stickycard', 'm-2', 'position-relative', 'd-inline-block', 'pt-4', 'bg-light', 'p-3', 'rounded-3');
    cardElement.innerHTML = `
        <div class="deleteSticky">
            <i class="fa fa-trash text-danger position-absolute"></i>
        </div>
        <p class="stickyText fs-12 fw-medium pt-3">${text}</p>
    `;
    return cardElement;
}
document.querySelector('.stickyCardBody').addEventListener('click', function(event) {
    if (event.target.closest('.deleteSticky')) {
        const stickyCard = event.target.closest('.Stickycard');
        if (stickyCard) {
            
            stickyCard.remove();
        }
    }
});
// deleteSticky.forEach((el)=>{
//     el.addEventListener('click', (event)=>{
//         const stickyCard = event.target.closest('.Stickycard');
//         console.log("there is not stickyCard");
//         if (stickyCard) {
//             stickyCard.remove();
//         }
//     });
// });
function addRemove(){
    modalbg.classList.contains('hidden') ? modalbg.classList.remove('hidden') : modalbg.classList.add('hidden');
    stickyModal.classList.contains('hidden') ? stickyModal.classList.remove('hidden') : stickyModal.classList.add('hidden');
}

addSticky.addEventListener('click', ()=>{
    addRemove();
});

CancelSticky.addEventListener('click', ()=>{
    textVal[0].value="";
    addRemove();
});

const sizeLe = document.querySelectorAll('.Stickycard');
submitSticky.addEventListener('click', ()=>{
    let inputVal = textVal[0].value;
    if (inputVal.trim() !== '') { 
        const cardElement = stickyCard(inputVal);
        bodyCard.appendChild(cardElement);
        textVal[0].value="";
        addRemove();
    } else {
        alert("Please Type Something.");
    }
});







