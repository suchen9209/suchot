const {BrowserWindow} = require('electron').remote
const path = require('path')

const manageWindowBtn = document.getElementById('blur')
const focusModalBtn = document.getElementById('focus')
let win

const showFocusBtn = (btn) => {
    if(!win) return
    focusModalBtn.classList.add('emmm_focus')
    focusModalBtn.addEventListener('click',clickHandler)
}

const hideFocusBtn = () => {
    focusModalBtn.classList.remove('emmm_focus')
    focusModalBtn.removeEventListener('click',clickHandler)
}

const clickHandler = () => {
    win.focus()
}

manageWindowBtn.addEventListener('click', ()=>{
    const modalPath = path.join('file://',__dirname,'../html/blur.html')
    win = new BrowserWindow({width:500,height:300})
    win.on('focus',hideFocusBtn)
    win.on('blur',showFocusBtn)
    win.on('close', ()=>{
        hideFocusBtn()
        win = null
    })
    win.loadURL(modalPath)
    win.show()



})
