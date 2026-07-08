// Music Library - Organized by playlists
const musicLibrary = [
    // Liked Songs / Daily Mix 1
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        playlist: "Liked Songs",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Save Your Tears",
        artist: "The Weeknd",
        duration: 215,
        playlist: "Liked Songs",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        duration: 230,
        playlist: "Liked Songs",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    
    // Discover Weekly / Daily Mix 2
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: 233,
        playlist: "Discover Weekly",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        duration: 263,
        playlist: "Discover Weekly",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        duration: 281,
        playlist: "Discover Weekly",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    
    // Release Radar
    {
        title: "Levitating",
        artist: "Dua Lipa",
        duration: 203,
        playlist: "Release Radar",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        duration: 183,
        playlist: "Release Radar",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
        title: "Physical",
        artist: "Dua Lipa",
        duration: 194,
        playlist: "Release Radar",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    
    // Daily Mix 1 / Summer Hits
    {
        title: "Sunflower",
        artist: "Post Malone, Swae Lee",
        duration: 158,
        playlist: "Daily Mix 1",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
        title: "Circles",
        artist: "Post Malone",
        duration: 215,
        playlist: "Daily Mix 1",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
        title: "Better Now",
        artist: "Post Malone",
        duration: 231,
        playlist: "Daily Mix 1",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    },
    
    // On Repeat / Summer Hits
    {
        title: "As It Was",
        artist: "Harry Styles",
        duration: 167,
        playlist: "On Repeat",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
    },
    {
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        duration: 174,
        playlist: "On Repeat",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
    },
    {
        title: "Golden",
        artist: "Harry Styles",
        duration: 206,
        playlist: "On Repeat",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    
    // Chill Lounge / Peaceful Piano
    {
        title: "Someone Like You",
        artist: "Adele",
        duration: 285,
        playlist: "Chill Lounge",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    },
    {
        title: "Hello",
        artist: "Adele",
        duration: 295,
        playlist: "Chill Lounge",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Easy On Me",
        artist: "Adele",
        duration: 224,
        playlist: "Chill Lounge",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    
    // Deep Focus / Instrumental Study
    {
        title: "Roses",
        artist: "SAINt JHN",
        duration: 186,
        playlist: "Deep Focus",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        title: "Blinding Lights (Remix)",
        artist: "The Weeknd",
        duration: 200,
        playlist: "Deep Focus",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        title: "Memories",
        artist: "Maroon 5",
        duration: 189,
        playlist: "Deep Focus",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    
    // Jazz Vibes
    {
        title: "Lovely",
        artist: "Billie Eilish, Khalid",
        duration: 200,
        playlist: "Jazz Vibes",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        duration: 200,
        playlist: "Jazz Vibes",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        title: "When The Party's Over",
        artist: "Billie Eilish",
        duration: 196,
        playlist: "Jazz Vibes",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    
    // Workout Beats
    {
        title: "Stronger",
        artist: "Kanye West",
        duration: 311,
        playlist: "Workout Beats",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
        title: "POWER",
        artist: "Kanye West",
        duration: 292,
        playlist: "Workout Beats",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
        title: "All of the Lights",
        artist: "Kanye West",
        duration: 300,
        playlist: "Workout Beats",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    }
];

// Global state
let currentTrackIndex = 0;
let currentPlaylist = [];
let isPlaying = false;
let isLiked = false;
let isShuffle = false;
let repeatMode = 0; // 0: off, 1: repeat all, 2: repeat one
let isMuted = false;
let audioPlayer;

// Playlist mappings
const playlists = {
    0: "Liked Songs",
    1: "Discover Weekly",
    2: "Release Radar",
    3: "Daily Mix 1",
    4: "On Repeat",
    5: "Chill Lounge",
    6: "Deep Focus",
    7: "Jazz Vibes",
    8: "Workout Beats"
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    audioPlayer = document.getElementById('audioPlayer');
    setupEventListeners();
    loadPlaylist(0); // Load Liked Songs by default
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

// Load playlist
function loadPlaylist(playlistIndex) {
    const playlistName = playlists[playlistIndex];
    currentPlaylist = musicLibrary.filter(track => track.playlist === playlistName);
    
    if (currentPlaylist.length > 0) {
        loadTrackFromPlaylist(0);
        updatePlaylistInfo(playlistName, currentPlaylist.length);
    } else {
        // Fallback to all tracks if playlist is empty
        currentPlaylist = musicLibrary;
        loadTrackFromPlaylist(0);
        updatePlaylistInfo("All Songs", currentPlaylist.length);
    }
}

// Update playlist info display
function updatePlaylistInfo(playlistName, songCount) {
    console.log(`🎵 Now Playing: ${playlistName} (${songCount} songs)`);
    // You can add a UI element to display this if needed
}

// Load track from current playlist
function loadTrackFromPlaylist(index) {
    if (index < 0 || index >= currentPlaylist.length) return;
    
    currentTrackIndex = index;
    const track = currentPlaylist[index];
    
    // Update UI
    document.getElementById('trackName').textContent = track.title;
    document.getElementById('artistName').textContent = track.artist;
    
    // Load audio
    audioPlayer.src = track.audio;
    audioPlayer.load();
    
    // Reset liked state (you can implement persistence)
    updateLikeButton(false);
}

// Load track (legacy - now uses playlist system)
function loadTrack(index) {
    loadPlaylist(index);
}

// Play specific track/playlist
function playTrack(playlistIndex) {
    loadPlaylist(playlistIndex);
    
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
        newIndex = Math.floor(Math.random() * currentPlaylist.length);
    } else {
        newIndex = currentTrackIndex + 1;
        if (newIndex >= currentPlaylist.length) {
            newIndex = 0;
        }
    }
    
    loadTrackFromPlaylist(newIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
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
