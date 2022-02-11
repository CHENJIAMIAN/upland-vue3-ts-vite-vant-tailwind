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

                <van-field v-model="form.address" name="address" placeholder="地址（可修改）" label="地址" />
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
                />-->
                <van-field v-model="form.price" name="price" placeholder="价格（可修改）" label="价格" />
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
                        <van-radio-group v-model="form.saleState" direction="horizontal">
                            <van-radio name="cansale">可销售</van-radio>
                            <van-radio name="saled">已售</van-radio>
                            <van-radio name="unsaled">未出售</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <!-- <van-field
                    v-model="form.pictures"
                    name="pictures"
                    placeholder="地块图片（可修改）"
                    label="地块图片"
                />-->
                <van-field label="图片上传">
                    <template #input>
                        <van-uploader :after-read="afterRead" deletable />
                        <template v-if="form.pictures.length > 0" v-for="imgSrc in form.pictures">
                            <van-image :src="imgSrc" width="80">
                                <div
                                    role="button"
                                    class="van-uploader__preview-delete"
                                    tabindex="0"
                                    aria-label="删除"
                                    @click="removeImg(imgSrc)"
                                >
                                    <i
                                        class="van-badge__wrapper van-icon van-icon-cross van-uploader__preview-delete-icon"
                                        style="transform: scale(0.7) translate(10%, -60%);"
                                    >
                                        <!---->
                                        <!---->
                                        <!---->
                                    </i>
                                </div>
                            </van-image>
                        </template>
                    </template>
                </van-field>
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
            </van-row>-->
        </van-form>
    </div>
</template>

<script lang="ts" setup>
import GeoJSON from 'ol/format/GeoJSON';
import { Geometry } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import { Draw, Modify } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Fill, Stroke, Style } from 'ol/style';
import {
    plotPUT,
    plotGET,
    plotGETbyId,
    plotPOST,
    uploadSingle,
} from 'src/api/resource';
import {
    nextTick, onMounted, onUnmounted, reactive, watch, watchEffect, toRefs, toRef
} from 'vue';
import { Toast } from 'vant';


let drawLInteraction: Draw | null = null;
let modifyLInteraction: Modify | null = null;

let drawL: VectorLayer<VectorSource<Geometry>> | null = null;
let drawS: VectorSource<Geometry> | null = null;

const props = defineProps({
    id: {
        type: String,
        required: true,
    }
})

const getInitalState = () => {
    return {
        form: {
            styleColor: 'rgba(10, 73, 140, 0.8)',
            // 
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
            pictures: []
        }
    }
}
const state = reactive(getInitalState());
let { form } = toRefs(state);

watchEffect(() => {
    props.id && plotGETbyId(props.id).then(r => {
        form.value = r.data
    });
})


const emit = defineEmits(['drawend', 'close', 'submit']);
defineExpose({ initAndStartDraw, onSubmit, onCancel });

watch(
    () => form.value.styleColor,
    (n, v) => {
        setLayerStyleColor(n);
    }
);

onMounted(() => {

});

nextTick(() => {
    olmap.getViewport().oncontextmenu = (e) => {
        Toast('取消绘制')
        onCancel();
    }
})

const afterRead = (file) => {
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

onUnmounted(() => {
    onCancel();
});

function initAndStartDraw() {
    nextTick(() => {
        initDrawLayer();
        startDrawLayer();
    });
}

function setLayerStyleColor(color: string) {
    drawL?.setStyle(
        new Style({
            stroke: new Stroke({ width: 1, color: 'lightblue' }),
            fill: new Fill({ color: color }),
        })
    );
}

function onSubmit() {
    console.log('onSubmit', form);
    if (!form.value.geojson) {
        return;
    }
    if (props.id) {
        plotPUT({ ...form.value }).then((result) => { });
    } else {
        plotPOST({ ...form.value }).then((result) => { });
    }
    setTimeout(() => {
        //等一会
        emit('submit');
    }, 500);

    // if (drawS?.getFeatures()?.length < 1) {
    //     $message.error('未绘制图层');
    //     return;
    // }
}

function removeImg(src: string) {
    let index = form.value.pictures.indexOf(src);
    if (index > -1) {
        form.value.pictures.splice(index, 1);
        plotPUT({ ...form.value }).then((result) => { });
    }
}


function onCancel() {
    if (!olmap) return;
    olmap.removeInteraction(drawLInteraction);
    olmap.removeInteraction(modifyLInteraction);
    drawS?.clear();
    olmap.removeLayer(drawL);
    Object.assign(state, getInitalState())
    console.log('src/components/DrawPolygon.vue onCancel');
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
        form.value.area = '' + Math.round(area);

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
    form.value.geojson = gson;
    setLayerStyleColor(form.value.styleColor);
}
</script>

<style scoped lang="less"></style>
