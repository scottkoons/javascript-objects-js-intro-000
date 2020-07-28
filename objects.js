var playlist = {
  buffet: "Jimmy"
};


// function updatePlaylist(playlist, artistName, songTitle) {
//      return playlist = Object.assign({}, playlist, { [artistName]: songTitle });
// }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
