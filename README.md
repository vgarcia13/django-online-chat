# Real-time Django Online Chat

A simple chat project, with Django and Docker. Designed and developed by [Victor H. García](https://www.linkedin.com/in/victor-hugo-garcia-202b1b99/)

## Features

- Real-time multi-browser chat room
- Completely responsive (desktop, tablet, cellphone)

## Usage

- Just set your username to start chatting!

## Requirements

The following must be installed to run this application:

- GIT
- Docker

## Installation

To use this project, follow these steps:

- Create your working environment (`virtualenv or pipenv`) with Python 3.6 and above
- Start your virtual environment with `source venv/bin/activate`
- Clone the repository
```
    $ git clone https://github.com/vgarcia13/django-online-chat.git`
```
- Inside project's folder, run `pip install -r requirements.txt` to install application's required libraries
- Run `python manage.py migrate`
- Run afterwards `docker-compose build` at the project's root
- Finally, run `docker-compose up` at the project root
- Open [http://0.0.0.0:8000/](http://0.0.0.0:8000/) in your browser to start chatting!

## Examples of use

- [Desktop Example](https://drive.google.com/open?id=1asjTYAUx4ZfhyxIIY4R-z43eH6ZMwIBl)
- [Tablet Example](https://drive.google.com/open?id=1OY_qltPFa7xUrnvfcNRdVpz5rXLo8MX1)
- [Mobile Example](https://drive.google.com/open?id=1XB40xq7lV6fiFpXYP0CBkrHlLEUSc71b)

    