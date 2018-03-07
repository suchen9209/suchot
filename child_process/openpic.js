const {ipcRenderer} = require('electron')
const {dialog} = require('electron').remote

const selectDriBtn = document.getElementById('select-pic')

selectDriBtn.addEventListener('click', (event)=>{
    dialog.showOpenDialog({
        properties:['openFile']
      },(files)=>{
        if(files){
            document.getElementById('selected-file').innerHTML=`${files}`
        }
      })
})
