<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { getOpenInterface } from "@/api/interfaceInfo";
import router from "@/router";

defineOptions({
  name: "Welcome"
});

const total = ref();
const pageInfo = reactive({
  current: 1,
  pageSize: 10
});

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

const handleClick = data => {
  router.push({
    name: "Detail",
    query: {
      data: JSON.stringify(data)
    }
  });
};

const tableData = ref([]);
</script>

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
        prop="total"
        align="center"
        label="调用次数"
        width="auto"
      />
      <el-table-column width="auto" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row)"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="float-right">
      <el-pagination
        large
        background
        layout="prev, pager, next"
        :total="total"
        default-page-size="10"
        v-model:page-size="pageInfo.pageSize"
        v-model:current-page="pageInfo.current"
        class="mt-4"
      />
    </div>
  </div>
</template>
