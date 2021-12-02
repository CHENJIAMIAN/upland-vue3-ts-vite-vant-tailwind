<template>

  <div class="flex-col items-center section_1">
    <div class="flex-col list">
      <div class="flex-col items-center head">
        <span class="text">你购买的地块</span>
        <span class="text_1">收集你获得的MIB</span>
      </div>
      <div class="list-item flex-row" :key="i" v-for="(item, i) in plotList">
        <img src="@/res/local/dingwei.png" class="image" />
        <span class="text_2">{{item.address}}</span>
        <div class="right-section flex-col items-center">
          <img src="@/res/local/16383475650108381273.png" class="icon" />
          <div class="bottom-group">
            <span class="text_4">{{item.amount}}</span>
            <span class="text_5">MIB</span>
          </div>
        </div>
      </div>
      <div @click="view_5OnClick" class="flex-col items-center button-collect">
        <span>收集全部</span>
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
    const view_5OnClick = () => {
      router.back()
    }

    return {
      view_5OnClick,
      plotList: [
        { address: '灣仔皇后大道东200号利东街地下G31号舖', amount: '300' },
        { address: '灣仔皇后大道东200号利东街G24-25号舖', amount: '100' },
      ],
    }
  },
})
</script>

<style scoped lang="less">
.section_1 {
  padding-bottom: 1px;
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  padding: 170px 0 90px;
  background-color: rgba(0, 0, 0, 0.1);
  .list {
    padding-bottom: 25px;
    background-color: rgb(255, 255, 255);
    border-radius: 19px;
    .head {
      padding: 16px 0 22px;
      .text {
        color: rgb(0, 0, 0);
        font-size: 21px;
        font-weight: 600;
        line-height: 29px;
        white-space: nowrap;
      }
      .text_1 {
        margin-top: 9px;
        color: rgb(0, 0, 0);
        font-size: 16px;
        line-height: 22px;
        white-space: nowrap;
      }
    }
    .list-item {
      padding: 10px 9px 8px;
      background-color: rgb(255, 255, 255);
      border-top: solid 1px rgba(0, 0, 0, 0.2);
      .image {
        align-self: center;
        width: 16px;
        height: 16px;
      }
      .text_2 {
        margin-left: 8px;
        align-self: center;
        color: rgb(141, 141, 141);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: left;
        width: 180px;
      }
      .right-section {
        margin-left: 19px;
        padding: 3px 0 9px;
        background-color: rgb(0, 181, 255);
        border-radius: 12px;
        width: 71px;
        height: 60px;
        border: solid 2px rgb(0, 0, 0);
        .icon {
          width: 25px;
          height: 25px;
        }
        .bottom-group {
          white-space: nowrap;
          .text_4 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            line-height: 19px;
          }
          .text_5 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
    .button-collect {
      margin-top: 221px;
      padding: 12px 0 16px;
      align-self: center;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      white-space: nowrap;
      background-color: rgb(0, 181, 255);
      border-radius: 8px;
      width: 268px;
    }
  }
}
</style>