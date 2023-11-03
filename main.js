// Initialize Phaser
const gameConfig = {
    type: Phaser.AUTO,
    width: 800, // Adjust the width as needed for your game
    height: 600, // Adjust the height as needed for your game
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(gameConfig);

let player;

function preload() {
    // Preload game assets
    this.load.image('background', 'assets/Img1.jpg');
    this.load.image('player', 'assets/Img2.jpg');
}

function create() {
    // Create game objects
    this.add.image(400, 300, 'background'); // Display the background image
    player = this.physics.add.sprite(400, 300, 'player'); // Create a player sprite

    // Set up physics, input, or any other game logic you need
}

function update() {
    // Implement game logic and behavior in the update function
}