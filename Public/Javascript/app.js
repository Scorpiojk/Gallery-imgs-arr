const img_data = document.getElementById('image');
const nextImgBTN = document.getElementById('next');
const prevImgBTN = document.getElementById('prev');

let img_array = [
    `./Public/Assets/Imgs/4-800x500.jpg`,
    `./Public/Assets/Imgs/10-800x500.jpg`,
    `./Public/Assets/Imgs/15-800x500.jpg`,
    `./Public/Assets/Imgs/45-800x500.jpg`,
    `./Public/Assets/Imgs/50-800x500.jpg`,
    `./Public/Assets/Imgs/75-800x500.jpg`
]

img_data.src = img_array[0];
let i = 0;

nextImgBTN.addEventListener('click' , () => {
    
        i++;
        if(i === img_array.length) {
            i = 0;
            img_data.src = img_array[0];
        } else {
            img_data.src = img_array[i];
        }

});

prevImgBTN.addEventListener('click' , () => {
    
    if(i === 0) {
        i = 5;
        img_data.src = img_array[5];
    } else {
        i--;
        img_data.src = img_array[i];
    }

});