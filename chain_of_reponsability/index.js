(function (log) {
    function color(subject) {
        log(subject + " is red");
    }
    function price(subject) {
        log(subject + " is cheap");
    }
    function feeling(subject) {
        log(subject + " is nice");
    }
    
    function logger(level, subject) {
        switch (level) {
            case 0 :
                color(subject);
            case 1 :
                price(subject);
            case 2 :
                feeling(subject);
                break;
            default : 
                log("I can't handle " + subject);
        }
    }
    
    run();
    
    function run() {
        logger(0, "tomato");
        logger(1, "pizza");
        logger(2, "Paris");
        logger(3, "Disaster");
    }
}(console.log));