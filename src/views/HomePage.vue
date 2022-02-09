<template>
    <div class="flex-col homepage">
        <van-search
            v-model="searchValue"
            placeholder="请输入搜索关键词"
            shape="round"
            class="my-search"
            @search="onSearch"
            @cancel="onCancel"
        />
        <div id="map-container" class="map-container"></div>
        <div id="overlay-container">
            <WebPopupComponent
                :id="currentGroundId"
                ref="webPopupComponent"
                @deleted="getPlot()"
                @show-modify="drawPolygonDialog?.toggleShow(true)"
                @close="closeWebPopup"
            />
        </div>
        <div class="flex-col items-end btn-group">
            <!-- <div @click="earnCoinClick" class="flex-col items-center section_2">
        <span>获得</span>
        <span class="text_1">MIB</span>
      </div>
      <div @click="amountClick" class="flex-col items-center section_3">
        <img src="@/res/local/16383475954244349177.png" class="icon" />
        <div class="group_2">
          <span class="text_2">{{ amount }}</span>
          <span class="text_3">MIB</span>
        </div>
      </div>
      <div class="flex-col items-end remain-time">
        <img src="@/res/local/16383476744376024223.png" class="image-remain-time" />
        <div class="flex-col items-center text-wrapper">
          <span>{{ remainTime }}</span>
        </div>
            </div>-->
            <van-button
                @click="
                    () => {
                        drawPolygonDialog?.root?.initAndStartDraw();
                    }
                "
            >开始绘制</van-button>
        </div>

        <!-- <img
            src="@/res/remote/f676c5298ab4cfa38d3ebf199e5e72a3.png"
            class="image-mylocation"
            @click="router.push('/PlotDetailPage')"
        />-->

        <DrawPolygonDialog
            :id="currentGroundId"
            ref="drawPolygonDialog"
            @close="currentGroundId = '', getPlot()"
            @submit="getPlot()"
        />

        <!-- <div @click="toMyLocationClick" class="flex-row to-my-location">
      <img src="@/res/local/16383475954254019054.png" class="image_1" />
      <span class="text_4">到我的位置</span>
        </div>-->

        <!-- <div class="flex-row tab-bar">
      <div class="flex-col items-center section_5">
        <img src="@/res/local/16383476051378359036.png" class="image_2" />
        <span class="text_5">地图</span>
      </div>
      <div class="flex-col items-center group_3">
        <img src="@/res/local/16383476051375272679.png" class="image_2" />
        <span class="text_6">发现</span>
      </div>
      <div class="flex-col items-end group_4">
        <div class="flex-row section_6">
          <span class="text_7">{{amout2}}</span>
          <span class="text_8">MIB</span>
        </div>
        <img src="@/res/remote/f89deecbf8a342c7793e709fa3979203.png" class="image_5" />
      </div>
        </div>-->

        <!-- <CollectGoldCoinComponent /> -->
    </div>
</template>
<script lang="ts">
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import {
    defineComponent,
    reactive,
    toRefs,
    ref,
    onMounted,
    provide,
} from 'vue';
import { useRouter } from 'vue-router';

import 'ol/ol.css';

import View from 'ol/View';
import { platformModifierKeyOnly, click } from 'ol/events/condition';
import {
    XYZ,
    Vector as VectorSource,
    ImageWMS,
    WMTS,
    TileWMS,
} from 'ol/source';
import { optionsFromCapabilities } from 'ol/source/WMTS';
import { WMTSCapabilities, GeoJSON } from 'ol/format';
import {
    Image as ImageLayer,
    Tile as TileLayer,
    Vector as VectorLayer,
    VectorImage,
} from 'ol/layer';
import Feature from 'ol/Feature';
import { Circle, Point, Geometry } from 'ol/geom';
import { SimpleGeometry } from 'ol/geom';
import {
    Fill,
    Stroke,
    Style,
    Text,
    Icon,
    Circle as CircleStyle,
} from 'ol/style';
import { getCenter, containsExtent } from 'ol/extent';
import { DragBox, Select } from 'ol/interaction';
import {
    defaults as defaultControls, // 比例尺
} from 'ol/control';

import { Toast } from 'vant';
import axios from 'axios';
import { tdtVec, tdtVecNotation, googleMapLayer } from 'src/utils/map';
import { transform, fromLonLat } from 'ol/proj';
import Geolocation from 'ol/Geolocation';
import BaseEvent from 'ol/events/event'
import { Options } from "ol/layer/BaseVector"

