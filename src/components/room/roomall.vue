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
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  props: ['roomId','rooms'],
  created() {
    // 可以通过这个来调用axio来获取数据。
    var data = this.tableData;
    data.push({date:'2003-02-21',name:'wq',address:'xxxxx'})
    this.$data.tableData = data;
  },
  mounted(){
    console.log('mounted')
  }
};
</script>

<style>
</style>