<template>
  <div class="flex-col container">
    <div class="header">
      <div class="action fl" @click="router.back()">
        <van-icon name="arrow-left" size="20" color="black" />
      </div>
    </div>
    <swiper ref="mySwiper" class="my-swipe rounded-t-xl" :pagination="pagination">
      <swiper-slide v-if="form.pictures.length > 0" v-for="imgSrc in form.pictures">
        <img :src="imgSrc" draggable="false" />
      </swiper-slide>
    </swiper>
    <div class="flex-col btn-group">
      <div class="flex-col section_2">
        <div class="flex-col group_1">
          <span class="text">{{ form.address }}</span>
          <div class="flex-row section_3">
            <span class="text_1">所有人</span>
            <div class="flex-row group_2">
              <img src="@/res/local/16383320513052924830.png" class="image_2" />
              <span class="text_2">{{ form.name }}</span>
            </div>
          </div>
        </div>
        <div class="justify-between group_3">
          <div class="flex-col">
            <div class="flex-col group_5">
              <span class="text_3">价格</span>
              <span class="text_4">{{ form.price }}</span>
            </div>
            <div class="flex-col group_6">
              <span class="text_5">{{ form.income }}</span>
              <span class="text_6">月收入</span>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex-col group_8">
              <span class="text_7">{{ form.area }}</span>
              <span class="text_8">面积</span>
            </div>
            <div class="flex-col group_9">
              <span class="text_9">可获奖励</span>
              <span class="text_10">{{ form.extraBonus }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_10">
        <div class="flex-row equal-division">
          <div @click="handleBuy" class="justify-center equal-division-item">
            <img src="@/res/local/16383476693745430978.png" class="image_3" />
            <span class="text_11">购买</span>
          </div>
          <div @click="handleGoTo" class="flex-col equal-division-item_1">
            <div class="flex-row group_11">
              <img src="@/res/local/16383476693747637892.png" class="image_4" />
              <span class="text_12">赶过去</span>
            </div>
            <span class="text_13">花费20MIB</span>
          </div>
          <div @click="handleBuild" class="flex-col items-center equal-division-item_2">
            <span>建设</span>
          </div>
          <div @click="handleCertBook" class="flex-col items-center text-wrapper">
            <span>属权证书</span>
          </div>
          <div @click="handleRequestBuy" class="flex-col items-center text-wrapper">
            <span>求购</span>
          </div>
          <van-button type="danger" style="width: 100%;">编辑</van-button>
          <van-uploader :after-read="afterRead" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  plotPUT,
  plotPOST,
  plotGET,
  plotDELETE,
  plotGETbyId,
  uploadSingle,
} from 'src/api/resource'
import Overlay from 'ol/Overlay'

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

const router = useRouter()
const id = router.currentRoute.value.params.id as string;

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

plotGETbyId(id).then(r => form.value = r.data);

function afterRead(file) {
  // 此时可以自行将文件上传至服务器
  console.log('file', file);

  let formData = new FormData();
  //file是当前file对象, 此对象包含file和content
  formData.append('file', file.file)

  uploadSingle(formData).then(r => {
    form.value.pictures.push(r.data.path);//包含了依赖的对象

    plotPUT({ ...form.value }).then((result) => { });
  })

};
function deletePlot() {
  plotDELETE(id).then(r => {
    router.back()
  })
}
function handleBuy() {
  router.push({ name: 'index' })
}
function handleGoTo() {
  router.push({ name: 'index' })
}
function handleBuild() {
  router.push({ name: 'index' })
}
function handleCertBook() {
  router.push({ name: 'index' })
}
function handleRequestBuy() {
  router.push({ name: 'index' })
}


</script>

