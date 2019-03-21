declare var Phaser: any;

var config: object = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    fps: 30
};

let PVec2: any = Phaser.Math.Vector2;

interface Generation {
	cars: Car[];
}

interface SimulationModel {
	generations: Generation[];
	current_generation_index: number;
    population_size: number;
    layer_sizes: number[];
    world: any;
    scene: any;
}

interface Category {
    car: number,
    track: number
}

interface Mask {
    car: number,
    track: number
}

interface DestructionQueue {
    queue: Car[]
}

let sm: SimulationModel;

let game: any = new Phaser.Game(config);
let cursors: any;

const category: Category = {
    car: 0x0001,
    track: 0x0002
};

const mask: Mask = {
    car: category.track,
    track: category.car
};

let dq: DestructionQueue = {
    queue: []
};

// var ground_width = 700, ground_height = 15;
// var ball_view, car_view;

// var world, ball, ground, car_body, front_axle, rear_axle, right_sensor;

// var current_individual_index = [0, 0];
// var starting_time;