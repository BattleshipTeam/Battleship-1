 import checkGameStatus from  "./game_logic/game_instance.js";
  import takeTurn from  "./game_logic/game_instance.js";
   import checkForShip from  "./game_logic/ship_methods.js";
   import fire from  "./game_logic/ship_methods.js";
   import damageShip from  "./game_logic/ship_methods.js";
   import validateLocations from  "./game_logic/player_methods.js";
   import validateLocation from  "./game_logic/player_methods.js";

checkGameStatus();
takeTurn();
checkForShip();
fire();
damageShip();
validateLocations();
validateLocation();
