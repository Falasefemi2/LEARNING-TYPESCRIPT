class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
}
const femi = new TakePhoto("test", "Test")

class Instagram extends TakePhoto{

}