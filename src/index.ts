// import classes
import Truck from "./classes/Truck";
import Car from "./classes/Car";
import Motorbike from "./classes/Motorbike";
import Wheel from "./classes/Wheel";
import Cli from "./classes/Cli";

// create an array of vehicles
const vehicles: (Car | Truck | Motorbike)[] = [];

// Create a Truck instance (uncommented and completed)
const truck1 = new Truck(
  Cli.generateVin(),
  "red", // color
  "Ford", // make
  "F-150", // model
  2021, // year
  5000, // mileage
  120, // speed
  [], // wheels (we will use the default)
  10000 // towing capacity (kg)
);

// Create a Car instance
const car1 = new Car(
  Cli.generateVin(),
  "blue", // color
  "Toyota", // make
  "Camry", // model
  2021, // year
  3000, // mileage
  130, // speed
  [] // wheels (we will use the default)
);

// Create Motorbike wheels
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];

// Create a Motorbike instance
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black", // color
  "Harley Davidson", // make
  "Sportster", // model
  2021, // year
  500, // mileage
  125, // speed
  motorbike1Wheels // wheels
);

// push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