<style scoped lang="less">
.container {
  padding-bottom: 54px;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;

  .header {
    position: absolute;
    padding-bottom: 50px;
    z-index: 1;
    .action {
      position: absolute;
      color: #ffffff;
      top: 12px;
      &.fl {
        left: 12px;
      }
    }
  }
  .section_1 {
    padding: 31px 8px 78px;
    background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61a6f330dc329c00111167d0/61a6f385dc329c001111685c/16383320487150496914.png");
    background-position: 0px 0px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .image {
      width: 44px;
      height: 44px;
    }
    .image_1 {
      margin-top: 224px;
      align-self: center;
      width: 50px;
      height: 10px;
    }
  }
  .btn-group {
    padding: 0 12px;
    position: absolute;
    bottom: 0;
    .section_2 {
      padding: 15px 20px 10.5px;
      background-color: rgb(255, 255, 255);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1),
        0px 0px 6px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      position: relative;
      .group_1 {
        .text {
          align-self: center;
          color: rgb(141, 141, 141);
          font-size: 20px;
          line-height: 24px;
          white-space: nowrap;
          text-align: right;
          overflow: hidden;
          display: inline-block;
          max-width: 400px;
          text-overflow: ellipsis;
        }
        .section_3 {
          margin-top: 10px;
          padding: 10px 12px 12px;
          background-color: rgba(216, 216, 216, 0.55);
          border-radius: 10px;
          .text_1 {
            color: rgb(87, 87, 87);
            font-size: 12px;
            line-height: 40px;
            white-space: nowrap;
          }
          .group_2 {
            margin-left: 51px;
            margin-top: 2px;
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 22px;
            white-space: nowrap;
            .image_2 {
              width: 37px;
              height: 37px;
            }
            .text_2 {
              margin-left: 12px;
              align-self: center;
              overflow: hidden;
              display: inline-block;
              max-width: 180px;
              text-overflow: ellipsis;
            }
          }
        }
      }
      .group_3 {
        margin-top: 1.5px;
        padding: 0 9px;
        .group_5 {
          padding: 8.5px 0;
          .text_3 {
            color: rgb(173, 173, 173);
            font-size: 12px;
            line-height: 14px;
            white-space: nowrap;
          }
          .text_4 {
            color: rgb(0, 181, 255);
            font-size: 32px;
            line-height: 38px;
            white-space: nowrap;
          }
        }
        .group_6 {
          padding: 8.5px 0 13.5px;
          height: 70px;
          .text_5 {
            margin-top: 10px;
            color: rgb(0, 0, 0);
            font-size: 32px;
            line-height: 38px;
            white-space: nowrap;
          }
          .text_6 {
            margin-top: -48px;
            color: rgb(173, 173, 173);
            font-size: 12px;
            line-height: 14px;
            white-space: nowrap;
          }
        }
        .group_8 {
          padding: 13.5px 0 8.5px;
          height: 70px;
          .text_7 {
            margin-top: 10px;
            color: rgb(0, 0, 0);
            font-size: 32px;
            line-height: 38px;
            white-space: nowrap;
          }
          .text_8 {
            margin-top: -48px;
            color: rgb(173, 173, 173);
            font-size: 12px;
            line-height: 14px;
            white-space: nowrap;
          }
        }
        .group_9 {
          padding: 8.5px 0 12.5px;
          .text_9 {
            color: rgb(173, 173, 173);
            font-size: 12px;
            line-height: 14px;
            white-space: nowrap;
          }
          .text_10 {
            color: rgb(0, 0, 0);
            font-size: 28px;
            line-height: 34px;
            white-space: nowrap;
          }
        }
      }
    }
    .group_10 {
      padding-top: 17px;
      .equal-division {
        flex-wrap: wrap;
        gap: 10px;
        .equal-division-item {
          padding: 19px 20px 17px;
          flex: 1 1 115px;
          color: rgb(255, 255, 255);
          font-size: 18px;
          line-height: 22px;
          white-space: nowrap;
          background-color: rgb(0, 181, 255);
          border-radius: 10px;
          height: 60px;
          .image_3 {
            width: 25px;
            height: 24px;
          }
          .text_11 {
            margin-left: 6px;
          }
        }
        .equal-division-item_1 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 115px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          height: 60px;
          border: solid 2px rgb(0, 181, 255);
          .group_11 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 22px;
            white-space: nowrap;
            .image_4 {
              width: 22px;
              height: 22px;
            }
            .text_12 {
              margin-left: 4px;
            }
          }
          .text_13 {
            margin-top: 4px;
            align-self: center;
            color: rgb(0, 0, 0);
            font-size: 14px;
            line-height: 17px;
            white-space: nowrap;
          }
        }
        .equal-division-item_2 {
          padding: 18px 0 16px;
          flex: 1 1 115px;
          color: rgb(0, 0, 0);
          font-size: 18px;
          line-height: 22px;
          white-space: nowrap;
          background-color: rgb(233, 233, 233);
          border-radius: 10px;
          height: 60px;
          border: solid 2px rgb(208, 208, 208);
        }
      }
      .text-wrapper {
        padding: 18px 0 16px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        width: 115px;
        border: solid 2px rgb(0, 181, 255);
      }
    }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>