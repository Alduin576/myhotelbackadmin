<template>
  <div class="c_roolall">
    <el-descriptions title="房间信息">
      <el-descriptions-item label="房间号">{{rooms.roomId}}</el-descriptions-item>
      <el-descriptions-item label="房间价格">{{rooms.roomPrice}}</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">{{rooms.state}}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['roomId','rooms'],
  created() {},
};
</script>

<style>
</style>