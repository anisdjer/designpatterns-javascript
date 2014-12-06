/**
 * Created by Anis on 05/12/2014.
 */

var EnemyShip = require('./EnemyShip');
var UFOEnemyShip = require('./UFOEnemyShip');
var RocketEnemyShip = require('./RocketEnemyShip');
var TankEnemyShip = require('./TankEnemyShip');

function EnemyShipFactory() {

}

EnemyShipFactory.prototype.makeEnemyShip = function (type) {
    switch(type) {
        case 0 :
            return new UFOEnemyShip();
        case 1 :
            return new RocketEnemyShip();
        case 2 :
            return new TankEnemyShip();
        default :
            return new EnemyShip();
    }
}

var enemyShipFactory = new EnemyShipFactory();
module.exports = enemyShipFactory;