const {BrowserWindow} = require('electron').remote
const newWindowBtn = document.getElementById('frameless')

const path = require('path')

newWindowBtn.addEventListener('click', (event)=> {
    const mpath = path.join('file://',__dirname,'../html/blur.html');
    let win = new BrowserWindow({
        transparent: true,
        frame: false
    })
    win.on('close', ()=>{ win = null })
    win.loadURL(mpath)
    win.show()
})
