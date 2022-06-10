// variable globale pour gérer suivant et précédent
let mediaEnCours;

export function chargeGallery(noeudHTML){
    let composantGalleryHTML = `
        <div id="gallery">
            
            <div id="media">
            </div>
            <div id="titreMedia"></div>
            <div id="miniature">
            </div>
            <div id="closeCross"><span aria-label="fermer la gallery" class="material-icons-outlined">
            close
            </span></div>
            <div id="leftArrow" ><span aria-label="image précédente" class="material-icons-outlined">
            arrow_back_ios
            </span></div>
            <div id="rightArrow" ><span aria-label="image suivante" class="material-icons-outlined">
            arrow_forward_ios
            </span></div>            
        </div>`;

    noeudHTML.innerHTML =  noeudHTML.innerHTML + composantGalleryHTML;
    let mediasInfos = document.querySelectorAll(".titleMedias");
    mediasInfos.forEach(mediasInfo => {
        mediasInfo.addEventListener("click",openGallery);
    });
    let medias = document.querySelectorAll(".galleryItem");
    medias.forEach(media => {
        media.addEventListener("click",openGallery);
    });

}


function openGallery(e){
    window.addEventListener("keydown",navigationGallery);
    document.addEventListener("click",openGallery);
    if(e.target.className === "galleryItem"){
        displayGallery(e.target);
    }
    if(e.target.className === "titleMedias"){
        displayGallery(e.target.parentElement);
    }
    if (e.target.id === "gallery" || e.target.parentNode.id === "closeCross"){
        closeGallery();
    }
    if(e.target.parentNode.id === "leftArrow"){
        displayMediaPrecedent();
    }
    if(e.target.parentNode.id === "rightArrow"){
        displayMediaSuivant();
    }
    if(e.target.className === "miniatureItem"){
        mediaEnCours = e.target;
        displayGallery(mediaEnCours);
    }
}

function navigationGallery(event){
    if(event.keyCode === 37){
        displayMediaPrecedent();
    }
    if(event.keyCode === 39){
        displayMediaSuivant();
    }
    if(event.keyCode === 27){
        closeGallery();
    }       
}

function displayMediaPrecedent(){
    if (mediaEnCours.parentNode.previousElementSibling!==null){
        mediaEnCours = mediaEnCours.parentNode.previousElementSibling.firstChild;
        displayGallery(mediaEnCours);
    }
}

function displayMediaSuivant(){

    if (mediaEnCours.parentNode.nextElementSibling && (mediaEnCours.parentNode.nextElementSibling.classList.contains("light-link") ||mediaEnCours.parentNode.nextElementSibling.classList.contains("miniature"))){
        mediaEnCours = mediaEnCours.parentNode.nextElementSibling.firstChild;
        displayGallery(mediaEnCours);
    }
}

function closeGallery(){
    document.querySelector("#gallery").style.visibility = "hidden";
    window.removeEventListener("keydown",navigationGallery);
    document.removeEventListener("click",openGallery);
}

function displayGallery(noeudHTML){
    mediaEnCours = noeudHTML;

    document.querySelector("#gallery").style.visibility = "visible";
    if (mediaEnCours.parentNode.classList.contains("miniature")===true){
        if (mediaEnCours.parentNode.classList.contains("courtmetrage")===true){
            let titre = mediaEnCours.parentNode.getAttribute("data-sub-html");
            document.querySelector("#media").innerHTML = `
                <video
                controls
                autoplay
                preload="auto"
                data-setup="{}"src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `">
                    <source src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>`;
            //position du titre
            document.querySelector("#titreMedia").style.width = "80%";
            document.querySelector("#titreMedia").innerHTML = titre;
        }else{
            let titre = mediaEnCours.parentNode.getAttribute("data-sub-html");
            document.querySelector("#media").innerHTML = `<img src="` + mediaEnCours.parentNode.children[0].src + `"/>`;
            document.querySelector("#titreMedia").innerHTML = titre;
        }
    }else{
        if (mediaEnCours.parentNode.classList.contains("courtmetrage")===true){
            let titre = mediaEnCours.parentNode.getAttribute("data-sub-html");
            document.querySelector("#media").innerHTML = `
                <video
                controls
                autoplay
                preload="auto"
                data-setup="{}"src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `">
                    <source src="` + mediaEnCours.parentNode.children[0].getAttribute("data-src")  + `" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>`;
            document.querySelector("#titreMedia").innerHTML = titre;
        }else{
            let titre = mediaEnCours.parentNode.getAttribute("data-sub-html");
            document.querySelector("#media").innerHTML = `<img src="` + noeudHTML.parentNode.href + `"/>`;
            document.querySelector("#titreMedia").innerHTML = titre;
        }
        
    }
    
}