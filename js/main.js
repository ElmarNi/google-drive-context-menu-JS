"use strict";
const contextMenu = document.querySelector('.context-menu');
const createNewFolder = document.querySelector('.head');
const crFolderInfo = document.querySelector('.wrapper-for-CreateFolderDiv');
let newFolder = document.createElement('div');
document.oncontextmenu = function(e){
    e.preventDefault()
    let left = e.clientX;
    let top = e.clientY;
    document.body.offsetWidth - e.clientX < parseFloat(getComputedStyle(contextMenu).width)?
            contextMenu.style.left = `${(document.body.offsetWidth - parseFloat(getComputedStyle(contextMenu).width)-20)}px`:
            contextMenu.style.left = `${left}px`;  
        contextMenu.style.top = `${top}px`;
        contextMenu.classList.remove("d-none");
    createNewFolder.onclick = function(){
        crFolderInfo.querySelector("input").value = "Untitled folder"
        newFolder = document.createElement('div')
        newFolder.classList.add("new-folder");
        crFolderInfo.classList.remove("d-none");
    }
    document.querySelector('.create').onclick = function(){
        crFolderInfo.classList.add("d-none");
        newFolder.innerHTML = `<i class="fas fa-folder"></i> ${crFolderInfo.querySelector("input").value}`
        document.querySelector('.parent-for-new-folders').appendChild(newFolder)
    }
    document.querySelector('.cancel').onclick = ()=>crFolderInfo.classList.add("d-none")
}
document.onclick = ()=>contextMenu.classList.add("d-none")