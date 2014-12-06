/**
 * Created by Anis on 06/12/2014.
 */

var Song = require('./Song');
var SongGroup = require('./SongGroup');
var DiscJockey = require('./DiscJockey');


var industrialMusic = new SongGroup("Industrial", "is a style of experimental ...");
var heavyMetalMusic = new SongGroup("HeavyMetal", "is a genre of rock developed ...");
var dubstepMusic = new SongGroup("Dubstep", "is a genre of electronic ...");

var everySong = new SongGroup("SongList", "Every Song Available");
everySong.add(new Song("I'm born !!", "Anis", 1988));
everySong.add(industrialMusic);

industrialMusic.add(new Song("Head like a Hole", "NIN", 1990));
industrialMusic.add(new Song("Headhunter", "Front 242", 1988));

industrialMusic.add(dubstepMusic);

dubstepMusic.add(new Song("Centpede", "Knife Party", 2012));
dubstepMusic.add(new Song("Tetris", "Doctor P", 2011));

everySong.add(heavyMetalMusic);

heavyMetalMusic.add(new Song("War Pigs", "Block Sabath", 1970));
heavyMetalMusic.add(new Song("Ace of Spades", "Motorhead", 1980));

var crazyLarry = new DiscJockey(everySong);

crazyLarry.getSongList();
