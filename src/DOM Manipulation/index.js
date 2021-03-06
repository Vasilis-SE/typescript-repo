"use strict";
var _a;
var titles = [
    "Hello World",
    "Hello Typescipt",
    "Hello Javascript",
    "Hello VSCode"
];
(_a = document.getElementById('title-switcher')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var currentTitleEle = document.getElementById('page-title');
    var currentTitle = currentTitleEle.innerText;
    var currentTitleIndex = titles.indexOf(currentTitle);
    var newTitleIndex = 0;
    if (currentTitleIndex === -1)
        return;
    if (typeof titles[currentTitleIndex + 1] !== "undefined")
        newTitleIndex = currentTitleIndex + 1;
    currentTitleEle.innerText = titles[newTitleIndex];
});