import GoogleLayer from 'olgm/layer/Google';
import { defaults } from 'olgm/interaction';
import OLGoogleMaps from 'olgm/OLGoogleMaps';

import {
    plotPOST,
    plotGET,
    plotDELETE,
    plotGETbyId,
} from 'src/api/resource';


export let map: Map | null = null;

const useOlGetLocationEffect = () => {
    // 定位
    let geolocation: Geolocation | null = null;
    let positionFeature: Feature<Geometry> | null = null;
    onMounted(() => {
        geolocation = new Geolocation({
            // enableHighAccuracy must be set to true to have the heading value.
            trackingOptions: {
                enableHighAccuracy: true,
            },
            projection: map?.getView()?.getProjection(),
        });
        const accuracyFeature = new Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(
                geolocation?.getAccuracyGeometry() as Geometry
            );
        });
        positionFeature = new Feature();
        positionFeature.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 6,
                    fill: new Fill({
                        color: '#3399CC',
                    }),
                    stroke: new Stroke({
                        color: '#fff',
                        width: 2,
                    }),
                }),
            })
        );
        geolocation.on('change:position', function () {
            if (!geolocation || !positionFeature) return;
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(
                coordinates ? new Point(coordinates) as Geometry : undefined
            );
        });
        map && new VectorLayer({
            map: map,
            source: new VectorSource({
                features: [accuracyFeature, positionFeature],
            }),
        });
    })
    const toMyLocationClick = () => {
        geolocation?.setTracking(true);
        const changeListener = (e: BaseEvent | Event) => {
            if (!e.target) return;
            const fea = e.target as Feature<Geometry>;
            const coord = (fea?.getGeometry() as Point)?.getCoordinates();
            map?.getView().setCenter(coord);
            geolocation?.setTracking(false);
            positionFeature?.removeEventListener('change', changeListener);
        };
        positionFeature?.addEventListener('change', changeListener);
    };
    return { toMyLocationClick }
}
const useOlOverLayEffect = () => {
    const currentGroundId = ref('');
    const router = useRouter();

    let overlay: Overlay | null = null;
    onMounted(() => {
        // 弹窗
        overlay = new Overlay({
            offset: [10, 10],
            position: undefined,
            element: document.getElementById('overlay-container') || undefined,
        })
        map?.addOverlay(overlay)
        // 点击弹窗
        let portrait = false;
        map?.on('click', (evt) => {
            if (window.innerHeight > window.innerWidth) {
                portrait = true;
            } else {
                portrait = false;
            }
            currentGroundId.value = '';
            map?.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
                if (!layer) return;
                const { id, flag } = layer.getProperties();
                if (flag === 'plot') {
                    if (portrait) router.push(`/PlotDetailPage/${id}`);
                    else {
                        const coord = map?.getCoordinateFromPixel(evt.pixel);
                        overlay?.setPosition(coord);
                        currentGroundId.value = id;
                    }
                }
            });
        });
    })
    const closeWebPopup = () => {
        overlay?.setPosition(undefined)
    }
    return { overlay, currentGroundId, closeWebPopup }
}
const useOlResizeObserverEffect = (id) => {
    onMounted(() => {
        const mapElement = document.querySelector(id) as HTMLElement;
        // 为什么缩放或单击地图时不正确/不正确？ https://openlayers.org/en/latest/doc/faq.html
        const sizeObserver = new ResizeObserver(() => {
            map?.updateSize();
        });
        sizeObserver.observe(mapElement);
    })
}
const useOlMapEffect = () => {

    const mapEleId = '#map-container';
    const googleLayer = new GoogleLayer();
    const center = [12709830.405784814, 2547947.6083460334];

    onMounted(() => {
        const mapElement = document.querySelector(mapEleId) as HTMLElement;
        map = window.olmap = new Map({
            interactions: defaults(),
            controls: defaultControls({
                attribution: false,
            }),
            layers: [googleLayer],
            // layers: [tdtVec, tdtVecNotation],
            view: new View({
                center,
                zoom: 17,
            }),
            target: mapElement,
        });

        var olGM = new OLGoogleMaps({ map: map }); // map is the ol.Map instance
        olGM.activate();
    })
    useOlResizeObserverEffect(mapEleId);
    const { overlay, currentGroundId, closeWebPopup } = useOlOverLayEffect();
    const { toMyLocationClick } = useOlGetLocationEffect();

    return { overlay, currentGroundId, closeWebPopup, toMyLocationClick }
}
const useSearchEffect = () => {
    const searchValue = ref('香港大学');

    // 高德 8b0d6e2489c6cc902fa56c6f2168e93d
    const onSearch = async (val: any) => {
        const coord = transform(olmap.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
        const coordStr = coord.join(',');
        const res = await axios.get(`https://restapi.amap.com/v3/geocode/regeo?location=${coordStr}&key=f4a0557b75353764c6856b484fe49881&radius=10`)
        const addressComponent = res?.data?.regeocode?.addressComponent
        let city = addressComponent.city.length > 0 ? addressComponent.city : addressComponent.province;

        const res2 = await axios
            .get(
                // `https://restapi.amap.com/v3/geocode/geo?key=f4a0557b75353764c6856b484fe49881&address=${val}&city=深圳`
                `https://restapi.amap.com/v3/geocode/geo?key=f4a0557b75353764c6856b484fe49881&address=${val}&city=${city}` //TODO:判断香港还是深圳
            )
        console.log(res2);
        if (res2?.data?.geocodes?.length === 0) return;
        let location = res2?.data?.geocodes[0]?.location?.split(',');
        let latitude = parseFloat(location[1]);
        let longitude = parseFloat(location[0]);
        map?.setView(
            new View({
                center: fromLonLat([longitude, latitude]),
                zoom: 16,
            })
        );
        console.log({
            location,
            latitude,
            longitude,
            name: res2.data.geocodes[0].formatted_address,
            address: res2.data.geocodes[0].formatted_address,
        });
    };
    const onCancel = () => Toast('取消');
    return { searchValue, onSearch, onCancel }
}
const useGetPlotEffect = () => {
    const colorsMap: { [key: string]: string } = {
        cansale: 'green',
        saled: 'blue',
        unsaled: 'gray',
    };
    const getPlot = () => {
        map?.getLayers()
            .getArray()
            .filter((i) => (i as any).values_.flag === 'plot')
            .forEach((i) => map?.removeLayer(i));

        plotGET().then((r: { data: { list: any[]; }; }) => {
            const center = map?.getView()?.getCenter();

            r.data.list.forEach((ground: { geojson: string; _id: string; saleState: string | number; address: any; }, index: number) => {
                const geojsonObject = JSON.parse(ground.geojson);
                let vectorSource = new VectorSource({
                    // 转换坐标为3857(米)
                    features: new GeoJSON().readFeatures(geojsonObject, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: 'EPSG:3857',
                    }),
                });

                interface Options2 extends Options<VectorSource<Geometry>> {
                    id?: string;
                    flag?: string;
                }

                const layer = new VectorLayer({
                    id: ground._id,
                    flag: 'plot',
                    source: vectorSource,
                } as Options2);
                const style = new Style({
                    stroke: new Stroke({ width: 1, color: 'lightblue' }),
                    fill: new Fill({ color: colorsMap[ground.saleState] }),
                    text: new Text({
                        font: 'normal 16px Arial',
                        text: ground.address,
                        fill: new Fill({
                            color: 'white',
                        }),
                    }),
                });
                layer.setProperties(ground);
                layer.getSource().getFeatures().forEach(i => i.setStyle(style))
                map?.addLayer(layer);
                if (index === 0 && center && center[0] === 12709830.405784814) {
                    console.log(center);
                    map?.getView().fit(vectorSource?.getFeatures()[0]?.getGeometry() as SimpleGeometry);
                    map?.getView().setZoom(17);
                }
            });
        });
    }

    onMounted(() => {
        getPlot();
    });

    return { getPlot }
}

