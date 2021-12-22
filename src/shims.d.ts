interface Window {
    olmap: any;
}

interface Options
    extends import('ol/layer/BaseVector.js').Options<VectorSource<Geometry>> {
    id?: string;
    flag?: string;
}
