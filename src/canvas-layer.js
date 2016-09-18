class CanvasLayer extends google.maps.OverlayView {
    constructor(map) {
        super();

        this.setMap(map);
        this.log("Created");
    }
    onAdd() {
        this.log('On Add');

        let canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.top = '0';
        canvas.style.left = '0';

        this.canvas_ = canvas;

        this.getPanes().overlayLayer.appendChild(canvas);
    }
    draw() {
        this.log('Draw');
    }
    log(v) {
        let dt = new Date().toISOString();
        console.log(`%c[CanvasLayer]`, 'color:blue;', v);
    }
}
