<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">新增角色</el-button>

    <el-table :data="rolesList" style="width: 100%;margin-top: 30px;" border>
      <el-table-column align="center" label="角色类型" width="180">
        <template slot-scope="scope">
          {{ scope.row.roleType }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色名称" width="180">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色名称" width="180">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色描述">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Role',
  data() {
    return {}
  },
  methods:{
    handleAddRole(){}

  }
}
</script>

<style lang="scss" scoped>
.app-container{
  .roles-table{
    margin-top: 30px;
  }
  .permission-tree{
    margin-bottom: 30px;
  }
}
</style>
