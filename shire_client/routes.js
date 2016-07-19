System.register(['@angular/router', "@angular/common", './components/home/home.component', './components/contact/contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, common_1, home_component_1, contact_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'contact', component: contact_component_1.ContactComponent }
            ];
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes),
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]);
        }
    }
});
//# sourceMappingURL=routes.js.map