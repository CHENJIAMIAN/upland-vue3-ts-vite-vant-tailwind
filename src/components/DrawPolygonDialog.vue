<template>
      <van-dialog
            :lazy-render="false"
            v-model:show="vantshow"
            width="90%"
            title="地块信息"
            show-cancel-button
            @confirm="root && (root.onSubmit(), root.onCancel())"
            @cancel="root && root.onCancel()"
        >
            <DrawPolygon
                ref="root"
                @drawend="vantshow = true"
                @close="(vantshow = false), emit('close')"
            />
        </van-dialog>
</template>

<script lang="ts" setup>
import DrawPolygon from 'src/components/DrawPolygon.vue';
import { createVNode, customRef, defineAsyncComponent, defineComponent, defineCustomElement, defineSSRCustomElement, devtools, effect, effectScope, getCurrentInstance, getCurrentScope, getTransitionRawChildren, guardReactiveProps, h, handleError, hydrate, initCustomFormatter, initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef, isRuntimeOnly, isVNode, markRaw, mergeDefaults, mergeProps, nextTick, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, proxyRefs, pushScopeId, queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler, render, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey, ssrUtils, stop, toDisplayString, toHandlerKey, toHandlers, toRaw, toRef, toRefs, transformVNodeArgs, triggerRef, unref, useAttrs, useCssModule, useCssVars, useSSRContext, useSlots, useTransitionState, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, version, warn$1 as warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withKeys, withMemo, withModifiers, withScopeId } from 'vue'

const vantshow = ref(false);
const root = ref(null);

const emit = defineEmits(['close']);
defineExpose({ root })

</script>


<style scoped lang="less">
</style>