</script>
<script lang="ts" setup>
import CollectGoldCoinComponent from 'src/components/CollectGoldCoinComponent.vue';
import WebPopupComponent from 'src/components/WebPopupComponent.vue';
import DrawPolygonDialog from 'src/components/DrawPolygonDialog.vue';

// let remainTime = '50mins';
// let amout2 = '2000';
// let amount = '750';
const router = useRouter();

const drawPolygonDialog = ref<InstanceType<typeof DrawPolygonDialog>>();
const webPopupComponent = ref<InstanceType<typeof WebPopupComponent>>();

const { currentGroundId, closeWebPopup } = useOlMapEffect();

const { searchValue, onSearch, onCancel } = useSearchEffect();

const { getPlot } = useGetPlotEffect();




// const earnCoinClick = () => {
//     router.push({ name: 'index' });
// };
// const amountClick = () => {
//     router.push({ name: 'index' });
// };



</script>

<style scoped lang="less">
@search-hei: 50px;

.van-search {
    height: @search-hei;
}
.my-search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.map-container {
    height: calc(100vh - @tabbar-height);
    margin-top: @search-hei;
}
#overlay-container {
    transform: translate(0, -50%);
}
.btn-group {
    position: absolute;
    top: @search-hei+10px;
    right: 10px;
    .section_2 {
        padding: 7px 0 10px;
        color: rgb(255, 255, 255);
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
        background-color: rgb(0, 181, 255);
        border-radius: 12px;
        width: 71px;
        border: solid 4px rgb(0, 0, 0);
        .text_1 {
            margin-top: 2px;
        }
    }
    .section_3 {
        margin-top: 25px;
        padding: 7px 0;
        background-color: rgb(0, 181, 255);
        border-radius: 12px;
        width: 71px;
        border: solid 4px rgb(0, 0, 0);
        .icon {
            width: 40px;
            height: 40px;
        }
        .group_2 {
            margin-top: 4px;
            white-space: nowrap;
            .text_2 {
                color: rgb(255, 255, 255);
                font-size: 16px;
                line-height: 19px;
            }
            .text_3 {
                color: rgb(255, 255, 255);
                font-size: 14px;
                line-height: 17px;
            }
        }
    }
    .remain-time {
        margin-top: 25px;
        color: rgb(255, 255, 255);
        font-size: 14px;
        line-height: 17px;
        white-space: nowrap;
        overflow-y: auto;
        .image-remain-time {
            margin-right: 9px;
            width: 54px;
            height: 55px;
        }
        .text-wrapper {
            margin-top: 5px;
            padding: 6px 0 9px;
            background-color: rgb(0, 181, 255);
            border-radius: 12px;
            width: 71px;
            border: solid 4px rgb(0, 0, 0);
        }
    }
}

