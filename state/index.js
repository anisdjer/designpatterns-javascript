(function(log) {
    // The context
    var TrafficLight = function() {
        var count = 0;
        var states = [new Red(this), new Yellow(this), new Green(this)];
        var currentStateIndex = 0;
        var cb = function () {};

        this.change = function() {
            // limits number of changes
            if (count++ >= 10)
                return;
            currentStateIndex = (currentStateIndex + 1) % states.length;
            this.start();
            cb();
        };

        this.start = function(_cb) {
            if (_cb) {
                cb = _cb;
            }
            states[currentStateIndex] && states[currentStateIndex].go();
        };
    };

    var Red = function(light) {

        this.go = function() {
            log("Red --> for 3 seconds");
            setTimeout(light.change.bind(light), 3000);
        };
    };

    var Yellow = function(light) {

        this.go = function() {
            log("Yellow --> for 1 second");
            setTimeout(light.change.bind(light), 1000);
        };
    };

    var Green = function(light) {

        this.go = function() {
            log("Green --> for 2 seconds");
            setTimeout(light.change.bind(light), 2000);
        };
    };

    run();

    function run() {
        var light = new TrafficLight();
        light.start(log.show);
    }
}(console.log));