var images = [
    "./style/images/art/slider2-2.jpg",
    "./style/images/art/slider2-3.jpg",
    "./style/images/art/slider2-4.jpg",
    "./style/images/art/slider2-5.jpg",
    "./style/images/art/slider2-6.jpg",
    "./style/images/art/slider2-7.jpg",
    "./style/images/art/slider2-8.jpg",
    "./style/images/art/slider2-9.jpg",
    "./style/images/art/slider2-10.jpg",
    "./style/images/art/slider2-11.jpg",
    "./style/images/art/slider2-12.jpg",
    "./style/images/art/slider2-13.jpg",
    "./style/images/art/slider2-14.jpg",
    "./style/images/art/slider2-15.jpg",
    "./style/images/art/slider2-16.jpg",
    "./style/images/art/slider2-17.jpg",
    "./style/images/art/slider2-18.png"
];

var fader = new Fader(8000, 1.5, images);
fader.start();

fadeText('fader-text');