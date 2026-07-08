# 🎵 Complete Song Library

## Total Songs: 30 tracks across 9 playlists

---

## 📋 Playlists & Songs

### 1. ❤️ Liked Songs (3 songs)
1. **Blinding Lights** - The Weeknd (3:20)
2. **Save Your Tears** - The Weeknd (3:35)
3. **Starboy** - The Weeknd ft. Daft Punk (3:50)

### 2. 🎵 Discover Weekly (3 songs)
1. **Shape of You** - Ed Sheeran (3:53)
2. **Perfect** - Ed Sheeran (4:23)
3. **Thinking Out Loud** - Ed Sheeran (4:41)

### 3. ⚡ Release Radar (3 songs)
1. **Levitating** - Dua Lipa (3:23)
2. **Don't Start Now** - Dua Lipa (3:03)
3. **Physical** - Dua Lipa (3:14)

### 4. 🔥 Daily Mix 1 (3 songs)
1. **Sunflower** - Post Malone, Swae Lee (2:38)
2. **Circles** - Post Malone (3:35)
3. **Better Now** - Post Malone (3:51)

### 5. 🔁 On Repeat (3 songs)
1. **As It Was** - Harry Styles (2:47)
2. **Watermelon Sugar** - Harry Styles (2:54)
3. **Golden** - Harry Styles (3:26)

### 6. ☁️ Chill Lounge (3 songs)
1. **Someone Like You** - Adele (4:45)
2. **Hello** - Adele (4:55)
3. **Easy On Me** - Adele (3:44)

### 7. 🧠 Deep Focus (3 songs)
1. **Roses** - SAINt JHN (3:06)
2. **Blinding Lights (Remix)** - The Weeknd (3:20)
3. **Memories** - Maroon 5 (3:09)

### 8. 🎷 Jazz Vibes (3 songs)
1. **Lovely** - Billie Eilish, Khalid (3:20)
2. **Ocean Eyes** - Billie Eilish (3:20)
3. **When The Party's Over** - Billie Eilish (3:16)

### 9. 💪 Workout Beats (3 songs)
1. **Stronger** - Kanye West (5:11)
2. **POWER** - Kanye West (4:52)
3. **All of the Lights** - Kanye West (5:00)

---

## 🎯 How It Works

### Playlist Selection
- Click any playlist card to load all songs from that playlist
- First song starts playing automatically
- Navigate through songs using next/previous buttons

### Playback Features
- **Sequential Play**: Songs play in order within the playlist
- **Shuffle Mode**: Random order within current playlist
- **Repeat Modes**:
  - Off: Stop after playlist ends
  - Repeat All: Loop entire playlist
  - Repeat One: Loop current song

### Navigation
- **Next**: Skip to next song in current playlist
- **Previous**: Go to previous song (or restart if > 3 seconds)
- **Auto-advance**: Automatically plays next song when current ends

---

## 🔧 Technical Details

### Music Library Structure
```javascript
{
    title: "Song Name",
    artist: "Artist Name",
    duration: 200, // in seconds
    playlist: "Playlist Name",
    audio: "URL to audio file"
}
```

### Playlist Organization
Each playlist contains exactly 3 songs, making it easy to:
- Test playlist functionality
- Experience full playlist playback
- Understand the shuffle/repeat features

---

## 📝 Adding Your Own Songs

### Option 1: Replace Demo URLs
Edit `script.js` and update the `audio` field with your own MP3 URLs:

```javascript
{
    title: "Your Song",
    artist: "Your Artist",
    duration: 240,
    playlist: "Liked Songs",
    audio: "https://your-domain.com/song.mp3"
}
```

### Option 2: Use Local Files
1. Create a `music` folder in your project
2. Add MP3 files to the folder
3. Update audio paths:

```javascript
audio: "./music/your-song.mp3"
```

### Option 3: Add New Playlists
1. Add new playlist mapping:
```javascript
const playlists = {
    // existing...
    9: "Your New Playlist"
};
```

2. Add songs with that playlist name:
```javascript
{
    title: "Song",
    artist: "Artist",
    duration: 200,
    playlist: "Your New Playlist",
    audio: "url"
}
```

3. Update HTML with new playlist card

---

## 🎨 Playlist Themes

- **Liked Songs**: Your favorites mix
- **Discover Weekly**: New music discovery
- **Release Radar**: Latest releases
- **Daily Mix 1**: Personalized mix
- **On Repeat**: Most played tracks
- **Chill Lounge**: Relaxing vibes
- **Deep Focus**: Concentration music
- **Jazz Vibes**: Smooth jazz
- **Workout Beats**: High energy

---

## ⚠️ Important Notes

### Demo Audio
- Currently uses **SoundHelix** demo tracks (royalty-free)
- Demo tracks are instrumental/electronic music
- Replace with licensed music for production use

### Licensing
- Ensure proper licensing for all music
- Do not use copyrighted music without permission
- Consider music APIs (Spotify, Apple Music, etc.) for legal streaming

### Performance
- Use compressed audio formats (MP3, AAC)
- Host audio files on CDN for better performance
- Consider lazy loading for large libraries

---

## 🚀 Future Enhancements

- [ ] Add album artwork for each song
- [ ] Display remaining songs in playlist
- [ ] Create custom playlists
- [ ] Song queue system
- [ ] Recently played history
- [ ] Search functionality
- [ ] Filter by artist/genre
- [ ] Playlist sharing
- [ ] Export/import playlists

---

**Total Playtime**: ~1 hour 30 minutes of music! 🎵
