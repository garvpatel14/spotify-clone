// Music Library - Using free demo audio files
const musicLibrary = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        // Using a demo audio URL - you can replace with your own
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: 233,
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        duration: 203,
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        duration: 230,
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        title: "Sunflower",
        artist: "Post Malone, Swae Lee",
        duration: 158,
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        duration: 183,
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    }
];

// Global state
let currentTrackIndex = 0;
let isPlaying = false;
let isLiked = false;
let isShuffle = false;
let repeatMode = 0; // 0: off, 1: repeat all, 2: repeat one
let isMuted = false;
let audioPlayer;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    audioPlayer = document.getElementById('audioPlayer');
    setupEventListeners();
    loadTrack(0);
});

// Setup all event listeners
function setupEventListeners() {
    // Audio player events
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', handleTrackEnd);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    
    // Progress bar interaction
    const progressContainer = document.getElementById('progressContainer');
    progressContainer.addEventListener('click', seekTrack);
    
    // Volume bar interaction
    const volumeBar = document.querySelector('.volume-bar-container');
    if (volumeBar) {
        volumeBar.addEventListener('click', setVolume);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyPress);
}

// Load track
function loadTrack(index) {
    if (index < 0 || index >= musicLibrary.length) return;
    
    currentTrackIndex = index;
    const track = musicLibrary[index];
    
    // Update UI
    document.getElementById('trackName').textContent = track.title;
    document.getElementById('artistName').textContent = track.artist;
    
    // Load audio
    audioPlayer.src = track.audio;
    audioPlayer.load();
    
    // Reset liked state (you can implement persistence)
    updateLikeButton(false);
}

// Play specific track
function playTrack(index) {
    if (currentTrackIndex !== index) {
        loadTrack(index);
    }
    
    audioPlayer.play().then(() => {
        isPlaying = true;
        updatePlayButton();
    }).catch(error => {
        console.log('Playback error:', error);
    });
}

// Toggle play/pause
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play().then(() => {
            isPlaying = true;
        }).catch(error => {
            console.log('Playback error:', error);
        });
    }
    updatePlayButton();
}

// Update play button icon
function updatePlayButton() {
    const playButton = document.querySelector('.play-pause-button i');
    playButton.className = isPlaying ? 'fa-solid fa-circle-pause' : 'fa-solid fa-circle-play';
}

// Previous track
function previousTrack() {
    // If more than 3 seconds played, restart current track
    if (audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0;
    } else {
        let newIndex = currentTrackIndex - 1;
        if (newIndex < 0) {
            newIndex = musicLibrary.length - 1;
        }
        playTrack(newIndex);
    }
}

// Next track
function nextTrack() {
    let newIndex;
    
    if (isShuffle) {
        newIndex = Math.floor(Math.random() * musicLibrary.length);
    } else {
        newIndex = currentTrackIndex + 1;
        if (newIndex >= musicLibrary.length) {
            newIndex = 0;
        }
    }
    
    playTrack(newIndex);
}

// Handle track end
function handleTrackEnd() {
    if (repeatMode === 2) {
        // Repeat one
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else if (repeatMode === 1 || currentTrackIndex < musicLibrary.length - 1) {
        // Repeat all or not last track
        nextTrack();
    } else {
        // Last track and no repeat
        isPlaying = false;
        updatePlayButton();
    }
}

// Update progress bar
function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    
    // Update time display
    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
}

// Update duration display
function updateDuration() {
    document.getElementById('totalTime').textContent = formatTime(audioPlayer.duration);
}

// Seek track
function seekTrack(e) {
    const progressContainer = document.getElementById('progressContainer');
    const rect = progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
}

// Format time (seconds to mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Toggle like
function toggleLike() {
    isLiked = !isLiked;
    updateLikeButton(isLiked);
    
    // Add animation
    const likeButton = document.querySelector('.like-button');
    likeButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        likeButton.style.transform = 'scale(1)';
    }, 200);
}

