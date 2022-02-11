<template>
  <van-dialog
    :lazy-render="false"
    v-model:show="vantshow"
    width="90%"
    show-cancel-button
    @confirm="root?.onSubmit(), root?.onCancel()"
    @cancel="root?.onCancel()"
  >
    <div class="text-center my-2 relative" slot="title">
      <van-button v-if="props.id" size="small" type="primary" @click="deletePlot" class="!absolute left-3">删除地块</van-button>地块信息
    </div>
    <DrawPolygon
      :id="props.id"
      ref="root"
      @drawend="vantshow = true"
      @submit="emit('submit')"
      @close="(vantshow = false), emit('close')"
    />
  </van-dialog>
</template>

<script lang="ts" setup>
import DrawPolygon from 'src/components/DrawPolygon.vue';
import { createVNode, customRef, defineAsyncComponent, defineComponent, defineCustomElement, defineSSRCustomElement, devtools, effect, effectScope, getCurrentInstance, getCurrentScope, getTransitionRawChildren, guardReactiveProps, h, handleError, hydrate, initCustomFormatter, initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef, isRuntimeOnly, isVNode, markRaw, mergeDefaults, mergeProps, nextTick, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, proxyRefs, pushScopeId, queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler, render, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey, ssrUtils, stop, toDisplayString, toHandlerKey, toHandlers, toRaw, toRef, toRefs, transformVNodeArgs, triggerRef, unref, useAttrs, useCssModule, useCssVars, useSSRContext, useSlots, useTransitionState, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, version, warn$1 as warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withKeys, withMemo, withModifiers, withScopeId } from 'vue'
import {
  plotDELETE,
} from 'src/api/resource'
import { Toast } from 'vant';
import { Dialog } from 'vant';


const vantshow = ref(false);
const root = ref<InstanceType<typeof DrawPolygon>>();

const props = defineProps({
  id: {
    type: String,
    required: true,
  }
})
const emit = defineEmits(['close']);

function toggleShow(bool: boolean) {
  vantshow.value = bool;
}
defineExpose({ root, toggleShow })


function deletePlot() {
  Dialog.confirm({
    title: '确认删除吗 ?',
  })
    .then(() => {
      // on confirm
      plotDELETE(props.id).then(r => {
        Toast('地块已删除');
        root?.value.onCancel()
      })
    })
    .catch(() => {
      // on cancel
    });
}
</script>


<style scoped lang="less">
</style>

