module.exports = function() {

async function BroadCast() {

    try {

        var logger = require('./logger');

            var axios = require('axios');

                var { data } =  await axios.get("https://raw.githubusercontent.com/Mrchandu7/chandv2/main/cast.json");

            var random = await data[Math.floor(Math.random() * data.length)] || "Thank You For Using API of Chand tricker";

        logger(random, "[ ANUP - YOGESH ]");

    }	

    catch (e) {

        console.log(e);

        return;

    }

}

setInterval(async function () { await BroadCast() },1800 * 1000);

BroadCast();



}
