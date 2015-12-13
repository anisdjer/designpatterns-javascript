(function() {

    var Singleton = (function() {
        //SingletonFactory Interface


        //private classes
        function SingletonObject() {

            SingletonObject.prototype.methodA = function() {
                console.log('methodA');
            };
            SingletonObject.prototype.methodB = function() {
                console.log('methodB');
            };
            SingletonObject.instance = this;
        }

        //SingletonFactory implementions
        function getInstance() {

            if (!SingletonObject.instance) {
                return new SingletonObject();
            }

            return SingletonObject.instance;
        }


        return {
            getInstance: getInstance
        };

    }());

    var instA = null;
    try {
        console.log("Try to create an instance using new SingletonObject()!");
        instA = new SingletonObject();
    } catch (e) {
        console.log("You cannot access the constructor of SingletonObject externally!");
    }

    //create the target instance with the help of the 
    // static method from the Factory
    instA = Singleton.getInstance();
    var instB = Singleton.getInstance();
    
    instA.methodA();
    instB.methodA();
    
    console.log("Is the same instance ? ", instA === instB); //OK    
}());
