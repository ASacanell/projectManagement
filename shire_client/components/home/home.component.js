System.register(["@angular/core", 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "home",
                        template: "<div class=\"ui container\">\n\t\t\t<sm-segment class=\"raised\">\n\t\t\t\t<h1>Landpage</h1>\n\t\t\t\t<sm-list class=\"ui list bulleted\">\n\t\t\t\t\t<sm-item class=\"item\">username: nodeepshit</sm-item>\t\t\t\t\n\t\t\t\t\t<sm-item class=\"item\">password: password123</sm-item>\n\t\t\t\t</sm-list>\n\t\t\t\t<p>\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue tortor, dictum quis accumsan sed, ultrices non nisi. Fusce convallis libero risus, nec rutrum enim tristique sit amet. Mauris rutrum justo eu tristique accumsan. Fusce porta interdum ultrices. Vivamus eu sodales quam. Suspendisse dapibus velit neque, nec mollis massa mattis a. Ut a hendrerit lacus. Maecenas tempus pulvinar finibus. Curabitur maximus sed eros in condimentum.  \n\t\t\t\t</p>\n\t\t\t</sm-segment>\n\t\t\t<br/>\n\t\t</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map