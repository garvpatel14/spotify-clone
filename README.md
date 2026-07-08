# Spotify Web Player Clone

A fully functional Spotify-like web player built with HTML, CSS, and JavaScript. Features real audio playback and interactive controls.

## ✨ Features

### 🎵 Audio Playback
- **Real audio player** with working play/pause controls
- **6 demo tracks** included (uses free demo audio)
- **Track progress bar** with seek functionality
- **Volume control** with visual slider
- **Auto-play next track** when current track ends

### 🎛️ Playback Controls
- ▶️ **Play/Pause** - Toggle playback
- ⏮️ **Previous Track** - Go to previous song (or restart if > 3 seconds)
- ⏭️ **Next Track** - Skip to next song
- 🔀 **Shuffle Mode** - Random playback order
- 🔁 **Repeat Modes** - Off / Repeat All / Repeat One
- ❤️ **Like Button** - Mark favorite tracks
- 🔊 **Volume & Mute** - Adjust or mute volume

### ⌨️ Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `→` | Forward 5 seconds |
| `←` | Backward 5 seconds |
| `↑` | Volume Up |
| `↓` | Volume Down |
| `M` | Mute/Unmute |
| `N` | Next Track |
| `P` | Previous Track |
| `S` | Toggle Shuffle |
| `R` | Toggle Repeat |
| `L` | Like/Unlike |

### 🎨 UI Features
- **Spotify-authentic design** with dark theme
- **Responsive layout** for different screen sizes
- **Smooth animations** on hover and click
- **Interactive cards** for playlists
- **Real-time progress** tracking
- **Dynamic time display** (mm:ss format)

### 📱 Responsive Design
- Desktop-optimized layout
- Tablet-friendly navigation
- Mobile-responsive controls
- Collapsible sidebar on small screens

## 🚀 How to Use

### Quick Start
1. Open `index.html` in a web browser
2. Click on any playlist or track card to start playing
3. Use the player controls at the bottom
4. Try keyboard shortcuts for quick control

### Adding Your Own Music
Edit the `musicLibrary` array in `script.js`:

```javascript
const musicLibrary = [
    {
        title: "Your Song Title",
        artist: "Artist Name",
        duration: 180, // seconds
        audio: "path/to/your/audio.mp3" // or URL
    },
    // Add more tracks...
];
```

### Customizing
- **Colors**: Edit CSS variables in `style.css` (`:root` section)
- **Layout**: Modify grid columns in `.card-grid` and `.quick-picks`
- **Icons**: Change FontAwesome icons in `index.html`

## 🛠️ Technical Details

### Built With
- **HTML5** - Structure and audio element
- **CSS3** - Styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **FontAwesome 6** - Icon library

### File Structure
```
├── index.html      # Main HTML structure
├── style.css       # All styling and layout
├── script.js       # Music player functionality
└── README.md       # Documentation
```

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🎯 Features Implemented

### Core Functionality
- [x] Audio playback with HTML5 Audio API
- [x] Play/pause toggle
- [x] Track navigation (next/previous)
- [x] Seek functionality
- [x] Volume control
- [x] Mute/unmute
- [x] Progress bar with real-time updates
- [x] Time display (current/total)
- [x] Track switching

### Advanced Features
- [x] Shuffle mode
- [x] Repeat modes (off/all/one)
- [x] Like/unlike tracks
- [x] Keyboard shortcuts
- [x] Auto-play next track
- [x] Restart current track
- [x] Interactive UI elements
- [x] Hover effects and animations
- [x] Responsive design

### UI/UX
- [x] Spotify-like design
- [x] Dark theme
- [x] Green accent colors
- [x] Smooth transitions
- [x] Interactive cards
- [x] Sidebar navigation
- [x] Header with user actions
- [x] Fixed playback bar
- [x] Scrollable content area

## 🔮 Future Enhancements

- [ ] Playlist management (create, edit, delete)
- [ ] Search functionality
- [ ] User authentication
- [ ] Backend integration
- [ ] Album artwork display
- [ ] Lyrics display
- [ ] Queue management
- [ ] Cross-fade between tracks
- [ ] Equalizer
- [ ] Local file upload
- [ ] Favorites persistence (localStorage)
- [ ] Playlist sharing
- [ ] Social features

## 📝 Notes

- Demo uses **SoundHelix** free demo tracks for testing
- Replace with your own audio files or streaming URLs
- For production, implement proper audio licensing
- Add backend for user data persistence

## 🎵 Audio Sources

Current demo uses free music from SoundHelix (royalty-free).

To use your own music:
1. Add MP3 files to your project folder
2. Update `musicLibrary` array in `script.js`
3. Ensure proper licensing for audio content

## 💡 Tips

- **Performance**: Use compressed audio formats (MP3, AAC)
- **Loading**: Add loading indicators for network audio
- **Mobile**: Test touch interactions on mobile devices
- **Accessibility**: Add ARIA labels for screen readers

## 🐛 Troubleshooting

**Audio not playing?**
- Check browser console for errors
- Verify audio URLs are accessible
- Some browsers block autoplay (user interaction required)

**Controls not working?**
- Ensure JavaScript is enabled
- Check for browser compatibility
- Open developer console for error messages

**Styling issues?**
- Clear browser cache
- Check FontAwesome CDN is loading
- Verify CSS file path

## 📄 License

Free to use for personal and educational projects. For commercial use, ensure proper licensing for all audio content.

---

**Enjoy your music! 🎵**
