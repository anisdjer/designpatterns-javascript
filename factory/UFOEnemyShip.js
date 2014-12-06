/**
 * Created by Anis on 05/12/2014.
 */

var EnemyShip = require('./EnemyShip');

function UFOEnemyShip () {
    this.setName("UFO EnemyShip");
    this.setDamage(22.0);
}

UFOEnemyShip.prototype = EnemyShip.prototype;
UFOEnemyShip.prototype.constructor = UFOEnemyShip;


module.exports = UFOEnemyShip;