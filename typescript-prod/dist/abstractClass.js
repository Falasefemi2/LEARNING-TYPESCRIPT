"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const femi = new TakePhoto("test", "Test");
class Instagram extends TakePhoto {
}
