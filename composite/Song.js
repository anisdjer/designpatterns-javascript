/**
 * Created by Anis on 07/12/2014.
 */

var SongComponent = require('./SongComponent');

function Song(songName, bandName, releaseYear) {

    this.songName = songName;
    this.bandName = bandName;
    this.releaseYear = releaseYear;

}

Song.prototype = Object.create(SongComponent.prototype);
Song.prototype.constructor = Song;

Song.prototype.getSongName = function () {
    return this.songName;
}
Song.prototype.getBandName = function () {
    return this.bandName;
}
Song.prototype.getReleaseYear = function () {
    return this.releaseYear;
}

Song.prototype.getName = function () {
    return this.getSongName();
}

Song.prototype.displayInfo = function () {
    console.log(this.getName() + " " + " was recorded by " + this.getBandName() + " in " + this.getReleaseYear());
}

module.exports = Song;