class Element {
    constructor(coordinate, elementData) {
        this.latLng_ = coordinate;
        this.data_ = elementData;
    }
    get center() {
        return this.latLng_;
    }
    get data() {
        return this.data_;
    }
    draw(ctx, latLngPx) {
        console.log("Please use an implemented component");
    }
    scaledPixel(pxValue, scale) {
        return pxValue / scale;
    }
    rotated(point, around, degrees) {
        let radian = degrees * Math.PI / 180;
        return around.x + (point.x - around.x) * Math.cos(radian) - (point.y-around.y) * Math.sin(radian);
    }
}
