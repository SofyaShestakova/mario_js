function printPyramid(height){
    for(var i = 1; i<height+1; i++){
        console.log(' '.repeat(height-i) +'#'.repeat(i+1));
    }
}
printPyramid(5);