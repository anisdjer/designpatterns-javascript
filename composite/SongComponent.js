/**
 * Created by Anis on 06/12/2014.
 */
/**
 * This should be an abstract class.
 *
 */
function SongComponent() {

}

SongComponent.prototype.add = function (songComponent) {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.getComponent = function (songComponentIndex) {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.remove = function (songComponent) {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.getName = function () {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.getBandName = function () {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.getReleaseYear = function () {
    throw "UnsupportedOperationException";
}

SongComponent.prototype.displayInfo = function () {
    throw "UnsupportedOperationException";
}

module.exports = SongComponent;