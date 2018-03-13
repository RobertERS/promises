'use strict';

var jsGetUser = document.getElementsByClassName('js-get-user');
jsGetUser[0].addEventListener("click", function () {
    var selectedUser = document.getElementById('selectUser').value;
    getUser(selectedUser);
});