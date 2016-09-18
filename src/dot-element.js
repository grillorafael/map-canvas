class DotElement extends Element {
    constructor(coordinate, style, data) {
        super(coordinate, data);
        this.updateStyle(style);
    }
    updateStyle(s) {
        this.style_ = Object.assign(DotElement.DefaultStyle(), s || {});
    }
    draw(ctx, scale, latLngPx) {
        let cx = latLngPx.x;
        let cy = latLngPx.y;

        ctx.beginPath();
        ctx.globalAlpha = this.style_.opacity;

        ctx.arc(cx, cy, this.scaledPixel(2 * this.style_.radius, scale), 0, 2 * Math.PI);

        ctx.lineWidth = this.scaledPixel(this.style_.strokeWidth, scale);

        if(this.style_.fillColor) {
            ctx.fillStyle = this.style_.fillColor;
            ctx.fill();
        }

        ctx.strokeStyle = this.style_.strokeColor;
        ctx.stroke();
    }

    static DefaultStyle() {
        return {
            opacity: 1,
            radius: 8,
            strokeWidth: 2,
            strokeColor: 'black',
            fillColor: false
        }
    }
}
