const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

//Music 
const songs = [
    {
        name : 'jacinto-1',
        displayName : 'Electronic Dance Machine',
        artist : 'Kunal Design',
    },
    {
        name : 'jacinto-2',
        displayName : 'Electronic Chill Machine',
        artist : 'Kunal Design',
    },
    {
        name : 'jacinto-3',
        displayName : 'Electronic Jazz Machine',
        artist : 'Kunal Design',
    },
    {
        name : 'jacinto-4',
        displayName : 'Electronic Rock Machine',
        artist : 'Kunal Design',
    }
]

//Check if Playing
let isPlaying = false;

//Play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

//Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

//Play/Pause EventListener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

//Previous Song
function previousSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong(); 
}

//Next Song
function nextSong(){

    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong(); 
}

//Update Progress Bar & Time
function updateProgressBar(e){
    if (isPlaying){
        console.log(e)
    }
}

//Onload : Select first song
loadSong(songs[songIndex]);


//Event Listeners
prevBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);