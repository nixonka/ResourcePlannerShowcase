"use strict";
var router_1 = require('@angular/router');
var team_component_1 = require('./team/team.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/team',
        pathMatch: 'full'
    },
    {
        path: 'team',
        component: team_component_1.TeamComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map