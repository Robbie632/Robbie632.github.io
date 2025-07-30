document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseButton = document.getElementById("playPauseButton");
  const progressBar = document.getElementById("progressBar");
  const currentTimeSpan = document.getElementById("currentTime");
  const totalDurationSpan = document.getElementById("totalDuration");
  const volumeBar = document.getElementById("volumeBar");
  const muteButton = document.getElementById("muteButton");
  const trackTitle = document.getElementById("trackTitle");

  let isPlaying = false;
  let currentVolume = audioPlayer.volume; // To store volume before muting

  // --- Music Data (you can expand this for multiple tracks) ---
  const playlist = [
    {
      title: "Summer Vibes",
      artist: "Unknown Artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Make sure this path is correct
    },
    {
      title: "Chillout Track",
      artist: "Relaxing Sounds",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Make sure this path is correct
    },
  ];
  let currentTrackIndex = 0;

  function loadTrack(index) {
    const track = playlist[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = `${track.title} - ${track.artist}`;
    audioPlayer.load(); // Load the new track
    // If music was playing, start playing the new track
    if (isPlaying) {
      audioPlayer.play();
    }
  }

  // Load the first track when the page loads
  loadTrack(currentTrackIndex);

  // --- Play/Pause Toggle ---
  document.addEventListener("click", (e) => {
    if (e.target.id == "playPauseButton") {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.textContent = "▶";
      } else {
        audioPlayer.play();
        playPauseButton.textContent = "⏸";
      }
      isPlaying = !isPlaying;
    }
  });

  // --- Previous Track ---
  document.addEventListener("click", (e) => {
    if (e.target.id == "prevButton") {
      currentTrackIndex =
        (currentTrackIndex - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrackIndex);
    }
  });

  // --- Next Track ---
  document.addEventListener("click", (e) => {
    if (e.target.id == "nextButton") {
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex);
      a;
    }
  });

  // --- Update Progress Bar & Time ---
    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
    
        if (isNaN(duration)) {
          progressBar.value = 0;
            currentTimeSpan.textContent = '0:00';
            totalDurationSpan.textContent = '0:00';
        } else {
          progressBar.value = (currentTime / duration) * 100;
          currentTimeSpan.textContent = formatTime(currentTime);
          totalDurationSpan.textContent = formatTime(duration);
    }
  });

  // --- Set Progress Bar (Seek) ---
  progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  });

  // --- Volume Control ---
  volumeBar.addEventListener("input", (e) => {
    if (e.target.id == "volumeBar") {
      audioPlayer.volume = volumeBar.value / 100;
      currentVolume = audioPlayer.volume; // Update currentVolume
      if (audioPlayer.volume === 0) {
        muteButton.textContent = "🔇";
      } else {
        muteButton.textContent = "🔊";
      }
    }
  });

  // --- Mute/Unmute ---
  document.addEventListener("click", (e) => {
    if (e.target.id == "muteButton") {
      if (audioPlayer.volume === 0) {
        audioPlayer.volume = currentVolume > 0 ? currentVolume : 0.5; // Restore previous volume or set to 0.5 if it was 0
        volumeBar.value = audioPlayer.volume * 100;
        muteButton.textContent = "🔊";
      } else {
        currentVolume = audioPlayer.volume; // Save current volume before muting
        audioPlayer.volume = 0;
        volumeBar.value = 0;
        muteButton.textContent = "🔇";
      }
    }
  });

  // --- When music ends, reset play/pause button and progress bar ---
  audioPlayer.addEventListener("ended", () => {
    playPauseButton.textContent = "▶";
    isPlaying = false;
    progressBar.value = 0;
    currentTimeSpan.textContent = "0:00";
    // Optionally, play the next track
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
  });

  // --- Helper function to format time (e.g., 150 seconds -> 2:30) ---
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }
});
