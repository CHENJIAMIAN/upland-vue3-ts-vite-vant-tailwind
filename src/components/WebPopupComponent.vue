<template>
  <div class="group">
    <div class="flex-col group-content justify-end">
      <!-- <van-swipe indicator-color="white" height="200">
        <van-swipe-item v-if="form.pictures.length > 0" v-for="imgSrc in form.pictures">
          <img :src="imgSrc" draggable="false" />
        </van-swipe-item>
        <van-swipe-item v-else>
          <van-image width="100%" height="100%" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>-->

      <swiper ref="mySwiper" class="my-swipe rounded-t-xl" :pagination="pagination">
        <swiper-slide v-if="form.pictures.length > 0" v-for="imgSrc in form.pictures">
          <img :src="imgSrc" draggable="false" />
        </swiper-slide>
      </swiper>

      <div class="flex flex-col mx-2 -translate-y-10 rounded-md p-5 shadow-md bg-white">
        <div class="text-gray-500 text-center text-base">{{ form.address || 'address' }}</div>
        <div class="flex-row bg-gray-200 rounded-md p-2">
          <span class="text-xs text-gray-800">所有人</span>
          <span class="grow text-center text-xl">{{ form.name || 'name' }}</span>
        </div>
        <div class="flex-row mt-3">
          <div class="flex-col basis-1/2">
            <span class="text-xs text-gray-500">价格</span>
            <span class="text-2xl text-sky-400">{{ form.price || 'price' }}</span>
          </div>
          <div class="flex-col">
            <span class="text-xs text-gray-500">面积</span>
            <span class="text-2xl">{{ form.area || 'area' }}</span>
          </div>
        </div>
        <div class="flex-row">
          <div class="flex-col basis-1/2">
            <span class="text-xs text-gray-500">月收入</span>
            <span class="text-2xl">{{ form.income || 'income' }}</span>
          </div>
          <div class="flex-col">
            <span class="text-xs text-gray-500">可获奖励</span>
            <span class="text-2xl">{{ form.extraBonus || 'extraBonus' }}</span>
          </div>
        </div>
      </div>

      <div class="mx-2 -translate-y-8">
        <!-- <div
          @click="view_9OnClick"
          class="grid-item items-center justify-center bg-sky-400 text-white"
        >
          <img src="@/res/local/16383476693745430978.png" class="image_1 mr-2" />
          <span>购买</span>
        </div>

        <div @click="view_10OnClick" class="flex-col grid-item">
          <div class="flex-row group_6 justify-center">
            <img src="@/res/local/16383476693747637892.png" class="w-2 mr-2" />
            <span>赶过去</span>
          </div>
          <span>花费20MIB</span>
        </div>
        <div @click="view_11OnClick" class="grid-item items-center justify-center">属权证书</div>
        <div @click="view_12OnClick" class="grid-item flex-col items-center">
          <span>求购</span>
        </div>
        <div
          @click="view_6OnClick"
          class="flex-col items-center grid-item bg-gray-300 border-gray-400"
        >
          <span>建设</span>
        </div>-->
        <van-button type="primary" @click="modifyPlot" style="width: 100%;">编辑</van-button>
      </div>
    </div>

    <img src="@/res/local/16383476823485282095.png" class="image-close" @click="emit('close')" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import {
  plotPUT,
  plotPOST,
  plotGET,
  plotDELETE,
  plotGETbyId,
} from 'src/api/resource'
import Overlay from 'ol/Overlay'
import { Toast } from 'vant';
import { Dialog } from 'vant';

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Pagination
} from 'swiper';
SwiperCore.use([Pagination]);
const pagination = {
  "clickable": true,
  "renderBullet": function (index, className) {
    return '<span class=\"' + className + '\"></span>';
  }
}

const state = reactive({
  form: {
    address: '',
    name: '',
    price: '',
    income: '',
    area: '',
    extraBonus: '',
    pictures: []
  }
})
let { form } = toRefs(state);
//form是ref了需要通过 form.value 来设置

const router = useRouter()


const props = defineProps({
  id: {
    type: String,
    required: true,
  }
})


watchEffect(() => {
  props.id && plotGETbyId(props.id).then(r => {
    form.value = r.data
  });
})


onMounted(() => {
})







function deletePlot() {
  Dialog.confirm({
    title: '确认删除吗 ?',
  })
    .then(() => {
      // on confirm
      plotDELETE(props.id).then(r => {
        Toast('地块已删除');
        emit('deleted');
        emit('close');
      })
    })
    .catch(() => {
      // on cancel
    });
}
function modifyPlot() {
  emit('show-modify')
}



const emit = defineEmits(['close', 'show-modify', 'deleted']);

const view_9OnClick = () => {
  router.push({ name: 'index' })
}
const view_10OnClick = () => {
  router.push({ name: 'index' })
}
const view_11OnClick = () => {
  router.push({ name: 'index' })
}
const view_12OnClick = () => {
  router.push({ name: 'index' })
}
const view_6OnClick = () => {
  router.push({ name: 'index' })
}


</script>

<style scoped lang="less">
.group {
  @group-width: 300px; //213px;

  padding-top: 10.5px;
  width: @group-width;

  position: relative;

  .group-content {
    border-radius: 14px;
    background-color: rgb(255, 255, 255);
    border: solid 2.5px rgb(0, 181, 255);
    width: @group-width - 15px;

    .grid-item {
      padding: 10px;
      border-radius: 5px;
      border: solid 1px rgb(0, 181, 255);
      font-weight: 500;

      .image_1 {
        width: 12.5px;
        height: 12px;
      }
      .group_6 {
        color: rgb(0, 0, 0);
        font-size: 9px;
        line-height: 11px;
        white-space: nowrap;
        .image_2 {
          width: 11px;
          height: 11px;
        }
      }
    }
    .grid-item_1 {
      color: rgb(0, 0, 0);
      font-size: 9px;
      line-height: 11px;
      white-space: nowrap;
      padding: 9px 8px 8px;
      background-color: rgb(255, 255, 255);
      border-radius: 5px;
      border: solid 1px rgb(0, 181, 255);
    }

    .text-wrapper_2 {
      color: rgb(0, 0, 0);
      white-space: nowrap;
      background-color: rgb(233, 233, 233);
      border-radius: 5px;
      border: solid 1px rgb(208, 208, 208);
    }
  }
  .image-close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.custom-indicator {
  transform: translateY(-50px);
}

.swiper {
  :deep(.swiper-pagination-bullet-custom) {
    @size: 20px;
    width: @size !important;
    height: @size !important;
    line-height: @size !important;
    text-align: center;
    color: #353535;
    opacity: 0.7;
    background: rgba(#353535, 0.2);
    transition: all 0.25s;
    &:hover {
      opacity: 1;
    }
    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: #ffffff;
      background: #007aff;
    }
  }
}
</style>