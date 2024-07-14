function setRemUnit() {  
    // Obtain the baseline width of the design draft
    const designWidth = 2600;  
    // width setting
    const maxWidth = 1800; // max width
    const minWidth = 200; // minimum width  

    // Obtain the screen width of the current device 
    const realWidth = document.documentElement.clientWidth || document.body.clientWidth;  
    // set the font size for the root element 
    // scale the font size based on the ratio of the screen width to the design draft width 
    let rem = (realWidth / designWidth) * 10; // assume the default size 10px  

     
    // rem = Math.min(Math.max(rem, minWidth / designWidth * 10), maxWidth / designWidth * 10);  

    // default font size 
    document.documentElement.style.fontSize = rem + 'px';  
}  
function clickthree(){
    let alart = document.getElementById('alart')
    alart.style.display = 'block'
}
function closealart(){
    let alart = document.getElementById('alart')
    alart.style.display = 'none'
}
// default setting 
window.onload = function(){
    setRemUnit();  
}

// event listener
window.addEventListener('resize', setRemUnit);