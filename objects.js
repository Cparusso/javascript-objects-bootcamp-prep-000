const playlist = {Radiohead: 'Creep'};

function updatePlaylist(playlist, artist, song) {
  return playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist, song) {
  return delete playlist[artist];
}
