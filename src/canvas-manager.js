class CanvasManager {
    constructor(map) {
        this.map_ = map;
        this.elements_ = [];

        this.scale_ = window.devicePixelRatio || 1;

        this.layer_ = new CanvasLayer({
            map: map,
            animate: false,
            resizeHandler: this.update.bind(this),
            updateHandler: this.update.bind(this),
            resolutionScale: this.scale_
        });

        this.ctx_ = this.layer_.canvas.getContext('2d');
    }
    update() {
        let canvasWidth = this.layer_.canvas.width;
        let canvasHeight = this.layer_.canvas.height;

        let projection = this.map_.getProjection();

        let bounds = this.map_.getBounds();
        let visibleElements = this.elements_.filter(e => bounds.contains(e.center));

        this.ctx_.clearRect(0, 0, canvasWidth, canvasHeight);

        this.ctx_.setTransform(1, 0, 0, 1, 0, 0);

        let scale = Math.pow(2, this.map_.getZoom()) * this.scale_;
        let offset = projection.fromLatLngToPoint(this.layer_.getTopLeft());

        this.ctx_.scale(scale, scale);
        this.ctx_.translate(-offset.x, -offset.y);

        visibleElements.forEach(e => {
            let latLngPx = projection.fromLatLngToPoint(e.center);
            e.draw(this.ctx_, scale, latLngPx);
        });
    }
    addElement(e) {
        this.elements_.push(e);
    }
}
