<template>
  <div class="flex-col container">
    <div class="flex-col section_1">
      <img :src="img_16383320649673976405" class="image" />
      <img :src="img_1638332065327472889" class="image_1" />
    </div>
    <div class="flex-col group">
      <div class="flex-col section_2">
        <div class="flex-col group_1">
          <span class="text">灣仔皇后大道东200号利东街G24-25号舖</span>
          <div class="justify-center section_3">
            <span class="text_1">所有人</span>
            <div class="flex-row group_2">
              <img :src="img_16383320513065506706" class="image_2" />
              <span class="text_2">TungTung (自己)</span>
            </div>
          </div>
        </div>
        <div class="justify-between group_3">
          <div class="flex-col">
            <div class="flex-col group_5">
              <span class="text_3">价格</span>
              <span class="text_4">40,000</span>
            </div>
            <div class="flex-col group_6">
              <span class="text_5">5,000</span>
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
              <span class="text_10">5,000~6,000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col group_10">
        <div class="flex-row group_11">
          <div class="flex-col items-center text-wrapper">
            <span>出售</span>
          </div>
          <div class="flex-col section_4">
            <div class="flex-row group_12">
              <img: src="" class="image_3" />
              <span class="text_12">赶过去</span>
            </div>
            <span class="text_13">花费20MIB</span>
          </div>
          <div class="flex-col items-center text-wrapper_1">
            <span>建设</span>
          </div>
        </div>
        <div class="justify-center group_13">
          <div class="flex-col items-center text-wrapper_2">
            <span>属权证书</span>
          </div>
          <div class="flex-col items-center text-wrapper_3">
            <span>求购</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import img_16383320649673976405 from '@/assets/local/16383320649673976405.png'
import img_16383320653274728893 from '@/assets/local/16383320653274728893.png'
import img_16383320513065506706 from '@/assets/local/16383320513065506706.png'
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    return {
      img_16383320649673976405,
      img_16383320653274728893,
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
  padding: 1.94rem 0.5rem 4.56rem;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61a6f330dc329c00111167d0/61a6f385dc329c001111685c/16383320487222355979.png');
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
  margin-top: 13.75rem;
  align-self: center;
  width: 4.25rem;
  height: 1.19rem;
}
.section_2 {
  padding: 0.94rem 1rem 0.66rem;
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
  padding: 0 0.81rem;
}
.group_13 {
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
  margin-right: 0.5rem;
  margin-top: 0.63rem;
  padding: 0.75rem 0.75rem;
  background-color: rgba(216, 216, 216, 0.55);
  border-radius: 0.63rem;
  position: relative;
}
.text-wrapper {
  padding: 1.13rem 0 1rem;
  flex: 1 1 7.19rem;
  color: rgb(0, 0, 0);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  height: 3.75rem;
  border: solid 0.13rem rgb(0, 181, 255);
}
.section_4 {
  margin-left: 0.69rem;
  padding: 0.63rem 0.63rem 0.19rem 0.88rem;
  flex: 1 1 7.19rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  height: 3.75rem;
  border: solid 0.13rem rgb(0, 181, 255);
}
.text-wrapper_1 {
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
.text-wrapper_2 {
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
.text-wrapper_3 {
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
  position: absolute;
  left: 0.75rem;
  top: 0.63rem;
}
.group_2 {
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
.group_12 {
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
.image_2 {
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