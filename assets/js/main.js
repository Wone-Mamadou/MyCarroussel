// Les Variables

var barrOutil = document.getElementById('toobar-toggle');
var img = document.querySelector('img');
var legend = document.querySelector('figcaption');

var images = [
    {image: "assets/images/1.jpg", legend: "Tag"},
    {image: "assets/images/2.jpg", legend: "Pont"},
    {image: "assets/images/3.jpg", legend: "Immeuble"},
    {image: "assets/images/4.jpg", legend: "Quartier d'affaire"},
    {image: "assets/images/5.jpg", legend: "Ville"},
    {image: "assets/images/6.jpg", legend: "Tour Eiffeil"}
];

var imgCourante = 0;
var timer = null

// les evénements

document.getElementById("slider-previous").addEventListener('click', reculer);
document.getElementById("slider-toggle").addEventListener('click', play);
document.getElementById("slider-next").addEventListener('click', avancer);
document.getElementById("slider-random").addEventListener('click', random);

// Les Fonctions

// Photo précédente 

function reculer(){
    imgCourante--;
    if(imgCourante < 0){
        imgCourante = images.length - 1;
    }
    img.src = images[imgCourante].image;
    legend.innerHTML = images[imgCourante].legend
}

function play(){
    document.querySelector("#slider-toggle i").classList.toggle('fa-play');
    document.querySelector("#slider-toggle i").classList.toggle('fa-pause');

    if( timer == null){
        timer = setInterval(avancer, 1000);
    }else{
        clearInterval(timer);
        timer = null
    }
}

// Photos suivantes
function avancer(){
    imgCourante++;
    if(imgCourante == images.length){
        imgCourante = 0;
    }
    img.src = images[imgCourante].image;
    legend.innerHTML = images[imgCourante].legend
}

function random() {
    document.querySelector("#slider-toggle i").classList.toggle('fa-play');
    document.querySelector("#slider-toggle i").classList.toggle('fa-pause');

    imgCourante = Math.floor(Math.random()*images.length);
    avancer();
}