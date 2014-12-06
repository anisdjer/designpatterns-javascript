/**
 * Created by Anis on 05/12/2014.
 */

var EnemyShip = require('./EnemyShip');

function RocketEnemyShip () {
    this.setName("Rocket EnemyShip");
    this.setDamage(10.0);
}

RocketEnemyShip.prototype = Object.create(EnemyShip.prototype);
RocketEnemyShip.prototype.constructor = RocketEnemyShip;


module.exports = RocketEnemyShip;