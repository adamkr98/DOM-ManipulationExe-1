console.log(document.title);

document.title = "Modifying the DOM";

console.log(document.title);

// body.onload.backgroundColor = randomRGB();

window.onload = () => {
    let body = document.querySelector('body');
    let randomRGB = () => {
        var r = Math.floor(Math.random() *256);
        var g = Math.floor(Math.random() *256);
        var b = Math.floor(Math.random() *256);
    
        let RGB = (r + "," + g + "," + b);
        return RGB;
    };
    
    console.log(randomRGB());
    body.style.backgroundColor = "rgb(" + randomRGB() + ")"; 
};

let children = body.children;
let count = 0;

let showChildNodes = () => {

    for(child of children) {
        if(count === 1) {
          return child;
        }
       count++;
    }
}

console.log(showChildNodes());



