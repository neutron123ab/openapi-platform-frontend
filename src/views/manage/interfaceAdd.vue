<template>
  <div class="flex-col bg-white justify-center box-border p-4 border-0">
    <el-form :model="form" label-width="120px">
      <el-form-item label="接口名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="接口地址">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="是否开放">
        <el-switch v-model="form.status" />
      </el-form-item>
      <el-form-item label="请求方法">
        <el-radio-group v-model="form.method">
          <el-radio label="GET" name="type" />
          <el-radio label="POST" name="type" />
          <el-radio label="PUT" name="type" />
          <el-radio label="DELETE" name="type" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="请求头">
        <el-input v-model="form.requestHeader" />
      </el-form-item>
      <el-form-item label="响应头">
        <el-input v-model="form.responseHeader" />
      </el-form-item>
      <el-form-item label="请求参数">
        <el-input v-model="form.paramsList" type="textarea" />
      </el-form-item>
      <el-form-item label="响应参数">
        <el-input v-model="form.responseParamsList" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { addInterface } from "@/api/manageInterface";
import { useUserInfoStore } from "@/store/modules/userInfo";

// do not use same name with ref
const form = reactive({
  name: "",
  url: "",
  description: "",
  requestHeader: "",
  responseHeader: "",
  status: false,
  paramsList: "",
  responseParamsList: "",
  method: "",
  userId: ""
});

const onSubmit = async () => {
  if (form.status === false) {
    form.status = 0;
  } else if (form.status === true) {
    form.status = 1;
  }

  const userInfoStore = useUserInfoStore();
  form.userId = userInfoStore.getCurrentUser().id;
  await addInterface({
    ...form
  }).then(resp => {
    console.log(resp);
    form.userId = "";
    form.url = "";
    form.status = false;
    form.method = "";
    form.paramsList = "";
    form.responseParamsList = "";
    form.requestHeader = "";
    form.description = "";
    form.name = "";
  });
};
</script>
