<template>
  <div class="flex-col justify-center">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        prop="name"
        align="center"
        label="接口名称"
        width="auto"
      />
      <el-table-column
        prop="description"
        align="center"
        label="接口说明"
        width="auto"
      />
      <el-table-column
        prop="method"
        align="center"
        label="请求方法"
        width="auto"
      />
      <el-table-column prop="url" align="center" label="url" width="auto" />
      <el-table-column
        prop="url"
        align="center"
        label="请求参数"
        width="auto"
      />
      <el-table-column
        prop="requestHeader"
        align="center"
        label="请求头"
        width="auto"
      />
      <el-table-column
        prop="responseHeader"
        align="center"
        label="响应头"
        width="auto"
      />
      <el-table-column prop="status" align="center" label="状态" width="auto" />
      <el-table-column width="auto" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref } from "vue";
import { getOpenInterface } from "@/api/interfaceInfo";

defineOptions({
  name: "InterfaceManage"
});

const total = ref();
const pageInfo = reactive({
  current: 1,
  pageSize: 10
});

const formInline = reactive({
  user: "",
  region: ""
});

const onSubmit = () => {
  console.log("submit!");
};

onBeforeMount(() => {
  getOpenInterfaceInfo();
});

const getOpenInterfaceInfo = async () => {
  await getOpenInterface({
    current: pageInfo.current,
    pageSize: pageInfo.pageSize
  }).then(resp => {
    tableData.value = resp.data.records;
    total.value = resp.data.total;
  });
};

const handleClick = async () => {
  await getOpenInterface({
    current: pageInfo.current,
    pageSize: pageInfo.pageSize
  }).then(resp => {
    tableData.value = resp.data.records;
  });
};

const tableData = ref([]);
</script>

<style scoped></style>
