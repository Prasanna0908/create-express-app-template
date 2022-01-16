# Starter files for Express Projects

Automating the process of connecting mongoDB,setting up the server and the commonly used folder structure with one command

## Installation

Step 1: Install my-project with npm (If your installing the module for the first time ):

```bash
  npm i create-express-app-template@latest -g
```

```bash
  npx create-express-app-template@latest project_name
```

If you have already installed the module then directly use npx command-

```bash
  npx create-express-app-template@latest project_name
```

Step 2: Select the frontend Framework (optional) :

![Capture2](https://user-images.githubusercontent.com/65851817/149654262-55c7eb19-0586-4da7-9ca6-73facf9c5ad0.PNG)

Step3 :
a) Folder Structure if you opt for React Framework

![Capture6](https://user-images.githubusercontent.com/65851817/149654587-e54db9f7-dbed-4875-ba6c-0c91ca310111.PNG)

Inside of client folder you have you the same folder structure as of npx create-react-app

b) If you do not opt for React

![Capture4](https://user-images.githubusercontent.com/65851817/149654456-455b42f6-76e0-493c-b81c-919246faeaf9.PNG)

Step 4 : In config/config.env file set up the MongoDB connection string

Step 5 : Navigate into the folder

```bash
  cd project_name
```

Step 6: Run the server

```bash
  npm start
```
