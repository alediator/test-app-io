(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videocall-room-videocallroom-module"],{

/***/ "+pmC":
/*!**************************************************************!*\
  !*** ./src/app/pages/videocall-room/videocallroom.module.ts ***!
  \**************************************************************/
/*! exports provided: VideoCallRoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallRoomModule", function() { return VideoCallRoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _videocallroom_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocallroom-routing.module */ "ji2V");
/* harmony import */ var _videocallroom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videocallroom.component */ "ysFo");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/components.module */ "qxEu");







class VideoCallRoomModule {
}
VideoCallRoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoCallRoomModule });
VideoCallRoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoCallRoomModule_Factory(t) { return new (t || VideoCallRoomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _videocallroom_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoCallRoomRoutingModule"],
            _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoCallRoomModule, { declarations: [_videocallroom_component__WEBPACK_IMPORTED_MODULE_3__["VideoCallRoomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _videocallroom_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoCallRoomRoutingModule"],
        _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallRoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_videocallroom_component__WEBPACK_IMPORTED_MODULE_3__["VideoCallRoomComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _videocallroom_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoCallRoomRoutingModule"],
                    _core_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ji2V":
/*!**********************************************************************!*\
  !*** ./src/app/pages/videocall-room/videocallroom-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: VideoCallRoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallRoomRoutingModule", function() { return VideoCallRoomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videocallroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocallroom.component */ "ysFo");





const routes = [{ path: '', component: _videocallroom_component__WEBPACK_IMPORTED_MODULE_2__["VideoCallRoomComponent"] }];
class VideoCallRoomRoutingModule {
}
VideoCallRoomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoCallRoomRoutingModule });
VideoCallRoomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoCallRoomRoutingModule_Factory(t) { return new (t || VideoCallRoomRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoCallRoomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallRoomRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ysFo":
/*!*****************************************************************!*\
  !*** ./src/app/pages/videocall-room/videocallroom.component.ts ***!
  \*****************************************************************/
/*! exports provided: VideoCallRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallRoomComponent", function() { return VideoCallRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function VideoCallRoomComponent_ng_container_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r7.userName);
} }
function VideoCallRoomComponent_ng_container_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r7.userName);
} }
function VideoCallRoomComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCallRoomComponent_ng_container_4_div_1_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoCallRoomComponent_ng_container_4_div_1_ng_template_2_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadedmetadata", function VideoCallRoomComponent_ng_container_4_div_1_Template_video_loadedmetadata_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onLoadedMetadata($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r7.userId !== ctx_r8.currentUserId)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", video_r7.srcObject)("muted", video_r7.muted);
} }
function VideoCallRoomComponent_ng_container_4_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r7.userName);
} }
function VideoCallRoomComponent_ng_container_4_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r7.userName);
} }
function VideoCallRoomComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCallRoomComponent_ng_container_4_ng_template_2_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoCallRoomComponent_ng_container_4_ng_template_2_ng_template_2_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadedmetadata", function VideoCallRoomComponent_ng_container_4_ng_template_2_Template_video_loadedmetadata_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onLoadedMetadata($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const video_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("video-content p-col-" + ctx_r10.videoSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r7.userId !== ctx_r10.currentUserId)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", video_r7.srcObject)("muted", video_r7.muted);
} }
function VideoCallRoomComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoCallRoomComponent_ng_container_4_div_1_Template, 5, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoCallRoomComponent_ng_container_4_ng_template_2_Template, 5, 6, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r7.userId == ctx_r0.currentUserId && (ctx_r0.videos == null ? null : ctx_r0.videos.length) > 1)("ngIfElse", _r9);
} }
function VideoCallRoomComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoCallRoomComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoCallRoomComponent__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoCallRoomComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VideoCallRoomComponent {
    constructor(route, socket, router) {
        this.route = route;
        this.socket = socket;
        this.router = router;
        // Video components
        this.videos = [];
        this.videoSize = 12;
    }
    ngOnInit() {
        this.currentUserId = localStorage.getItem('roomId');
        this.initializePeer();
    }
    ngOnDestroy() {
        this.leaveRoom(this.roomId);
    }
    initializePeer() {
        console.log(`Initialize Peer with id ${this.currentUserId}`);
        const roomConfig = JSON.parse(localStorage.getItem('roomConfig'));
        // Reading local storage.
        this.roomName = roomConfig.name;
        this.currentUserName = roomConfig.username;
        this.micro = roomConfig.microphone;
        this.camera = roomConfig.camera;
        this.initializeIo();
        this.initializeMedia();
    }
    initializeIo() {
        this.myPeer = new Peer(this.currentUserId, {
            url: 'https://test-app-peer.herokuapp.com'
        });
        this.route.params.subscribe((params) => {
            console.log(params);
            // Room identifier: from the url
            // this.roomId = params.roomId;
            this.myPeer.on('open', () => {
                this.joinRoom(this.roomId);
            });
        });
        this.socket.on('user-disconnected', (userId) => {
            console.log(`receiving user-disconnected event from ${userId}`);
            this.videos = this.videos.filter(video => video.userId !== userId);
            this.videoSize = this.getVideoSize(this.videos.length);
        });
        this.socket.on('leave-room', (roomId, userId, { roomName, userName }) => {
            console.log(`receiving leave-room  ${roomId} event from ${userId}`);
            this.somebodyLeftRoom(roomId, userId, { roomName, userName });
        });
    }
    initializeMedia() {
        navigator.mediaDevices.getUserMedia({
            audio: this.micro,
            video: this.camera,
        })
            .catch((err) => {
            console.error('[Error] Not able to retrieve user media:', err);
            return null;
        })
            .then((stream) => {
            if (stream) {
                this.myStream = stream;
                this.addMyVideo(stream);
            }
            // TODO: move all this code to another function because it is not related with the media itself.
            this.myPeer.on('call', (call) => {
                console.log('receiving call...', call);
                call.answer(stream);
                call.on('stream', (otherUserVideoStream) => {
                    console.log('receiving other stream', otherUserVideoStream);
                    this.addOtherUserVideo(call.metadata.userId, call.metadata.userName, otherUserVideoStream);
                });
                call.on('error', (err) => {
                    console.error(err);
                });
            });
            this.socket.on('user-connected', (userId, { roomName, userName }) => {
                console.log('Receiving user-connected event', `Calling ${userId} for ${roomName}`);
                this.roomName = roomName;
                // Let some time for new peers to be able to answer
                setTimeout(() => {
                    const call = this.myPeer.call(userId, stream, {
                        metadata: {
                            userId: this.currentUserId,
                            userName: this.currentUserName
                        },
                    });
                    call.on('stream', (otherUserVideoStream) => {
                        console.log('receiving other user stream after his connection');
                        this.addOtherUserVideo(userId, userName, otherUserVideoStream);
                    });
                    call.on('close', () => {
                        this.videos = this.videos.filter((video) => video.userId !== userId);
                        this.videoSize = this.getVideoSize(this.videos.length);
                    });
                }, 1000);
            });
        });
    }
    /**
     * Current peer joins the selected room.
     */
    joinRoom(roomId) {
        this.socket.emit('join-room', roomId, this.currentUserId, {
            userName: this.currentUserName,
            roomName: this.roomName
        });
    }
    /**
     * Current peer leaves the selected room.
     */
    leaveRoom(roomId) {
        this.socket.emit('leave-room', roomId, this.currentUserId, {
            userName: this.currentUserName,
            roomName: this.roomName
        });
    }
    /**
     * Another user left a room.
     */
    somebodyLeftRoom(roomId, userId, { roomName, userName }) {
        console.log(`${userId} left ${roomId}`);
        this.videos = this.videos.filter(video => video.userId !== userId);
        this.videoSize = this.getVideoSize(this.videos.length);
    }
    addMyVideo(stream) {
        this.videos.push({
            muted: true,
            srcObject: stream,
            userId: this.currentUserId,
            userName: this.currentUserName + ' (You)',
        });
        this.videoSize = this.getVideoSize(this.videos.length);
    }
    addOtherUserVideo(userId, userName, stream) {
        const alreadyExisting = this.videos.some(video => video.userId === userId);
        if (alreadyExisting) {
            console.log(this.videos, userId);
            return;
        }
        this.videos.push({
            muted: false,
            srcObject: stream,
            userId,
            userName,
        });
        this.videoSize = this.getVideoSize(this.videos.length);
    }
    onLoadedMetadata(event) {
        event.target.play();
    }
    showCam() {
        console.log('show/hidde cam');
        this.camera = !this.camera;
        this.myStream.getVideoTracks()[0].enabled = this.camera;
    }
    muteMicro() {
        console.log('mute/unmute micro');
        this.micro = !this.micro;
        this.myStream.getAudioTracks()[0].enabled = this.micro;
    }
    endCall() {
        this.router.navigate([`/video-call`]);
    }
    getVideoSize(videos) {
        let videoSize = 12;
        let cols = 1;
        if (videos <= 2) {
            cols = 1;
        }
        else if (videos === 3) {
            cols = 2;
        }
        else {
            cols = videos === 1 ? 1 : Math.trunc(videos / 2);
        }
        videoSize = 12 / cols;
        return videoSize;
    }
}
VideoCallRoomComponent.ɵfac = function VideoCallRoomComponent_Factory(t) { return new (t || VideoCallRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
VideoCallRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoCallRoomComponent, selectors: [["back-office-videocallroom"]], decls: 17, vars: 6, consts: [[1, "section-header"], [1, "video-grid"], [1, "p-grid", "p-d-flex", "p-jc-center", "videos"], [4, "ngFor", "ngForOf"], [1, "p-d-flex", "p-jc-center", "button-container"], ["type", "button", "id", "show-cam", "name", "show-cam", 1, "button-control", 3, "click"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "video-slash", "class", "svg-inline--fa fa-video-slash fa-w-20 svg-icon", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 4, "ngIf", "ngIfElse"], ["cameraMuted", ""], ["type", "button", "id", "mute-micro", "name", "mute-micro", 1, "button-control", 3, "click"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "microphone-slash", "class", "svg-inline--fa fa-microphone-slash fa-w-20 svg-icon", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 4, "ngIf", "ngIfElse"], ["microMuted", ""], ["type", "button", "id", "end-call", "name", "end-call", 1, "button-control", "button-control-endcall", 3, "click"], ["aria-hidden", "true", "width", "20px", "height", "20px", "focusable", "false", "data-prefix", "fas", "data-icon", "phone-slash", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 1, "svg-inline--fa", "fa-phone-slash", "fa-w-20", "svg-icon"], ["fill", "currentColor", "d", "M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z"], ["class", "video-content-current", 4, "ngIf", "ngIfElse"], ["userVideo", ""], [1, "video-content-current"], ["class", "name-label", 4, "ngIf", "ngIfElse"], ["currentUserVideoLabel", ""], [3, "srcObject", "muted", "loadedmetadata"], [1, "name-label"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "video-slash", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 1, "svg-inline--fa", "fa-video-slash", "fa-w-20", "svg-icon"], ["fill", "currentColor", "d", "M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "video", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-video", "fa-w-18", "svg-icon"], ["fill", "currentColor", "d", "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "microphone-slash", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 1, "svg-inline--fa", "fa-microphone-slash", "fa-w-20", "svg-icon"], ["fill", "currentColor", "d", "M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "microphone", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 352 512", 1, "svg-inline--fa", "fa-microphone", "fa-w-11", "svg-icon", "svg-icon-micro"], ["fill", "currentColor", "d", "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"]], template: function VideoCallRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoCallRoomComponent_ng_container_4_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallRoomComponent_Template_button_click_6_listener() { return ctx.showCam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VideoCallRoomComponent__svg_svg_7_Template, 2, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VideoCallRoomComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallRoomComponent_Template_button_click_10_listener() { return ctx.muteMicro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VideoCallRoomComponent__svg_svg_11_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoCallRoomComponent_ng_template_12_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoCallRoomComponent_Template_button_click_14_listener() { return ctx.endCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.camera)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.micro)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".video-content[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-bottom: -5px;\n}\n\n.videos[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.video-content-current[_ngcontent-%COMP%] {\n  width: 25%;\n  float: right;\n  position: absolute;\n  right: 1px;\n  bottom: -5px;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #000000;\n}\n\n.name-label[_ngcontent-%COMP%] {\n  background: #00000080;\n  color: #ffffff;\n  padding: 2px 5px;\n  margin-top: 0px;\n  position: absolute;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.button-control[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: cornflowerblue;\n  border: 0;\n  margin: 0 5px;\n  width: 35px;\n  height: 35px;\n}\n\n.button-control-endcall[_ngcontent-%COMP%] {\n  background: #ff0000;\n}\n\n.svg-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.svg-icon-micro[_ngcontent-%COMP%] {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsLXJvb20vdmlkZW9jYWxscm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtBQUNKOztBQUFJO0VBQ0UsV0FBQTtBQUVOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlkZW9jYWxsLXJvb20vdmlkZW9jYWxscm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnZpZGVvLWdyaWQge1xuICB9XG4gIC52aWRlby1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB9XG5cbiAgLnZpZGVvc3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAudmlkZW8tY29udGVudC1jdXJyZW50e1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXB4O1xuICAgIGJvdHRvbTogLTVweDtcbiAgfVxuXG4gIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB9XG4gIC5uYW1lLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwODA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuYnV0dG9uLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5idXR0b24tY29udHJvbC1lbmRjYWxse1xuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4gIH1cbiAgXG4gIC5zdmctaWNvbntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAmLW1pY3Jve1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCallRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-office-videocallroom',
                templateUrl: './videocallroom.component.html',
                styleUrls: ['./videocallroom.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=videocall-room-videocallroom-module.js.map