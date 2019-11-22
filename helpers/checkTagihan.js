'use strict'


const crypto = require('crypto');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function checkTagihan(jenis, idPelanggan) {
    const xhr = new XMLHttpRequest();

    var path = "https://mobilepulsa.net/api/v1/bill/check";
    var usernameTxt = "085217322724";
    var passwordTxt = "7315db8e40e52327731";
    var refIdTxt = (new Date).getTime();
    var codeTxt = jenis.toUpperCase();
    var signTxt = crypto.createHash('md5').update((usernameTxt + passwordTxt + refIdTxt)).digest('hex');
    var monthTxt = 1;

    var doc = `{
        "commands"   : "inq-pasca",
        "username"   : "085217322724",
        "code"       : "` + codeTxt + `",
        "ref_id"     : "` + refIdTxt + `",
        "hp"         : "` + idPelanggan + `",
        "sign"       : "` + signTxt + `",
        "month"       : "` + monthTxt + `"
    }`;
    let dataResponse
    // var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
            // Request finished. Do processing here.
            console.log(JSON.parse(xhr.responseText))
        }
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log(JSON.parse(xhr.responseText) )

        } else {
            console.error(xhr.responseText);
        }
    }
    xhr.send(doc);
}




console.log(checkTagihan('BPJS', '0001431556931'))

module.exports = checkTagihan;