/**
 * Created by Anis on 07/12/2014.
 */

function DiscJockey(songList) {
    this.songList = songList;
}

DiscJockey.prototype.getSongList = function () {
    this.songList.displayInfo(0);
}

module.exports = DiscJockey;