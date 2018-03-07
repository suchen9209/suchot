const gm = require('gm')
    , fs = require('fs')
const {dialog} = require('electron').remote
const imageMagick = gm.subClass({ imageMagick: true });

const editPicButton = document.getElementById('edit-pic')

editPicButton.addEventListener('click',(event)=>{
    var picurl = document.getElementById('selected-file').innerText
    dialog.showSaveDialog({},(filename)=>{
        imageMagick(picurl).font('./fonts/simhei.ttf',36).fill('#090').drawText(0,0,'12sdfsdf打中文试一下','Center')
        .write(filename,function(e){
            if(e){
                console.log(e.message)
            }else{
                console.log('done')
            }
        })
    })

})
