
export default  function downloadTxtFile(fileName) {
    let element = document.createElement("a");
    let file = new Blob([document.getElementById('keyStoreFile').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = fileName + '.txt';
    element.click();
}