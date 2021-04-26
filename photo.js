
function createImage(src){

const image=document.createElement('img');
image.src=src;
return image;

}

const albumView = document.querySelector('#album-view');

for(let i=0; i<PHOTO_LIST.length; i++){

    const photoSrc = PHOTO_LIST[i];
    const image=createImage(photoSrc);
    const contenitore=document.createElement("div");
    contenitore.setAttribute('class', 'contenitore');
    image.addEventListener('click', onThumbnailClick);
    contenitore.appendChild(image);
    albumView.appendChild(contenitore);
}

function onThumbnailClick(event){

    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px'; //scostam verticale della viewport rispett inizio pagina
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML='';
}

const modalView=document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);