.image-mylocation {
    position: absolute;
    align-self: center;
    width: 86px;
    height: 91px;
}
.to-my-location {
    padding: 10px 8px 8px 9px;
    color: rgb(0, 0, 0);
    font-size: 18px;
    line-height: 22px;
    white-space: nowrap;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    position: absolute;
    left: 10px;
    bottom: @tabbar-height+10px;
    border: solid 3px rgb(0, 181, 255);
    .image_1 {
        width: 24px;
        height: 24px;
    }
    .text_4 {
        margin-left: 6px;
    }
}
.tab-bar {
    padding: 0 31px 7px;
    .section_5 {
        padding: 13.5px 0 6px;
        color: rgb(255, 255, 255);
        font-size: 14px;
        line-height: 17px;
        white-space: nowrap;
        background-color: rgb(0, 181, 255);
        border-radius: 12px;
        width: 60px;
        height: 68px;
        .text_5 {
            margin-top: 4.5px;
        }
    }
    .group_3 {
        margin-left: 52px;
        margin-top: 13.5px;
        flex: 1 1 auto;
        color: rgb(0, 0, 0);
        font-size: 14px;
        line-height: 17px;
        white-space: nowrap;
        .text_6 {
            margin-top: 4.5px;
        }
    }
    .group_4 {
        margin-left: 20px;
        margin-top: 16.5px;
        padding: 5.5px 0 8.5px;
        width: 114px;
        position: relative;
        .section_6 {
            padding: 5px 3px 8px;
            background-color: rgb(0, 0, 0);
            border-radius: 11px;
            .text_7 {
                margin-left: 25px;
                color: rgb(255, 255, 255);
                font-size: 16px;
                line-height: 19px;
                white-space: nowrap;
                overflow: hidden;
                display: inline-block;
                max-width: 80px;
                text-overflow: ellipsis;
            }
            .text_8 {
                margin-top: 4px;
                color: rgb(255, 255, 255);
                font-size: 12px;
                line-height: 14px;
                white-space: nowrap;
            }
        }
        .image_5 {
            width: 43px;
            height: 46px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .image_2 {
        width: 27px;
        height: 27px;
    }
}
</style>
