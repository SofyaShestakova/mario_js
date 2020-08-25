function printPyramid(height){
    for(var i = 1; i<height+1; i++){
        let content  = ' '.repeat(height-i) +'#'.repeat(i+1);
        let newElement = document.createElement("p");
        let pyramid = document.getElementById("pyramid");
        newElement.innerHTML = content;
        pyramid.appendChild(newElement);
    }
    document.getElementById("construction").remove();
}
printPyramid(5);