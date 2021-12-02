<template>

  <div class="flex-col container">
    <div class="header">
      <div class="action fl" @click="router.back()">
        <van-icon name="arrow-left" size="20" color="black" />
      </div>
    </div>
    <div class="flex-col btn-group">
      <div class="flex-col section_2">
        <div class="flex-col group_1">
          <span class="text">{{adress}}</span>
          <div class="flex-row section_3">
            <span class="text_1">所有人</span>
            <div class="flex-row group_2">
              <img src="@/res/local/16383320513052924830.png" class="image_2" />
              <span class="text_2">{{name}}</span>
            </div>
          </div>
        </div>
        <div class="justify-between group_3">
          <div class="flex-col">
            <div class="flex-col group_5">
              <span class="text_3">价格</span>
              <span class="text_4">{{price}}</span>
            </div>
            <div class="flex-col group_6">
              <span class="text_5">{{income}}</span>
              <span class="text_6">月收入</span>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex-col group_8">
              <span class="text_7">{{area}}</span>
              <span class="text_8">面积</span>
            </div>
            <div class="flex-col group_9">
              <span class="text_9">可获奖励</span>
              <span class="text_10">{{reward}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_10">
        <div class="flex-row equal-division">
          <div @click="view_11OnClick" class="justify-center equal-division-item">
            <img src="@/res/local/16383476693745430978.png" class="image_3" />
            <span class="text_11">购买</span>
          </div>
          <div @click="view_12OnClick" class="flex-col equal-division-item_1">
            <div class="flex-row group_11">
              <img src="@/res/local/16383476693747637892.png" class="image_4" />
              <span class="text_12">赶过去</span>
            </div>
            <span class="text_13">花费20MIB</span>
          </div>
          <div @click="view_13OnClick" class="flex-col items-center equal-division-item_2">
            <span>建设</span>
          </div>
          <div @click="view_14OnClick" class="flex-col items-center text-wrapper">
            <span>属权证书</span>
          </div>
          <div @click="view_15OnClick" class="flex-col items-center text-wrapper">
            <span>求购</span>
          </div>
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

    const view_11OnClick = () => {
      router.push({ name: 'index' })
    }
    const view_12OnClick = () => {
      router.push({ name: 'index' })
    }

    const view_13OnClick = () => {
      router.push({ name: 'index' })
    }
    const view_14OnClick = () => {
      router.push({ name: 'index' })
    }
    const view_15OnClick = () => {
      router.push({ name: 'index' })
    }

    return {
      router,
      view_11OnClick,
      view_12OnClick,
      view_13OnClick,
      view_14OnClick,
      view_15OnClick,
      adress: '灣仔皇后大道东200号利东街地下G31号舖',
      name: 'Jack Ma',
      price: '30,000',
      income: '3,500',
      area: '26',
      reward: '3,000~5,000',
    }
  },
})
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
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61a6f330dc329c00111167d0/61a6f385dc329c001111685c/16383320487150496914.png');
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
    padding-top: 69px;
    padding-bottom: 100px;
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
          width: 254px;
          overflow: hidden;
          display: inline-block;
          max-width: 200px;
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
          padding: 10px 0 3px 14px;
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
</style>