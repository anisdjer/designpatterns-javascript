/**
 * Created by Anis on 05/12/2014.
 */

var Originator = require('./Originator');

var originator = new Originator();

function CareTaker() {
    this.savedArticles = [];
    this.currentArticleIndex = -1;
}
CareTaker.prototype.addMemento = function (m) {
    this.currentArticleIndex ++;
    this.savedArticles[this.currentArticleIndex] = m;
    this.savedArticles.length = this.currentArticleIndex + 1;
}
CareTaker.prototype.getMemento = function (index) {
    return this.savedArticles[index];
}
CareTaker.prototype.getSavedArticles = function () {
    return this.savedArticles.length;
}

CareTaker.prototype.getCurrentArticleIndex = function () {
    return this.currentArticleIndex;
}
CareTaker.prototype.getCurrentMemento = function () {
    return this.savedArticles[this.currentArticleIndex];
}





CareTaker.prototype.save = function (article) {
    originator.set(article);

    this.addMemento(originator.storeInMemento());

    console.log("Save files : " + this.getSavedArticles());
}

CareTaker.prototype.undo = function () {
    if(this.currentArticleIndex >=1) {
        this.currentArticleIndex --;
        var article = originator.restoreFromMemento(this.getCurrentMemento());
        console.log(this.currentArticleIndex)
        console.log("Undo");
        console.log(article);
    }
}

module.exports = CareTaker;