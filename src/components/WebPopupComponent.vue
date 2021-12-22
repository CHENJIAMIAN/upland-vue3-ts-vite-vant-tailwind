<template>
  <div class="flex-col items-center webpopup">
    <div class="flex-col group">
      <img src="@/res/local/16383476823485282095.png" class="image-close" />

      <div class="flex-col group-content justify-end">
        <div class="flex-col section_2">
          <div class="flex-col group_3">
            <span class="text">{{adress}}</span>
            <div class="flex-row section_3">
              <span class="text_1">所有人</span>
              <div class="flex-row group_4">
                <img class="icon_1" :src="icon" />
                <span class="text_2">{{name}}</span>
              </div>
            </div>
          </div>
          <div class="flex-row equal-division">
            <div class="flex-col equal-division-item">
              <span class="text_3">价格</span>
              <span class="text_4">{{amount}}</span>
              <span class="text_5">{{income}}</span>
              <span class="text_6">月收入</span>
            </div>
            <div class="flex-col equal-division-item_1">
              <span class="text_8">面积</span>
              <span class="text_7">{{area}}</span>
              <span class="text_9">可获奖励</span>
              <span class="text_10">{{reward}}</span>
            </div>
          </div>
        </div>

        <div class="btn-group flex-row">
          <div @click="view_9OnClick" class="justify-evenly grid-item items-center" style="background:#01B4FE;color:white;flex: 1;justify-content: center;">
            <img src="@/res/local/16383476693745430978.png" class="image_1" />
            <span>购买</span>
          </div>
          <!-- <div @click="view_10OnClick" class="flex-col grid-item">
            <div class="flex-row group_6 justify-center">
              <img src="@/res/local/16383476693747637892.png" class="image_2" />
              <span class="text_12">赶过去</span>
            </div>
            <span class="text_13">花费20MIB</span>
          </div>
          <div @click="view_11OnClick" class="grid-item_1 flex-col items-center">
            <span>属权证书</span>
          </div>
          <div @click="view_12OnClick" class="grid-item_1 flex-col items-center">
            <span>求购</span>
          </div>
          <div @click="view_6OnClick" class="flex-col items-center text-wrapper_2">
            <span>建设</span>
          </div> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
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

    return {
      view_9OnClick,
      view_10OnClick,
      view_11OnClick,
      view_12OnClick,
      view_6OnClick,
      adress: '灣仔皇后大道东200号利东街地下G31号舖',
      amount: '30,000',
      income: '3,500',
      area: '26',
      reward: '3,000~5,000',
      icon: 'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61a6f330dc329c00111167d0/61a6f385dc329c001111685c/16383476693730436895.png',
      name: 'Jack Ma',
    }
  },
})
</script>

<style scoped lang="less">
.webpopup {
  padding: 15.5px 0 40.5px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  .group {
    @group-width: 300px; //213px;

    padding-top: 10.5px;
    width: @group-width;
    position: relative;
    .group-content {
      padding-bottom: 12px;
      overflow: hidden;
      border-radius: 14px;
      background-color: rgb(255, 255, 255);
      width: @group-width - 15px;
      height: 500px;
      border: solid 2.5px rgb(0, 181, 255);

      .section_2 {
        margin-left: 3px;
        padding: 7.5px 10px 7px 10px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1),
          0px 0px 3px 0px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        width: @group-width - 27px;
        .group_3 {
          .text {
            align-self: center;
            color: rgb(141, 141, 141);
            font-size: 10px;
            line-height: 12px;
            white-space: nowrap;
            text-align: right;
            overflow: hidden;
            display: inline-block;
            max-width: 250px;
            text-overflow: ellipsis;
          }
          .section_3 {
            margin-top: 5px;
            padding: 5px 6px 6px;
            background-color: rgba(216, 216, 216, 0.55);
            border-radius: 5px;
            .text_1 {
              color: rgb(87, 87, 87);
              font-size: 6px;
              line-height: 17px;
              white-space: nowrap;
            }
            .group_4 {
              margin-left: 25.5px;
              color: rgb(0, 0, 0);
              font-size: 9px;
              line-height: 11px;
              white-space: nowrap;
              .icon_1 {
                width: 18.5px;
                height: 18.5px;
              }
              .text_2 {
                margin: 3px 0 4.5px 6px;
                overflow: hidden;
                display: inline-block;
                max-width: 80px;
                text-overflow: ellipsis;
              }
            }
          }
        }
        .equal-division {
          margin-left: 4.5px;
          margin-right: 5px;
          .equal-division-item {
            padding: 4.5px 0 6px;
            height: 68.5px;
            .text_3 {
              color: rgb(173, 173, 173);
              font-size: 6px;
              line-height: 7px;
              white-space: nowrap;
            }
            .text_4 {
              color: rgb(0, 181, 255);
              font-size: 16px;
              line-height: 29px;
              white-space: nowrap;
            }
            .text_5 {
              margin-top: 14.5px;
              color: rgb(0, 0, 0);
              font-size: 16px;
              line-height: 19px;
              white-space: nowrap;
            }
            .text_6 {
              margin-top: -30px;
              color: rgb(173, 173, 173);
              font-size: 6px;
              line-height: 7px;
              white-space: nowrap;
            }
          }
          .equal-division-item_1 {
            margin-left: 29.5px;
            padding: 4.5px 0 6px;
            height: 68.5px;
            .text_7 {
              margin-top: 5px;
              color: rgb(0, 0, 0);
              font-size: 16px;
              line-height: 19px;
              white-space: nowrap;
            }
            .text_8 {
              margin-top: 3px;
              color: rgb(173, 173, 173);
              font-size: 6px;
              line-height: 7px;
              white-space: nowrap;
            }
            .text_9 {
              margin-top: 7px;
              color: rgb(173, 173, 173);
              font-size: 6px;
              line-height: 7px;
              white-space: nowrap;
            }
            .text_10 {
              color: rgb(0, 0, 0);
              font-size: 14px;
              line-height: 27px;
              white-space: nowrap;
            }
          }
        }
      }
      .btn-group {
        flex-wrap: wrap;
        gap: 10px;
        padding:10px;
        .grid-item {
          padding: 5px 5px 5px;
          background-color: rgb(255, 255, 255);
          border-radius: 5px;
          border: solid 1px rgb(0, 181, 255);
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
            .text_12 {
              margin-left: 2px;
            }
          }
          .text_13 {
            margin-top: 2px;
            align-self: center;
            color: rgb(0, 0, 0);
            font-size: 3px;
            line-height: 8.5px;
            white-space: nowrap;
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
          padding: 9px 0 8px;
          color: rgb(0, 0, 0);
          font-size: 9px;
          line-height: 11px;
          white-space: nowrap;
          background-color: rgb(233, 233, 233);
          border-radius: 5px;
          width: 57.5px;
          height: 30px;
          border: solid 1px rgb(208, 208, 208);
        }
      }
    }
    .image-close {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>