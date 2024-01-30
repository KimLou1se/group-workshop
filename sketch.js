
//list of textures that can fill the grid
const textures = [];

function preload(){

//loop through the 4 textures that we have saved
for(let textureNumber = 1; textureNumber <4; textureNumber++){
//get the path of the current texture
const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png'
//load the image using the loadImage ph js function and add it to the textures list
textures.push(loadImage(pathToTexture))
}
}


function setup() {
    //size of each square
    const squareSize = 30;
    //nu,ber of cells of the grid
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber
    //maxium offset
    const maxOffsetPosition = 11;
    const maxOffsetSize = 2;

    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++){
        for(let column = 0; column < cellNumber; column++){
            const red = random(255);
            const green = random(255);
            const blue = random(255);


            const mycolor = color(red, green, blue);
            // get a random texture
            const texture = random(textures);

            //use fill to fill all the square with one color
            // fill(mycolor)

            //tint the square
            tint(mycolor)


            //calcuate random offset for position
            const randomOffsetsetHorizontal = random(-maxOffsetPosition, maxOffsetPosition);
            const randomOffsetVertical = random(-maxOffsetPosition, maxOffsetPosition)

            //CALCULATE RANDOM OFFSET FOR SIZE
            const randomOffsetwidth = random(-maxOffsetSize, maxOffsetSize)
            const randomOffsetheight = random(-maxOffsetSize, maxOffsetSize)

            //calculate horizontal position in pixles
            const x = row * squareSize + randomOffsetsetHorizontal;
            // calculate the vertical position in pixels
            const y = column * squareSize + randomOffsetVertical;

            //set width and height 
            const width = squareSize;
            const hieght = squareSize;

            //image(background x position y position width height)
            //will draw an image given background at the given position and width / height
            image(texture, x, y, squareSize, squareSize)

            // square(x, y, s)
            // x = position of the left of the square
            // y = position of the top of the square
            // s = size of the side of the square
            // square(x, y, squareSize);
        }
    }
}



  