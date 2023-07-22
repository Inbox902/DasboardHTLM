const cssNama = document.querySelectorAll('#TanggalReg');
for (let i = 0; i < cssNama.length; i++) {
    console.log(cssNama[i])
    // teknik dom tranvrsal (
    //     ParentNode, ParentElement, 
    //     nextElementSibling, NextSibling)
    cssNama[i].nextElementSibling.style.textAlign = 'left'
}

