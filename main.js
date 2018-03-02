const {app} = require('electron')
const showBrowser = require('./firstBrowser')

app.on('ready',()=>{
  showBrowser()  
})