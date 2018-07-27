require("dotenv").config();

var keys = require("./keys");
var twitter = require("twitter");
var spotify = require("spotify");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

