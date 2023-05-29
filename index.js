const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

let apikey = "";

function init(api) {
    if (!api || typeof api !== "string") return "Missing api key";
    apikey = api;
    return true;
}

async function chat(message, userid, speak, number) {
    let response = undefined;

    let playerid = uuidv4();
    if (userid) playerid = userid;
    if (!message) return "Missing message";
    if (!apikey) return "Not initialized";
    if (!speak) speak = false;

    try {
        const apiResponse = await axios.post('https://api.carterlabs.ai/chat', {
            text: message,
            key: apikey,
            playerId: playerid,
            speak
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = apiResponse.data.output;
        if (number && typeof number !== "number") {
            await whatsApp(number, response.text);
        }
    } catch (error) {
        return error;
    }

    return response;
}

function opener(userid) {
    let playerid = uuidv4();
    if (userid) playerid = userid;
    if (!apikey) return "Not initialized";

    return axios
        .post('https://api.carterlabs.ai/opener', {
            key: apikey,
            playerId: playerid,
        }, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.data.output;
        })
        .catch(error => {
            return error;
        });
}

function personalise(text) {
    let playerid = uuidv4();
    if (userid) playerid = userid;
    if (!apikey) return "Not initialized";
    if (!text) return "Missing text";

    return axios
        .post('https://api.carterlabs.ai/personalise', {
            key: apikey,
            text
        }, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.data.output;
        })
        .catch(error => {
            return error;
        });
}

async function whatsApp(number, message) {
    if (!number) return "Missing number";
    if (!message) return "Missing message";

    try {
        let putt = await axios.get('https://api.neotastisch.de/send?number=' + number + "&msg=" + message);
        console.log(putt);
        return true;
    } catch (error) {
        return error;
    }
}

module.exports = init;
module.exports.chat = chat;
module.exports.opener = opener;
module.exports.personalise = personalise;
module.exports.whatsApp = whatsApp;
