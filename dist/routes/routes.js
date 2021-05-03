"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express = require("express");
const path = require("path");
class Routes {
    constructor(app) {
        this.app = app;
        this.setStaticDir(); // new
    }
    home() {
        this.app.get('/**', (req, res) => {
            return res.sendFile(path.join(__dirname + '/public/index.html'));
        });
    }
    // new
    setStaticDir() {
        this.app.use(express.static(path.join(__dirname, '../views')));
        // TODO: Remove these lines (used to serve any frontend stored in /public)
        this.app.use('/static', express.static('public'));
        this.app.use('/assets', express.static('public/assets'));
    }
    getRoutes() {
        this.home();
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map