// Update like button
function updateLikeButton(liked) {
    isLiked = liked;
    const likeButton = document.querySelector('.like-button');
    const likeIcon = likeButton.querySelector('i');
    
    if (liked) {
        likeIcon.className = 'fa-solid fa-heart';
        likeButton.classList.add('liked');
    } else {
        likeIcon.className = 'fa-regular fa-heart';
        likeButton.classList.remove('liked');
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    const shuffleButton = document.querySelectorAll('.control-button')[0];
    
    if (isShuffle) {
        shuffleButton.classList.add('active');
    } else {
        shuffleButton.classList.remove('active');
    }
}

// Toggle repeat
function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    const repeatButton = document.querySelectorAll('.control-button')[4];
    const repeatIcon = repeatButton.querySelector('i');
    
    if (repeatMode === 0) {
        // Off
        repeatButton.classList.remove('active');
        repeatIcon.className = 'fa-solid fa-repeat';
    } else if (repeatMode === 1) {
        // Repeat all
        repeatButton.classList.add('active');
        repeatIcon.className = 'fa-solid fa-repeat';
    } else {
        // Repeat one
        repeatButton.classList.add('active');
        repeatIcon.className = 'fa-solid fa-repeat-1';
    }
}

// Set volume
function setVolume(e) {
    const volumeBar = document.querySelector('.volume-bar-container');
    const rect = volumeBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    
    audioPlayer.volume = Math.max(0, Math.min(1, percent));
    updateVolumeBar(percent * 100);
    
    // Update mute state and icon
    isMuted = audioPlayer.volume === 0;
    updateVolumeIcon();
}

// Toggle mute
function toggleMute() {
    if (isMuted) {
        audioPlayer.volume = 0.7;
        isMuted = false;
        updateVolumeBar(70);
    } else {
        audioPlayer.volume = 0;
        isMuted = true;
        updateVolumeBar(0);
    }
    updateVolumeIcon();
}

// Update volume icon
function updateVolumeIcon() {
    const volumeButton = document.querySelector('.playback-right .control-button:nth-child(4)');
    const volumeIcon = volumeButton.querySelector('i');
    
    if (audioPlayer.volume === 0 || isMuted) {
        volumeIcon.className = 'fa-solid fa-volume-xmark';
    } else if (audioPlayer.volume < 0.5) {
        volumeIcon.className = 'fa-solid fa-volume-low';
    } else {
        volumeIcon.className = 'fa-solid fa-volume-high';
    }
}

// Update volume bar display
function updateVolumeBar(percent) {
    const volumeBar = document.getElementById('volumeBar');
    if (volumeBar) {
        volumeBar.style.width = percent + '%';
    }
}

// Keyboard shortcuts
function handleKeyPress(e) {
    // Prevent shortcuts when typing in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            e.preventDefault();
            audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
            break;
        case 'ArrowLeft':
            e.preventDefault();
            audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
            break;
        case 'ArrowUp':
            e.preventDefault();
            audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
            updateVolumeBar(audioPlayer.volume * 100);
            updateVolumeIcon();
            break;
        case 'ArrowDown':
            e.preventDefault();
            audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
            updateVolumeBar(audioPlayer.volume * 100);
            updateVolumeIcon();
            break;
        case 'KeyM':
            e.preventDefault();
            toggleMute();
            break;
        case 'KeyN':
            e.preventDefault();
            nextTrack();
            break;
        case 'KeyP':
            e.preventDefault();
            previousTrack();
            break;
        case 'KeyS':
            e.preventDefault();
            toggleShuffle();
            break;
        case 'KeyR':
            e.preventDefault();
            toggleRepeat();
            break;
        case 'KeyL':
            e.preventDefault();
            toggleLike();
            break;
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize volume on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        audioPlayer.volume = 0.7;
        updateVolumeBar(70);
    }, 100);
});

// Show notification for keyboard shortcuts
function showShortcutsNotification() {
    const shortcuts = `
    Keyboard Shortcuts:
    Space - Play/Pause
    → - Forward 5s
    ← - Backward 5s
    ↑ - Volume Up
    ↓ - Volume Down
    M - Mute/Unmute
    N - Next Track
    P - Previous Track
    S - Shuffle
    R - Repeat
    L - Like
    `;
    console.log(shortcuts);
}

// Call this to see shortcuts
// showShortcutsNotification();
