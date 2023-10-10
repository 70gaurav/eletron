const { ipcRenderer } = require("electron")

window.addEventListener('DOMContentLoaded',() => {
    console.log('loaded')

    document.getElementById('btn').addEventListener('click',() => {
        ipcRenderer.send('screenshot:capture',{})
    })

    ipcRenderer.on('screenshot:captured',(e,ImageData) => {
        document.getElementById('placeholder').src = ImageData
    })
})

