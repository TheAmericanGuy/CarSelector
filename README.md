# Vehicle Builder

## Description

The **Vehicle Builder** is a command-line application (CLI) written in TypeScript that allows users to create and select vehicles such as cars, trucks, and motorbikes. After creating or selecting a vehicle, the user can perform actions like accelerating, braking, turning, stopping, and more. The application uses the `inquirer` package for managing terminal interactions.

## Features

- **Create Vehicles**: The user can create vehicles of three types: **Car**, **Truck**, and **Motorbike**.
- **Select an Existing Vehicle**: The user can select a previously created vehicle to perform actions on.
- **Available Actions**:
  - Print vehicle details.
  - Accelerate the vehicle.
  - Decelerate (brake) the vehicle.
  - Turn the vehicle (right or left).
  - Stop the vehicle.
  - Reverse the vehicle.
- **Interactive Interface**: The app uses the `inquirer` package to create an interactive terminal interface.

## Technologies Used

- **TypeScript**: The language used to develop the application.
- **ts-node**: A tool that allows running TypeScript files directly without needing to compile them to JavaScript first.
- **inquirer**: A package that facilitates creating interactive command-line interfaces.

## Installation

To run the project locally, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/repository-name.git

2. **Install Dependencies**:


   ```bash
   cd repository-name
   npm install

3. **Run The Application**:

   ```bash
   npx ts-node src/index.ts

4. **Using The Application**:
- Upon Starting, you will be prompted to either **Create a new vehicle** or **Select an existing vehicle**

- If you choose to create a new vehicle, the app will guide you to select the type of vehicle and input details like color, model, year and more.

- After creating or selecting a vehicle, you can perform various actions on it.

## Contributing
Contributions are welcome! If you find a bug or have a suggestion for improvement, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.