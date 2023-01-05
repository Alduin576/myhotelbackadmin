<template>
  <div class="c_roolall">
    <!-- 列表形式 -->
    <!-- <el-descriptions title="房间信息">
      <el-descriptions-item label="房间号">{{rooms.roomId}}</el-descriptions-item>
      <el-descriptions-item label="房间价格">{{rooms.roomPrice}}</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">{{rooms.state}}</el-tag>
      </el-descriptions-item>
    </el-descriptions> -->
    <!-- 表格形式 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="number" label="房间号" width="180">
      </el-table-column>
      <el-table-column prop="state" label="状态"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      data: [],
    };
  },
  props: ["roomId", "rooms"],
  created() {
    // 老式办法
    // 使用axios向后台请求数据
    axios({
      method: "get",
      url: "http://localhost:9091/room/all",
    }).then((res) => {
      console.log(typeof res.data);
      console.log(res.data);
      this.tableData = res.data;
    });

    // 采用模块api
    // const res = this.getAllRoom();
    // var { data } = res;

    // console.log("api模块:" + data);
  },
  mounted() {
    // console.log('mounted')
    this.getAllRoom();
  },
  methods: {
    // 需要使用async和await
    async getAllRoom() {
      const res = await this.$api.room.roomAll();
      var { data, status } = res;
      console.log(data);
    },
  },
};
</script>

<style>
</style>