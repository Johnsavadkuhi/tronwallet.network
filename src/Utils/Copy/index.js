export default  function copyText(id) {
    /* Get the text field */
    const  copyText =  document.getElementById(id);

    console.log("copyText : " , copyText);

    /* Select the text field */
    console.log(copyText.select()) ;

    /* Copy the text inside the text field */
    document.execCommand("copy");
}