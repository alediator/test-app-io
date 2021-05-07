"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = require("./smartvideo/app");
const routes_1 = require("./routes/routes");
const heartbeat_1 = require("./monitoring/heartbeat");
// Really the smartvideo io app
const app = new app_1.SmartVideo().getApp();
exports.app = app;
// Root head
const heartbeat = new heartbeat_1.HeartBeat(app, '/');
heartbeat.getRoute();
// Static routes to serve public and assets folders. TODO: Remove when not needed
const route = new routes_1.Routes(app);
route.getRoutes();
//# sourceMappingURL=server.js.map