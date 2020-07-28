var playlist = {
  buffet: "Jimmy"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
  // return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
