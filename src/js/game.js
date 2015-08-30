"use strict";

var $ = {};

$.width = 600;
$.height = 600;

$.colors = {
    yellow: 'rgba(255, 255, 155, 1)',
    orange: 'rgba(255, 77, 77, 1)',
    pink: 'rgba(255, 128, 255, 1)',
    green: 'rgba(129, 255, 226, 1)',
    blue: 'rgba(94, 0, 244, 1)'
};

$.entities = [];

$.init = function () {
    $.canvas = document.getElementsByTagName('canvas')[0];
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    $.ctx = $.canvas.getContext('2d');

    $.generateRandomObjects();

    $.loop();
};

$.loop = function () {
    $.render();
    $.update();

    window.requestAnimFrame($.loop);
};

$.update = function () {
    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].update();    
    }
};

$.render = function () {
    $.Draw.clear();

    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].render();    
    }
};

$.generateRandomObjects = function () {
    $.entities = [];

    for (var i = 0; i < 50; i++) {
        $.entities.push(new $.RandomObj());
    }
};

window.addEventListener('load', $.init, false);
window.addEventListener('click', $.generateRandomObjects);
