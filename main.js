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
let zombies;

function preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('zombie', 'assets/zombie.png');
}

function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    zombies = this.physics.add.group();

    for (let i = 0; i < 5; i++) {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);
        const zombie = zombies.create(x, y, 'zombie');
    }
}

function update() {
    // Zombie chasing logic
    zombies.getChildren().forEach((zombie) => {
        const dx = player.x - zombie.x;
        const dy = player.y - zombie.y;
        const angle = Math.atan2(dy, dx);
        const speed = 2;
        const vx = speed * Math.cos(angle);
        const vy = speed * Math.sin(angle);
        zombie.setVelocity(vx, vy);
    });

    // Player control (touch input)
    if (this.input.activePointer.isDown) {
        player.x = this.input.x;
        player.y = this.input.y;
    }
}
