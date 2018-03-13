"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clearContent = function clearContent() {
    var currentNode = document.getElementById("info");
    while (currentNode.firstChild) {
        currentNode.removeChild(currentNode.firstChild);
    }
};

var addContent = function addContent(_el) {
    var textnode = void 0,
        node = '';
    var el = JSON.parse(_el);
    var currentNode = document.getElementById("info");
    var htmlNode = document.createElement("div");
    var renderNode = function renderNode(el) {
        Object.keys(el).map(function (key) {
            // map() is faster than forEach()
            if (_typeof(el[key]) === 'object') {
                renderNode(el[key]);
            } else {
                node = document.createElement("p");
                textnode = document.createTextNode(key + ' : ' + el[key]);
                node.appendChild(textnode);
                htmlNode.appendChild(node);
            }
        });
        currentNode.appendChild(htmlNode);
    };
    renderNode(el);
};

var getUser = function getUser(selectedUser) {
    Promise.all([loadContent('https://jsonplaceholder.typicode.com/users/' + selectedUser), loadContent('https://jsonplaceholder.typicode.com/todos/' + selectedUser)]).then(function (userInfo) {
        clearContent();
        userInfo.map(function (_el) {
            addContent(_el);
        });
    }).catch(function (error) {
        // todo error later
    });
};