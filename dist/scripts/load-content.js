'use strict';

function loadContent(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener('load', function () {
            return resolve(xhr.responseText);
        });
        xhr.addEventListener('error', function () {
            return reject(xhr.statusText);
        });
        xhr.send();
    });
}