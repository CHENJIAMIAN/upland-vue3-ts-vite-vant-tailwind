<template>
  <div class="flex-col container">
    <div id="container" class="container"></div>

    <div class="flex-col items-end btn-group">
      <div @click="view_9OnClick" class="flex-col items-center section_2">
        <span>获得</span>
        <span class="text_1">MIB</span>
      </div>
      <div @click="view_10OnClick" class="flex-col items-center section_3">
        <img src="@/res/local/16383475954244349177.png" class="icon" />
        <div class="group_2">
          <span class="text_2">{{amount}}</span>
          <span class="text_3">MIB</span>
        </div>
      </div>
      <div class="flex-col items-end remain-time">
        <img src="@/res/local/16383476744376024223.png" class="image-remain-time" />
        <div class="flex-col items-center text-wrapper">
          <span>{{remainTime}}</span>
        </div>
      </div>
    </div>

    <img src="@/res/remote/f676c5298ab4cfa38d3ebf199e5e72a3.png" class="image-mylocation" @click="router.push('/PlotDetailPage')" />

    <div @click="view_7OnClick" class="flex-row to-my-location">
      <img src="@/res/local/16383475954254019054.png" class="image_1" />
      <span class="text_4">到我的位置</span>
    </div>

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
    </div> -->
    <!-- <CollectGoldCoinComponent /> -->
    <!-- <WebPopupComponent/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import 'ol/ol.css'

import Map from 'ol/Map'
import View from 'ol/View'
import { platformModifierKeyOnly, click } from 'ol/events/condition'
import { XYZ, Vector as VectorSource, ImageWMS, WMTS, TileWMS } from 'ol/source'
import { optionsFromCapabilities } from 'ol/source/WMTS'
import { WMTSCapabilities, GeoJSON } from 'ol/format'
import {
  Image as ImageLayer,
  Tile as TileLayer,
  Vector as VectorLayer,
  VectorImage,
} from 'ol/layer'
import { transform, fromLonLat } from 'ol/proj'
import Feature from 'ol/Feature'
import { Circle, Point } from 'ol/geom'
import GeometryType from 'ol/geom/GeometryType'
import { Fill, Stroke, Style, Text, Icon } from 'ol/style'
import { getCenter, containsExtent } from 'ol/extent'
import { DragBox, Select } from 'ol/interaction'
import Overlay from 'ol/Overlay'
import {
  defaults as defaultControls, // 比例尺
} from 'ol/control'

import CollectGoldCoinComponent from 'src/components/CollectGoldCoinComponent.vue'
import WebPopupComponent from 'src/components/WebPopupComponent.vue'

export default defineComponent({
  components: { CollectGoldCoinComponent, WebPopupComponent },
  setup() {
    const router = useRouter()

    const googleMapLayer = new TileLayer({
      source: new XYZ({
        // url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0'//矢量有偏移
        // url: 'http://www.google.cn/maps/vt?lyrs=t&x={x}&y={y}&z={z}'//全黑了
        // url: 'http://www.google.cn/maps/vt?lyrs=m&x={x}&y={y}&z={z}'//矢量有偏移
        // url: 'http://www.google.cn/maps/vt?lyrs=h&x={x}&y={y}&z={z}'//影像的注记
        url: 'http://www.google.cn/maps/vt?lyrs=m&x={x}&y={y}&z={z}', //不翻墙用不了影像无偏移,牛逼!
        /* 【国际版】卫星：正确 地图：偏移 */
        /* 【中国版】卫星：偏移 地图：偏移 */
      }),
    })

    onMounted(() => {
      const mapElement = document.querySelector('#container')
      if (!mapElement) {
        debugger
        return
      }
      const map = new Map({
        controls: defaultControls({
          attribution: false,
        }),
        layers: [googleMapLayer],
        view: new View({
          center: fromLonLat([114.053879, 22.549343]),
          zoom: 13,
        }),
        target: mapElement,
      })
      // 为什么缩放或单击地图时不正确/不正确？ https://openlayers.org/en/latest/doc/faq.html
      const sizeObserver = new ResizeObserver(() => {
        console.log('ResizeObserver updateSize')
        map && map.updateSize()
      })
      sizeObserver.observe(mapElement)
    })

    const view_9OnClick = () => {
      router.push({ name: 'index' })
    }
    const view_10OnClick = () => {
      router.push({ name: 'index' })
    }
    const view_7OnClick = () => {
      router.push({ name: 'index' })
    }
    return {
      router,
      remainTime: '50mins',
      amout2: '2000',
      amount: '750',
      view_9OnClick,
      view_10OnClick,
      view_7OnClick,
    }
  },
})
</script>

<style scoped lang="less">
.container {
  overflow-y: auto;

  .btn-group {
    position: absolute;
    top: 50px;
    right: 40px;
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
  left: 15.600000000000001px;
  bottom: 84.4px;
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