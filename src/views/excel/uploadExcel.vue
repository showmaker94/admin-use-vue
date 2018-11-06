<template>
  <div class="app-container">
    <upload-excel-component :on-success='handleSuccess' :before-upload="beforeUpload"></upload-excel-component>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item'>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import uploadExcelComponent from "@/components/upload-excel";
export default {
  name: "excel-upload",
  data() {
    return {
      tableData: [],
      tableHeader: []
    };
  },
  components: {
    uploadExcelComponent
  },
  methods: {
    beforeUpload(file) {
      let index = file.name.lastIndexOf(".");
      if(!index){
         this.$message({
          message: "Please upload excel.",
          type: "warning"
        });
        return false; 
      }
      if (
        file.name.substring(index) != ".xls" &&
        file.name.substring(index) != ".xlsx"
      ) {
        this.$message({
          message: "Please upload excel.",
          type: "warning"
        });
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (isLt2M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 2m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
};
</script>
