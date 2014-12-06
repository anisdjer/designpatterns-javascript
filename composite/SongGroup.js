/**
 * Created by Anis on 06/12/2014.
 */

var SongComponent = require('./SongComponent');

function SongGroup(groupName, groupDescription) {

    this.songComponents = [];
    this.groupName = groupName ||"";
    this.groupDescription = groupDescription ||"";

}

SongGroup.prototype = Object.create(SongComponent.prototype);
SongGroup.prototype.constructor = SongGroup;

SongGroup.prototype.getGroupName = function () {
    return this.groupName;
}

SongGroup.prototype.getGroupDescription = function () {
    return this.groupDescription;
}

SongGroup.prototype.add = function (songComponent) {
    this.songComponents.push(songComponent);
}

SongGroup.prototype.getComponent = function (songComponentIndex) {
    return this.songComponents[songComponentIndex];
}

SongGroup.prototype.remove = function (songComponent) {
    this.songComponents = this.songComponents.filter(function(song) {
        return song.getName() !== songComponent.getName();
    });
}

SongGroup.prototype.getName = function () {
    return this.getGroupName();
}

SongGroup.prototype.displayInfo = function () {
    console.log("\n" + this.getName() + " " + this.getGroupDescription() + "\n");

    for(var i = 0, l = this.songComponents.length; i < l; i += 1) {
        this.songComponents[i].displayInfo();
    }
}
module.exports = SongGroup;