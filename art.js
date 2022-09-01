console.log("Hello World");

let art1 = document.getElementById("artwork1");
let art2 = document.getElementById("artwork2");
let art3 = document.getElementById("artwork3");
let art4 = document.getElementById("artwork4");
let art5 = document.getElementById("artwork5");
let art6 = document.getElementById("artwork6");
let art7 = document.getElementById("artwork7");
let art8 = document.getElementById("artwork8");
let art9 = document.getElementById("artwork9");

let div; 
let div2;

// Artwork1
for (let i = 100; i < 300; i+=20) {  
    div = document.createElement('div');
    div.style.width = `${i}px`;    
    div.style.height = `${i}px`;
    div.classList.add('box');
    art1.appendChild(div);    
}

// Artwork2
for (let i = 0; i < 90; i+=10) {  
    div = document.createElement('div');
    div.style.transform = `rotate(${i}deg)`;
    div.classList.add('box');
    art2.appendChild(div);    
}

// Artwork3
for (let i = 0; i < 200; i+=10) {  
    div = document.createElement('div');
    div.style.width = `${i}px`;    
    div.style.height = `${i}px`;
    div.classList.add('circle');
    art3.appendChild(div);    
}

// Artwork4
for (let i = -90; i < 90; i+=20) {  
    div = document.createElement('div');
    div.style.transform = `translate(${i}px,${i}px)`;
    div.classList.add('box');
    art4.appendChild(div);    
}

// Artwork5
for (let i = 1; i < 512; i*=2) {  
    div = document.createElement('div');
    div.style.width = `${i}px`;    
    div.style.height = `${i}px`;
    div.classList.add('circle');
    art5.appendChild(div);    
}

// Artwork6
for (let i = -20; i < 45; i+=5) {  
    div = document.createElement('div');

    // Works:
    // div.setAttribute(
    //     "style", "transform: translate("+(i-50)+"px) rotate("+(i*4)+"deg);");

    // Not working, second transform overrides the first:
    // div.style.transform += `translate(${i}-50px)`;
    // div.style.transform += `rotate(${i*4}deg`;

    // New method CSS Transforms Module Level 2
    div.style.translate = `${i-50}px`;
    div.style.rotate = `${i*4}deg`;

    div.classList.add('circle');
    art6.appendChild(div);    
}

// Artwork7
for (let i = 0; i < 200; i+=10) {  
    div = document.createElement('div');
    div.style.width = `${i}px`;    
    div.style.height = `${i}px`;
    div.style.translate = `${i}px ${-i/2}px`;
    div.classList.add('circle');
    art7.appendChild(div);    
}

// Artwork8
for (let i = 50; i < 200; i+=10) {  
    div = document.createElement('div');
    div.style.width = `${i}px`;    
    div.style.height = `${i}px`;
    div.style.translate = `${i/2}px`;
    div.style.rotate = `${i}deg`;

    div.classList.add('box');
    art8.appendChild(div);    
}

// Artwork9
for (let i = 50; i < 200; i+=30) {  
    div = document.createElement('div');
    div2 = document.createElement('div');
    div.style.width = `${i+4}px`;    
    div.style.height = `${i+4}px`;
    div2.style.width = `${i}px`;    
    div2.style.height = `${i}px`;

    div.classList.add('box');
    div2.classList.add('circle');
    art9.appendChild(div);
    div.appendChild(div2);
}