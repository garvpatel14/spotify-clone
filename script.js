let isPlaying = false;
let progressInterval;

// Toggle play/pause
function togglePlay() {
    const playBtn = document.querySelector('.play-btn');
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playBtn.textContent = '⏸️';
        startProgress();
    } else {
        playBtn.textContent = '▶️';
        stopProgress();
    }
}

// Play selected song
function playSong(songName) {
    const songTitle = document.getElementById('songTitle');
    songTitle.textContent = songName;
    
    const playBtn = document.querySelector('.play-btn');
    playBtn.textContent = '⏸️';
    isPlaying = true;
    
    // Reset and start progress
    const progress = document.getElementById('progress');
    progress.style.width = '0%';
    startProgress();
}

// Simulate progress bar
function startProgress() {
    stopProgress();
    const progress = document.getElementById('progress');
    let width = 0;
    
    progressInterval = setInterval(() => {
        if (width >= 100) {
            stopProgress();
            isPlaying = false;
            document.querySelector('.play-btn').textContent = '▶️';
        } else {
            width += 0.5;
            progress.style.width = width + '%';
        }
    }, 100);
}

function stopProgress() {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
}

// Volume control
function toggleVolume() {
    const volumeFill = document.querySelector('.volume-fill');
    const currentWidth = parseInt(volumeFill.style.width) || 70;
    
    if (currentWidth > 0) {
        volumeFill.style.width = '0%';
        event.target.textContent = '🔇';
    } else {
        volumeFill.style.width = '70%';
        event.target.textContent = '🔊';
    }
}

// Click on progress bar to seek
document.addEventListener('DOMContentLoaded', () => {
    const progressContainer = document.querySelector('.progress-container');
    
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        document.getElementById('progress').style.width = percent + '%';
    });
    
    // Click on volume bar
    const volumeBar = document.querySelector('.volume-bar');
    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        document.querySelector('.volume-fill').style.width = percent + '%';
    });
});

// Like button toggle
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
        likeBtn.textContent = likeBtn.textContent === '♡' ? '❤️' : '♡';
    });
});
