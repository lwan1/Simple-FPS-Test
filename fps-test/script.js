var stop = false; // in case you want to pause the game or avoid running the game
var frameCount = 0;
var $results = $("#results"); // where values are drawn, id = results
var fps, fpsInterval, startTime, now, then, elapsed; // set multiple variables


startAnimating(60); // 60 Fotograms per second is the industry standard for videogames.

/**
 * Start animating takes care that th egame "engine" runs based on time
 * @param {integer} fps - the numbers of FPS you want to run your game at.
 */
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    runEngine();
}


/**
 * Runs the code of your game based on the.
 * @returns none if stop = true
 */
function runEngine() {

    // stop in case you want to avoid running the animation.
    if (stop) {
        return;
    }

    // request another frame

    requestAnimationFrame(runEngine);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        

        // <------- MAGIC HAPPENS HERE! put your code here :) maybe in some functions?


        // TESTING...Report #seconds since start and achieved fps. Once your code runs smoothly, you may comment this out. Maybe include a debug mode? 
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
        $results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

    }
}