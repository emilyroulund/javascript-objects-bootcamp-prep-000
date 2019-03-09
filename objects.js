var playlist = {
  artist1: "song", 
  artist2: "song"};
  //the limitation imposed is that you can't have more than one song by the same artist
  
  function updatePlaylist (playlist, artistName, songTitle){
    playlist[artistName] = songTitle
    return playlist
  }
  //accepts three paramenters; body should add the song and artist as a key-value pair to playlist object 
  
 function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
   playlist;
 }
 //body of function should delete the key-value pair from the playlist and return the updated playlist 