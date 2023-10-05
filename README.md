# CS50W Final Project

## Overview

Final project for CS50W, a website portfolio that showcase projects and
also includes a blogpost.

### Stack

* Django-restframework
* Reactjs
* Tailwindcss

## Project structure (What’s contained in each file I created)

```
PROJECT_ROOT
├── capstone            # django application setting, etc
├── frontend            # reactjs files
├── portfolio           # django files
├── README.md           # this README file
└── requirements.txt    # dependencies (python packages)

```

## How to run the application

1. You need atleast python3 and nodejs >= 14 installed in your machine, make sure
to have ```pip``` (python package manager) and ```npm``` (javascript package manager)
installed as well. If not you can check this links on how to install
[Pip](https://pip.pypa.io/en/stable/installation/),
[Nodejs and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Install all the python dependencies, inside your terminal go to project's root
directory ```PROJECT_ROOT``` then run ```pip install -r requirements.txt```.
3. While still inside the project's root directory try to pre-populate the database,
by running the command ```python manage.py loaddata fixtures```.
4. To install javascript dependencies, I suggest to open another instance of terminal
and go to frontend's directory ```PROJECT_ROOT/frontend/``` then run ```npm install```.
5. Start the django development server, inside your terminal go to project's
root directory ```PROJECT_ROOT``` and run ```python manage.py runserver```. I suggest
to use the first terminal you opened since it probably still inside the projects
root directory.
6. Start the reactjs development server, inside your terminal go to ```PROJECT_ROOT/frontend/```
and run this command ```npm run start```, you can use the second terminal for this.
After running "npm run start" it will open your default browser automatically and
render the web application.

#### Future improvements (TODO)

* Implement authentication and use tokens
* Add new components to be able to create new post or project in the frontend
* Personalize icons/images
