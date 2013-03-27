/*
 * levelThree.js
 *
 * This is the third level of this game! Are
 * you having fun so far? I sure hope so!
 * It would be really sad to put a lot of effort
 * into making a game and then having that game
 * suck :(
 */
function startLevel(map) {

    map.placePlayer(7, 5);

    var autoGeneratedMaze = new ROT.Map.DividedMaze(map.getWidth(), map.getHeight());
#BEGIN_EDITABLE#

#END_EDITABLE#
    autoGeneratedMaze.create( function (x, y, mapValue) {

        // don't write maze over player
        if (map.getPlayer().atLocation(x,y)) {
            return 0;
        }

        else if (mapValue === 1) { //0 is empty space 1 is wall
            map.placeObject(x,y, 'block');
        }
        else {
            map.placeObject(x,y,'empty');
        }
    });
#BEGIN_EDITABLE#

#END_EDITABLE#
    map.placeObject(map.getWidth()-5, map.getHeight()-4, 'exit');
}
