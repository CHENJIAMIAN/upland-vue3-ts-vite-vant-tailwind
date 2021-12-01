<template>
  <div class="flex-col container">
    <div class="flex-col section_1">
      <img :src="img_16383320513030485964" class="image" />
      <img :src="img_16383320513037924020" class="image_1" />
    </div>
    <div class="flex-col group">
      <div class="flex-col section_2">
        <div class="flex-col group_1">
          <span class="text">灣仔皇后大道东200号利东街地下G31号舖</span>
          <div class="flex-row section_3">
            <span class="text_1">所有人</span>
            <div class="flex-row group_2">
              <img :src="img_16383320513030379613" class="icon" />
              <span class="text_2">Jack Ma</span>
            </div>
          </div>
        </div>
        <div class="justify-between group_3">
          <div class="flex-col">
            <div class="flex-col group_5">
              <span class="text_3">价格</span>
              <span class="text_4">30,000</span>
            </div>
            <div class="flex-col group_6">
              <span class="text_5">3,500</span>
              <span class="text_6">月收入</span>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex-col group_8">
              <span class="text_7">26</span>
              <span class="text_8">面积</span>
            </div>
            <div class="flex-col group_9">
              <span class="text_9">可获奖励</span>
              <span class="text_10">3,000~5,000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_10">
        <div class="flex-row equal-division">
          <div class="justify-center equal-division-item">
            <img :src="img_16383320513052924830" class="image_2" />
            <span class="text_11">购买</span>
          </div>
          <div class="flex-col equal-division-item_1">
            <div class="flex-row group_11">
              <img :src="img_16383320513065506706" class="image_3" />
              <span class="text_12">赶过去</span>
            </div>
            <span class="text_13">花费20MIB</span>
          </div>
          <div class="flex-col items-center equal-division-item_2">
            <span>建设</span>
          </div>
        </div>
        <div class="justify-center group_12">
          <div class="flex-col items-center text-wrapper">
            <span>属权证书</span>
          </div>
          <div class="flex-col items-center text-wrapper_1">
            <span>求购</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import img_16383320513030485964 from '@/assets/local/16383320513030485964.png'
import img_16383320513037924020 from '@/assets/local/16383320513037924020.png'
import img_16383320513030379613 from '@/assets/local/16383320513030379613.png'
import img_16383320513052924830 from '@/assets/local/16383320513052924830.png'
import img_16383320513065506706 from '@/assets/local/16383320513065506706.png'

import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    return {
      img_16383320513030485964,
      img_16383320513037924020,
      img_16383320513030379613,
      img_16383320513052924830,
      img_16383320513065506706,
    }
  },
})
</script>

<style scoped lang="css">
.container {
  padding-bottom: 3.38rem;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}
.section_1 {
  padding: 1.94rem 0.5rem 4.88rem;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61a6f330dc329c00111167d0/61a6f385dc329c001111685c/16383320487150496914.png');
  background-position: 0px 0px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.group {
  margin-top: -4.31rem;
  padding: 0 0.75rem;
  position: relative;
}
.image {
  width: 2.75rem;
  height: 2.75rem;
}
.image_1 {
  margin-top: 14rem;
  align-self: center;
  width: 3.13rem;
  height: 0.63rem;
}
.section_2 {
  padding: 0.94rem 1.25rem 0.66rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 0.38rem 0px rgba(0, 0, 0, 0.1),
    0px 0px 0.38rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.63rem;
  position: relative;
}
.group_10 {
  padding-top: 1.06rem;
}
.group_3 {
  margin-top: 0.094rem;
  padding: 0 0.56rem;
}
.group_12 {
  margin-top: 0.81rem;
  padding: 0 0.063rem;
  color: rgb(0, 0, 0);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
  position: relative;
}
.text {
  align-self: center;
  color: rgb(141, 141, 141);
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: right;
  width: 15.88rem;
}
.section_3 {
  margin-top: 0.63rem;
  padding: 0.63rem 0.75rem 0.75rem;
  background-color: rgba(216, 216, 216, 0.55);
  border-radius: 0.63rem;
}
.equal-division-item {
  padding: 1.19rem 1.25rem 1.06rem;
  flex: 1 1 7.19rem;
  color: rgb(255, 255, 255);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
  background-color: rgb(0, 181, 255);
  border-radius: 0.63rem;
  height: 3.75rem;
}
.equal-division-item_1 {
  margin-left: 0.69rem;
  padding: 0.63rem 0.63rem 0.19rem 0.88rem;
  flex: 1 1 7.19rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  height: 3.75rem;
  border: solid 0.13rem rgb(0, 181, 255);
}
.equal-division-item_2 {
  margin-left: 0.81rem;
  padding: 1.13rem 0 1rem;
  flex: 1 1 7.19rem;
  color: rgb(0, 0, 0);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
  background-color: rgb(233, 233, 233);
  border-radius: 0.63rem;
  height: 3.75rem;
  border: solid 0.13rem rgb(208, 208, 208);
}
.text-wrapper {
  padding: 1.13rem 0 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  position: absolute;
  left: 0.063rem;
  top: 50%;
  transform: translateY(-50%);
  width: 7.19rem;
  border: solid 0.13rem rgb(0, 181, 255);
}
.text-wrapper_1 {
  padding: 1.13rem 0 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  width: 7.19rem;
  border: solid 0.13rem rgb(0, 181, 255);
}
.text_1 {
  color: rgb(87, 87, 87);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.group_2 {
  margin-left: 3.19rem;
  margin-top: 0.13rem;
  color: rgb(0, 0, 0);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
}
.group_5 {
  padding: 0.53rem 0;
}
.group_6 {
  padding: 0.53rem 0 0.84rem;
  height: 4.38rem;
}
.group_8 {
  padding: 0.84rem 0 0.53rem;
  height: 4.38rem;
}
.group_9 {
  padding: 0.53rem 0 0.78rem;
}
.image_2 {
  width: 1.56rem;
  height: 1.5rem;
}
.text_11 {
  margin-left: 0.38rem;
}
.group_11 {
  color: rgb(0, 0, 0);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
}
.text_13 {
  margin-top: 0.25rem;
  align-self: center;
  color: rgb(0, 0, 0);
  font-size: 0.88rem;
  line-height: 1.06rem;
  white-space: nowrap;
}
.icon {
  width: 2.31rem;
  height: 2.31rem;
}
.text_2 {
  margin-left: 0.75rem;
  align-self: center;
}
.text_3 {
  color: rgb(173, 173, 173);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.text_4 {
  color: rgb(0, 181, 255);
  font-size: 2rem;
  line-height: 2.38rem;
  white-space: nowrap;
}
.text_5 {
  margin-top: 0.63rem;
  color: rgb(0, 0, 0);
  font-size: 2rem;
  line-height: 2.38rem;
  white-space: nowrap;
}
.text_6 {
  margin-top: -3rem;
  color: rgb(173, 173, 173);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.text_7 {
  margin-top: 0.63rem;
  color: rgb(0, 0, 0);
  font-size: 2rem;
  line-height: 2.38rem;
  white-space: nowrap;
}
.text_8 {
  margin-top: -3rem;
  color: rgb(173, 173, 173);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.text_9 {
  color: rgb(173, 173, 173);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.text_10 {
  color: rgb(0, 0, 0);
  font-size: 1.75rem;
  line-height: 2.13rem;
  white-space: nowrap;
}
.image_3 {
  width: 1.38rem;
  height: 1.38rem;
}
.text_12 {
  margin-left: 0.25rem;
  margin-right: 0.44rem;
}
</style>