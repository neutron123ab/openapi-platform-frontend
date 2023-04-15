<template>
  <div class="flex-col justify-center">
    <h1 class="float-left">接口文档</h1>
    <div class="float-right">
      <el-button type="primary" @click="onClickBack">返回</el-button>
    </div>
    <div class="space-y-6">
      <div class="clear-left bg-white box-border p-4 border-0">
        <el-descriptions :column="1" :size="size" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                接口名
              </div>
            </template>
            {{ info.name }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <iphone />
                </el-icon>
                接口状态
              </div>
            </template>
            {{ info.status }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <location />
                </el-icon>
                描述
              </div>
            </template>
            {{ info.description }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                请求地址
              </div>
            </template>
            {{ info.url }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                请求方法
              </div>
            </template>
            {{ info.method }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                请求头
              </div>
            </template>
            {{ info.requestHeader }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                响应头
              </div>
            </template>
            {{ info.responseHeader }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="clear-left bg-white box-border p-4 border-0">
        <el-descriptions
          direction="vertical"
          title="请求参数"
          :column="1"
          :size="size"
        >
          <el-descriptions-item>
            <el-table :data="requestData" style="width: 100%">
              <el-table-column prop="name" label="名称" width="auto" />
              <el-table-column prop="isRequired" label="必填" width="auto" />
              <el-table-column prop="type" label="类型" width="auto" />
              <el-table-column prop="description" label="说明" width="auto" />
            </el-table>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="clear-left bg-white box-border p-4 border-0">
        <el-descriptions
          direction="vertical"
          title="返回参数"
          :column="1"
          :size="size"
        >
          <el-descriptions-item>
            <el-table :data="responseData" style="width: 100%">
              <el-table-column prop="name" label="名称" width="auto" />
              <el-table-column prop="type" label="类型" width="auto" />
              <el-table-column prop="description" label="说明" width="auto" />
            </el-table>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="clear-left bg-white box-border p-4 border-0">
        <el-descriptions
          direction="vertical"
          title="在线测试"
          :column="1"
          :size="size"
        >
          <el-descriptions-item>
            <JsonEditorVue v-model="value" />
          </el-descriptions-item>
          <el-descriptions-item>
            <el-button type="primary">调用</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";

import { computed, onBeforeMount, ref } from "vue";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User
} from "@element-plus/icons-vue";
import JsonEditorVue from "json-editor-vue";
import { useRoute } from "vue-router";
const value = ref();

const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px"
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default
  };
});

const info = ref();
const route = useRoute();

const requestData = ref([]);
const responseData = ref([]);

onBeforeMount(() => {
  info.value = JSON.parse(route.query.data);
  if (info.value.status === "1") {
    info.value.status = "开放";
  } else if (info.value.status === "0") {
    info.value.status = "关闭";
  }
  requestData.value = info.value.paramsList;
  responseData.value = info.value.responseParamsList;
});

const onClickBack = () => {
  router.back();
};
</script>

<style scoped>
.cell-item {
  display: flex;
  align-items: center;
}
</style>
