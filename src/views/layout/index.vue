<template>
  <div class="layout-index">
    <router-view v-slot="{ Component }">
      <keep-alive :include="includeRoutes">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <div class="bottom-bar">
      <van-tabbar v-model="active" active-color="#85a5ff">
        <van-tabbar-item name="/HomePage" icon="location-o">地图</van-tabbar-item>
        <van-tabbar-item name="/about" icon="diamond-o">发现</van-tabbar-item>
        <van-tabbar-item name="#">
          <template #icon="props">
            <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
            <div class="flex-col items-end group_4">
              <div class="flex-row section_6">
                <span class="text_7">{{ amout2 }}</span>
                <span class="text_8">MIB</span>
              </div>
              <img src="@/res/remote/f89deecbf8a342c7793e709fa3979203.png" class="image_5" />
            </div>
          </template>
        </van-tabbar-item>

        <!-- <div class="flex-col items-center section_5">
          <img src="@/res/local/16383476051378359036.png" class="image_2" />
          <span class="text_5">地图</span>
        </div>
        <div class="flex-col items-center group_3">
          <img src="@/res/local/16383476051375272679.png" class="image_2" />
          <span class="text_6">发现</span>
        </div>-->
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'LAYOUT',
  setup() {
    const router = useRouter()
    const state = reactive({
      active: '/home',
      includeRoutes: ['ABOUT'],
    })
    watch(
      () => state.active,
      (val) => {
        router.push(val)
      }
    )

    onMounted(() => {
      state.active = router.currentRoute.value.path
    })
    return {
      amout2: '2000',
      ...toRefs(state),
    }
  },
})
</script>
<style lang="less" scoped>
// @import "@assets/style/mixin.scss";
.layout-index {
}
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
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
</style>
