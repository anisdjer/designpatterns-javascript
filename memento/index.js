/**
 * Created by Anis on 05/12/2014.
 */

var CareTaker = require('./CareTaker');


var careTaker = new CareTaker();

careTaker.save("First attempt");

careTaker.save("Second attempt");

careTaker.save("Third attempt");

careTaker.undo();
careTaker.undo();
careTaker.undo();
careTaker.save("Fourth attempt");
careTaker.save("Fifth attempt");
careTaker.undo();
