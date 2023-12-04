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
├── backend             # api, django files
├── frontend            # reactjs files
├── README.md           # this README file
└── requirements.txt    # dependencies (python packages)
```

## How to run the application
1. Install python packages and javascript packages dependencies.
2. ```make runserver``` command to start backend(api) server
3. ```make npm-start``` command to start frontend server
NOTE: You can load initial posts and projects data by running ```make load-fixtures```.

#### Future improvements (TODO)

* Implement authentication and use tokens
* Add new components to be able to create new post or project in the frontend
* Personalize icons/images
