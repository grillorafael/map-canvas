class ArrowElement extends Element {
    constructor(coordinate, style, data) {
        super(coordinate, data);
        this.updateStyle(style);
    }
    updateStyle(s) {
        this.style_ = Object.assign(ArrowElement.DefaultStyle(), s || {});
    }
    draw(ctx, scale, latLngPx) {
        let cx = latLngPx.x;
        let cy = latLngPx.y;

        ctx.beginPath();

        ctx.moveTo(cx, cy - this.scaledPixel(this.style_.height, scale) / 2);

        ctx.globalAlpha = this.style_.opacity;

        ctx.lineTo(cx - this.scaledPixel(this.style_.width, scale), cy);
        ctx.lineTo(cx, cy - this.scaledPixel(this.style_.height, scale) * 2);
        ctx.lineTo(cx + this.scaledPixel(this.style_.width, scale), cy);
        ctx.closePath();

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
            heading: 0,
            opacity: 1,
            width: 16,
            height: 16,
            strokeWidth: 1,
            strokeColor: 'black',
            fillColor: false
        }
    }
}
