<template>
    <div class="box-card">
        <!-- {{ form.area }}
    {{ form.geojson }}-->
        <van-form
            @submit="
                () => {
                    onSubmit();
                    onCancel();
                }
            "
        >
            <van-cell-group inset>
                <!-- <van-field v-model="form.styleColor" name="styleColor" placeholder="图层颜色" /> -->

                <van-field
                    v-model="form.address"
                    name="address"
                    placeholder="地址（可修改）"
                    label="地址"
                />
                <van-field
                    v-model="form.rightPerson"
                    name="rightPerson"
                    placeholder="所属人（这个应该是不能改的只能交易后去更改，暂无，先做静态）"
                    label="所属人"
                />
                <!-- <van-field
          v-model="form.rightPersonName"
          name="rightPersonName"
          placeholder="所有人的昵称"
          label="所有人的昵称"
        />
        <van-field
          v-model="form.rightPersonAvatar"
          name="rightPersonAvatar"
          placeholder="所有人的头像"
          label="所有人的头像"
        /> -->
                <van-field
                    v-model="form.price"
                    name="price"
                    placeholder="价格（可修改）"
                    label="价格"
                />
                <van-field name="area" label="面积（划地块的时候自动计算）">
                    <template #input>{{ form.area }}</template>
                </van-field>
                <!-- <van-field v-model="form.level" name="level" placeholder="地块等级" label="地块等级" /> -->
                <van-field
                    v-model="form.income"
                    name="income"
                    placeholder="收益（这个应该是有公式算出来的，暂无先做静态）"
                    label="收益"
                />
                <van-field
                    v-model="form.extraBonus"
                    name="extraBonus"
                    placeholder="获得额外激励奖励"
                    label="获得额外激励奖励"
                />
                <van-field name="saleState" label="销售状态">
                    <template #input>
                        <van-radio-group
                            v-model="form.saleState"
                            direction="horizontal"
                        >
                            <van-radio name="cansale">可销售</van-radio>
                            <van-radio name="saled">已售</van-radio>
                            <van-radio name="unsaled">未出售</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field
                    v-model="form.pictrues"
                    name="pictrues"
                    placeholder="地块图片（可修改）"
                    label="地块图片"
                />
            </van-cell-group>

            <!-- 每个元素的两侧间隔相等 -->
            <!-- <van-row justify="space-around">
        <van-col span="6"></van-col>
        <van-col span="6">
          <van-button type="primary" native-type="submit">立即创建</van-button>
        </van-col>
        <van-col span="6">
          <van-button @click="onCancel">取消</van-button>
        </van-col>
        <van-col span="6"></van-col>
      </van-row> -->
        </van-form>
    </div>
</template>

<script lang="ts" setup>
import { Circle } from 'ol/geom';
import Feature from 'ol/Feature';
import { Vector as VectorSource, WMTS } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import GeometryType from 'ol/geom/GeometryType';
import { Fill, Stroke, Style } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';
import { Draw, Modify } from 'ol/interaction';
import Overlay from 'ol/Overlay';
import * as turf from '@turf/turf';
import {
    BaseTransition,
    Comment,
    EffectScope,
    Fragment,
    KeepAlive,
    ReactiveEffect,
    Static,
    Suspense,
    Teleport,
    Text,
    Transition,
    TransitionGroup,
    VueElement,
    callWithAsyncErrorHandling,
    callWithErrorHandling,
    camelize,
    capitalize,
    cloneVNode,
    compatUtils,
    compileToFunction as compile,
    computed,
    createApp,
    createBlock,
    createCommentVNode,
    createElementBlock,
    createBaseVNode as createElementVNode,
    createHydrationRenderer,
    createPropsRestProxy,
    createRenderer,
    createSSRApp,
    createSlots,
    createStaticVNode,
    createTextVNode,
    createVNode,
    customRef,
    defineAsyncComponent,
    defineComponent,
    defineCustomElement,
    defineSSRCustomElement,
    devtools,
    effect,
    effectScope,
    getCurrentInstance,
    getCurrentScope,
    getTransitionRawChildren,
    guardReactiveProps,
    h,
    handleError,
    hydrate,
    initCustomFormatter,
    initDirectivesForSSR,
    inject,
    isMemoSame,
    isProxy,
    isReactive,
    isReadonly,
    isRef,
    isRuntimeOnly,
    isVNode,
    markRaw,
    mergeDefaults,
    mergeProps,
    nextTick,
    normalizeClass,
    normalizeProps,
    normalizeStyle,
    onActivated,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onDeactivated,
    onErrorCaptured,
    onMounted,
    onRenderTracked,
    onRenderTriggered,
    onScopeDispose,
    onServerPrefetch,
    onUnmounted,
    onUpdated,
    openBlock,
    popScopeId,
    provide,
    proxyRefs,
    pushScopeId,
    queuePostFlushCb,
    reactive,
    readonly,
    ref,
    registerRuntimeCompiler,
    render,
    renderList,
    renderSlot,
    resolveComponent,
    resolveDirective,
    resolveDynamicComponent,
    resolveFilter,
    resolveTransitionHooks,
    setBlockTracking,
    setDevtoolsHook,
    setTransitionHooks,
    shallowReactive,
    shallowReadonly,
    shallowRef,
    ssrContextKey,
    ssrUtils,
    stop,
    toDisplayString,
    toHandlerKey,
    toHandlers,
    toRaw,
    toRef,
    toRefs,
    transformVNodeArgs,
    triggerRef,
    unref,
    useAttrs,
    useCssModule,
    useCssVars,
    useSSRContext,
    useSlots,
    useTransitionState,
    vModelCheckbox,
    vModelDynamic,
    vModelRadio,
    vModelSelect,
    vModelText,
    vShow,
    version,
    warn$1 as warn,
    watch,
    watchEffect,
    watchPostEffect,
    watchSyncEffect,
    withAsyncContext,
    withCtx,
    withDefaults,
    withDirectives,
    withKeys,
    withMemo,
    withModifiers,
    withScopeId,
} from 'vue';
// import { uploadLayerData } from "@/api/gis.js";
import { map } from 'src/views/HomePage.vue';

