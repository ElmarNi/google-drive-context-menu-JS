"use strict";

var contextMenu = document.querySelector('.context-menu');
var createNewFolder = document.querySelector('.head');
var crFolderInfo = document.querySelector('.wrapper-for-CreateFolderDiv');
var newFolder = document.createElement('div');

document.oncontextmenu = function (e) {
  e.preventDefault();
  var left = e.clientX;
  var top = e.clientY;
  document.body.offsetWidth - e.clientX < parseFloat(getComputedStyle(contextMenu).width) ? contextMenu.style.left = "".concat(document.body.offsetWidth - parseFloat(getComputedStyle(contextMenu).width) - 20, "px") : contextMenu.style.left = "".concat(left, "px");
  contextMenu.style.top = "".concat(top, "px");
  contextMenu.classList.remove("d-none");

  createNewFolder.onclick = function () {
    crFolderInfo.querySelector("input").value = "Untitled folder";
    newFolder = document.createElement('div');
    newFolder.classList.add("new-folder");
    crFolderInfo.classList.remove("d-none");
  };

  document.querySelector('.create').onclick = function () {
    crFolderInfo.classList.add("d-none");
    newFolder.innerHTML = "<i class=\"fas fa-folder\"></i> ".concat(crFolderInfo.querySelector("input").value);
    document.querySelector('.parent-for-new-folders').appendChild(newFolder);
  };

  document.querySelector('.cancel').onclick = function () {
    return crFolderInfo.classList.add("d-none");
  };
};

document.onclick = function () {
  return contextMenu.classList.add("d-none");
};