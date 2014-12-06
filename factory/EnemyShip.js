/**
 * Created by Anis on 05/12/2014.
 */


function EnemyShip () {
    this.name = "Unknowen";
    this.amtDamage = "";
}

EnemyShip.prototype.getName = function () {
    return this.name;
}
EnemyShip.prototype.getDamage = function () {
    return this.amtDamage;
}
EnemyShip.prototype.setName = function (newName) {
    this.name = newName;
}
EnemyShip.prototype.setDamage = function (newDamage) {
    this.amtDamage = newDamage;
}
EnemyShip.prototype.followShip = function () {
    console.log(this.getName() + " is following the hero");
}
EnemyShip.prototype.display = function () {
    console.log(this.getName() + " is on the screen");
}
EnemyShip.prototype.enemyShipShoots = function () {
    console.log(this.getName() + " attacks and does " + this.getDamage());
}
module.exports = EnemyShip;