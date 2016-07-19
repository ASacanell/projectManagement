import { Component, Inject } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: 
        `<div class="ui container">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">ProjectManager</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Dashboard</a></li>
                        <li><a href="#">Thing1</a></li>
                        <li><a href="#">Thing2</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
            <div class="center">
                <img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
            </div>
            <router-outlet></router-outlet>
        </div>`
        /*`<div class="ui container">
            <nav class="navbar navbar-inverse visible-xs>
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">           
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" href="#">ProjectManager</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Dashboard</a></li>
                            <li><a href="#">Age</a></li>
                            <li><a href="#">Gender</a></li>
                            <li><a href="#">Geo</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>`*/
    // CAREFUL: templateUrl doesn't work appropriately
    // templateUrl: 'shire_client/views/app.view.html'
})

export class AppComponent {}