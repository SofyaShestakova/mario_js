function printPyramid(height){
    for(var i = 1; i<height+1; i++){
        let content  = ' '.repeat(height-i) +'#'.repeat(i+1);
        let newElement = document.createElement("p");
        newElement.innerHTML =''.repeat(height-1) + content;
        let pyramid = document.getElementById("pyramid");
        pyramid.appendChild(newElement);
    }
    document.getElementById("construction").remove();
}
printPyramid(5);