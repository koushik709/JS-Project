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









