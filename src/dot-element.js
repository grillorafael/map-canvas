class DotElement extends Element {
    constructor(coordinate, data) {
        super(coordinate, data);
    }
    draw(ctx, latLngPx) {
        let cx = latLngPx.x;
        let cy = latLngPx.y;

        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, 2*Math.PI);
        ctx.fillStyle = '#FF6A6A';
        ctx.fill();
    }
}
