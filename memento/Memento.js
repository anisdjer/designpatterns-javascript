/**
 * Created by Anis on 05/12/2014.
 */

function Memento(newArticle) {
    this.article = newArticle;
}

Memento.prototype.getSavedArticle = function () {
    return this.article;
}

module.exports = Memento;