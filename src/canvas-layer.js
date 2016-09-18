class CanvasLayer extends google.maps.OverlayView {
    constructor(map) {
        super();
        this.log("New");

        this.elements_ = [];
        this.setMap(map);
    }
    onAdd() {
        this.log('Prepare');

        this.canvas_ = document.createElement("canvas");
        this.ctx_ = this.canvas_.getContext("2d");

        this.canvas_.width = this.getMap().getDiv().clientWidth;
        this.canvas_.height= this.getMap().getDiv().clientHeight;

        let panes = this.getPanes();
        panes.overlayLayer.appendChild(this.canvas_);
    }
    draw() {
        this.log('Draw');

        let projection = this.getProjection();
        let bounds = this.getMap().getBounds();
        let visibleElements = this.elements_.filter(e => bounds.contains(e.center));

        this.log(`Drawing ${visibleElements.length} visible elements`);

        this.ctx_.clearRect(0, 0, this.canvas_.width, this.canvas_.height);

        visibleElements.forEach(e => {
            let latLngPx = projection.fromLatLngToDivPixel(e.center);
            e.draw(this.ctx_, latLngPx);
        });
    }
    addElement(e) {
        this.elements_.push(e);
    }
    log(v) {
        console.log(`%c[CanvasLayer]`, 'color:blue;', v);
    }
}
