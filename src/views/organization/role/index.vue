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
          {{ scope.row.roleName }}
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

    <el-pagination current-page="" />

    <el-dialog :visible.sync="dialogVisible" :title="dialogType=='edit'?'编辑':'新增角色'">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="角色名称">
          <el-input v-model="role.RoleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input
            v-model="role.Description"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="请输入角色描述"
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
        <el-button type="primary" @click="confirmRole">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import { getRoles, editRole } from '@/api/role'

const defaultRole = {
  roleType: 1,
  roleName: '',
  description: ''
}

export default {
  name: 'Role',
  data() {
    return {
      role: Object.assign({}, defaultRole),
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new'
    }
  },
  created() {
    this.getRoles()
  },
  methods: {
    async getRoles() {
      var res = await getRoles()
      this.rolesList = res.data
    },
    handleAddRole() {

    },
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'

      if (isEdit) {
        await editRole(this.role.RecordID, this.role)
      }
    }
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