import {
    plotPOST,
    plotGET,
    plotDELETE,
    plotGETbyId,
} from 'src/api/resource.ts';

let drawLInteraction = null;
let modifyLInteraction = null;

let drawL = null;
let drawS = null;

const form = reactive({
    styleColor: 'rgba(10, 73, 140, 0.8)',
    geojson: '',
    //
    address: '',
    rightPerson: '',
    // "rightPersonName": "",
    // "rightPersonAvatar": "",
    price: '',
    area: '',
    // "level": "",
    income: '',
    extraBonus: '',
    saleState: 'cansale',
    pictrues: '',
});

const emit = defineEmits(['drawend', 'close']);
defineExpose({ initAndStartDraw, onSubmit, onCancel });

watch(
    () => form.styleColor,
    (n, v) => {
        setLayerStyleColor(n);
    }
);

onMounted(() => {});

onUnmounted(() => {
    onCancel();
});

function initAndStartDraw() {
    nextTick(() => {
        initDrawLayer();
        startDrawLayer();
    });
}

function setLayerStyleColor(color) {
    drawL.setStyle(
        new Style({
            stroke: new Stroke({ width: 1, color: 'lightblue' }),
            fill: new Fill({ color: color }),
        })
    );
}

function onSubmit() {
    debugger;
    console.log(form);
    if (!form.geojson) {
        return;
    }
    plotPOST(form).then((result) => {});
    if (drawS.getFeatures().length < 1) {
        $message.error('未绘制图层');
        return;
    }
}

function onCancel() {
    if (!olmap || !drawS) return;
    olmap.removeInteraction(drawLInteraction);
    olmap.removeInteraction(modifyLInteraction);
    drawS.clear();
    olmap.removeLayer(drawL);
    emit('close');
}

function initDrawLayer() {
    drawS = new VectorSource({ wrapX: false });
    const vector = (drawL = new VectorLayer({
        name: '自定义绘制图层',
        source: drawS,
    }));
    if (!olmap) return;
    olmap.addLayer(vector);
    // 绘制
    const draw = (drawLInteraction = new Draw({
        source: drawS,
        type: GeometryType.POLYGON,
    }));
    draw.on('drawend', (evt) => {
        const geom = evt.feature.getGeometry();
        const coordinates = geom.getCoordinates()[0];
        const area = evt.feature.getGeometry().getArea();
        form.area = '' + Math.round(area);

        // console.log("drawend");
        // console.log(evt.feature.getGeometry().getCoordinates());
        // 此刻获取不到刚绘制的图形
        // saveDrawLayerGson();
        nextTick(() => {
            // 在异步的微任务里可以获取到图形
            saveDrawLayerGson();
            emit('drawend', area);
        });
    });
    // 修改
    const modify = (modifyLInteraction = new Modify({
        source: drawS,
    }));
    modify.on('modifyend', (evt) => {
        // const area = evt.feature.getGeometry().getArea();
        // console.log("modifyend");
        // console.log(
        //   evt.features
        //     .getArray()[0]
        //     .getGeometry()
        //     .getCoordinates()
        // );
        saveDrawLayerGson();
        debugger;
        emit('drawend');
    });
}
// 开始地块标绘
function startDrawLayer() {
    olmap.addInteraction(drawLInteraction);
    olmap.addInteraction(modifyLInteraction);
}

function saveDrawLayerGson() {
    const drawLfeas = drawL.getSource().getFeatures();
    const gson = new GeoJSON().writeFeatures(drawLfeas, {
        featureProjection: 'EPSG:3857', // 3857(单位米),设置后返回的是经纬度
    });
    form.geojson = gson;
    setLayerStyleColor(form.styleColor);
}
</script>

<style scoped lang="less"></style>
