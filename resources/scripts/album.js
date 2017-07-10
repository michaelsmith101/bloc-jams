$(document).ready(function() {

$(window).load(function() {
    setCurrentAlbum(albumPicasso);

    //album click functionality
    var albums = [albumPicasso, albumMarconi, albumBabe];
    var index = 1;
    $('.album-cover-art').on('click',function(){
      setCurrentAlbum(albums[index]);
      index++;
      if(index == albums.length){
        index = 0;
      }
    });
});

//Picasso Album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: './resources/images/album_covers/01.png',
  songs: [
    {title: 'Blue', duration: '4:26'},
    {title: 'Green', duration: '3:14'},
    {title: 'Red' ,duration: '5:01'},
    {title: 'Pink' ,duration: '3:21'},
    {title: 'Magenta', duration: '2:15'}
  ]

};
//Marconi Album
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: './resources/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21'},
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15'}
  ]
};
//Example Album
var albumBabe = {
  title: 'Childish Bambino',
  artist: 'Babe Ruth',
  label: 'NYY',
  year: '1914',
  albumArtUrl: './resources/images/album_covers/19.png',
  songs: [
    { title: 'Take', duration: '1:00' },
    { title: 'Me', duration: '2:00' },
    { title: 'Out To The', duration: '3:00'},
    { title: 'Ball', duration: '4:00' },
    { title: 'Game', duration: '5:00'}
  ]
};
//create song row
var currentlyPlayingSong = null;
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    var $row = $(template);

    var clickHandler = function() {
    	var songNumber = $(this).attr('data-song-number');

    	if (currentlyPlayingSong !== null) {
    		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
    		currentlyPlayingCell.html(currentlyPlayingSong);
    	}
    	if (currentlyPlayingSong !== songNumber) {
    		$(this).html(pauseButtonTemplate);
    		currentlyPlayingSong = songNumber;
    	} else if (currentlyPlayingSong === songNumber) {
    		$(this).html(playButtonTemplate);
    		currentlyPlayingSong = null;
    	}
    };

    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };

    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
};

 //load the current albums HTML
 var setCurrentAlbum = function(album) {

   // assign values to album properties on the page
   var $albumTitle = $('.album-view-title');
   var $albumArtist = $('.album-view-artist');
   var $albumReleaseInfo = $('.album-view-release-info');
   var $albumImage = $('.album-cover-art');
   var $albumSongList = $('.album-view-song-list');

    //Put the album info into the associated property places
    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);

    // clear out the html for the song list
    $albumSongList.empty();

    // populate the song list
    for (var i = 0; i < album.songs.length; i++) {
      var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
       $albumSongList.append($newRow);
    }
};
});
