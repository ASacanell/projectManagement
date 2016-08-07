# Project Management

Project Management is a web application that will allow you to:

  - Create and track issues.
  - Set springs and milestones.
  - Assign the issues to different team members.
  - See the project status in the dashboard with a variety of widgets.

> Our goal is to help from entrepreneurs to larger companies to manage their projects offering them
> the definitive managing tool.


### Version
0.0.1

### Tech

Project Management uses a number of open source projects to work properly:

* [Angular2] - HTML enhanced for web apps!
* [Atom] - The hackable text editor
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Font Awesome] - The iconic font and CSS toolkit
* [Dillinger] - Online markdown editor

### Installation

#### Docker
First of all, you need docker in your system! [Docker](https://docs.docker.com/)

Great! then from the app root directory:
```shell
$ docker pull asacanelln/mongodb
$ docker run -v "$(pwd)":/data --name mongo -d asacanelln/mongodb mongod --smallfiles
```
```shell
$ docker pull asacanelln/nodejs
$ docker run -it --name node -v "$(pwd)":/data --link mongo:mongo -w /data -p 3000:3000 asacanelln/nodejs bash
```
#### Basic docker commands for us:
###### To start and stop docker containers:
```shell
$ docker stop mongo||node
$ docker start mongo||node
```
###### To access containers consoles:
```shell
$ docker exec -it mongo bash
$ docker exec -it node bash
```

### Usage
Once you have the docker system ready:
Access the node container console and run:
```shell
$ npm install
$ npm run bowerInstall
$ npm run start
```
And you will have your node app running and ready to rock!
Now your last step is to check if it's working, so go in your browser to:
[Localhost](http://localhost:3000/) and you have to see the app working.


### RakeFile

    Rake script Bla bla bla bla

    ## To Do:
       - Implement invoke method
       - Implement Build Task
       - Debug script


### Plugins

Work in progress!

### Development

Want to contribute? Great!

Contact us at [@ASacanellN], [@Gabi_IDontCare], [@chepkman], [@Playero99]


### Todos

 - Starting the project now

License
----
GPLv3

**Free Software**


   [git-repo-url]: <https://github.com/ASacanell/projectManagement>
   [Atom]: <https://atom.io/>
   [Dillinger]: <http://dillinger.io/>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [@asacanelln]: <https://twitter.com/ASacanellN>
   [@Gabi_IDontCare]: <https://twitter.com/Gabi_IDontCare>
   [@chepkman]: <https://twitter.com/chepkman>
   [@Playero99]: <https://twitter.com/Playero99>
   [Angular2]: <https://angular.io/>
   [Font Awesome]: <http://fontawesome.io>
