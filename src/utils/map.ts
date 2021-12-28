import { Fill, Stroke, Style, Text } from 'ol/style';
import { Tile as TileLayer } from 'ol/layer';
import { XYZ, BingMaps } from 'ol/source';

export function getTileLayerUrl(tileLayerName:string) {
    const tk = `c375a378f0c4ac4a034d651fb21669fd`;
    // 随机从7个节点获取,负载均衡
    return `http://t{0-7}.tianditu.com/DataServer?T=${tileLayerName}&x={x}&y={y}&l={z}&tk=${tk}`;
}
// 天地图矢量图层
export const tdtVec = new TileLayer({
    title: '天地图矢量图层',
    name: '矢量图层',
    source: new XYZ({
        url: getTileLayerUrl('vec_w'),
        maxZoom:18
    }),
}as any);
// 天地图矢量图层注记
export const tdtVecNotation = new TileLayer({
    title: '天地图矢量图层注记',
    name: '矢量图层',
    source: new XYZ({
        url: getTileLayerUrl('cva_w'),
        maxZoom:18
    }),
}as any);

export const googleMapLayer = new TileLayer({
    source: new XYZ({
        // url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0'//矢量有偏移
        // url: 'http://www.google.cn/maps/vt?lyrs=t&x={x}&y={y}&z={z}'//全黑了
        // url: 'http://www.google.cn/maps/vt?lyrs=m&x={x}&y={y}&z={z}'//矢量有偏移
        // url: 'http://www.google.cn/maps/vt?lyrs=h&x={x}&y={y}&z={z}'//影像的注记
        url: 'http://www.google.cn/maps/vt?lyrs=m&x={x}&y={y}&z={z}', //不翻墙用不了影像无偏移,牛逼!
        /* 【国际版】卫星：正确 地图：偏移 */
        /* 【中国版】卫星：偏移 地图：偏移 */
    }),
});
