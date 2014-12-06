/**
 * Created by Anis on 05/12/2014.
 */

var Memento = require('./Memento');

function Originator() {
    this.article;
}

Originator.prototype.set = function (newArticle) {
    console.log("\nFrom Originator: Current version of Article\n" + newArticle + "\n");
    this.article = newArticle;
}
Originator.prototype.storeInMemento = function () {
    console.log("\nFrom Originator: Saving to Memento\n");
    return new Memento(this.article);
}
Originator.prototype.restoreFromMemento = function (memento) {
    this.article = memento.getSavedArticle();
    console.log("\nFrom Originator: Previous article saved in Memento\n" + this.article + "\n");
    return this.article;
}
module.exports = Originator;