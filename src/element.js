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
        this.log("Please use an implemented component");
    }
    log(v) {
        console.log(`%c[${this.name_ ? this.name_ : 'Element'}]`, 'color:blue;', v);
    }
}
