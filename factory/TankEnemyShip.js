/**
 * Created by Anis on 05/12/2014.
 */

var EnemyShip = require('./EnemyShip');

function TankEnemyShip () {
    this.setName("Tank EnemyShip");
    this.setDamage(10.0);
}

TankEnemyShip.prototype = EnemyShip.prototype;
TankEnemyShip.prototype.constructor = TankEnemyShip;


module.exports = TankEnemyShip;