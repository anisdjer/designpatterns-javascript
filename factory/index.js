/**
 * Created by Anis on 05/12/2014.
 */

var enemyShipFactory = require('./EnemyShipFactory');

var ufoEnemyShip = enemyShipFactory.makeEnemyShip(0);
var rocketEnemyShip = enemyShipFactory.makeEnemyShip(1);
var tankEnemyShip = enemyShipFactory.makeEnemyShip(2);

for(var i = 0; i < 20; i ++) {
    (function(i) {
        setTimeout(function() {
            var enemyShip = enemyShipFactory.makeEnemyShip(Math.floor(Math.random() * 10)%3);
            enemyShip.display();
            enemyShip.followShip();
            enemyShip.enemyShipShoots();
        }, i * 1000);
    }(i));
}
