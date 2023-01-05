<template>
  <div class="roomContent">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div class="roomAll">
          全部房间
          <!-- v-for必须在前。 -->
          <!-- 列表形式的全部房间 -->
          <!-- <roomAll v-for="item in allRooms" :rooms="item" :key="item.roomId" /> -->
          <!-- 表格形式的全部房间 -->
          <roomAll/>
        </div>
      </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import roomAll from "@/components/room/roomall.vue";
export default {
  data() {
    return {
      activeName: "first",
      roomId: "1",
      allRooms: [
        { roomId: 1, roomPrice: 200, roomState: "free" },
        { roomId: 2, roomPrice: 200, roomState: "busy" },
      ],
    };
  },
  created() {},
  components: {
    roomAll,
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style>
.roomContent {
  position: absolute;
  max-width: 85%;
  width: 100%;
  height: max-content;
  padding: 1rem 2rem;
  opacity: 0.9;
}
</style>