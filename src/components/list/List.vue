<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="ip" label="IP" width="180" sortable></el-table-column>
            <el-table-column prop="port" label="端口" show-overflow-tooltip></el-table-column>
            <el-table-column prop="password" label="密码" width="180"></el-table-column>
            <el-table-column prop="encryption" label="加密方式" width="180"></el-table-column>
            <el-table-column prop="protocol" label="协议" width="180"></el-table-column>
            <el-table-column prop="protoParam" label="协议参数" width="180"></el-table-column>
            <el-table-column prop="obscure" label="混淆" width="180"></el-table-column>
            <el-table-column prop="obfsparam" label="混淆参数" width="180"></el-table-column>
            <el-table-column prop="ipInfo" label="IP信息" width="180"></el-table-column>
            <el-table-column prop="addTime" :formatter="formatDate" label="更新时间" width="180"></el-table-column>
            <el-table-column prop="ssr" label="二维码" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" @click="onShowQrcode(scope.row.ssr)"><i class="el-icon-s-management"></i>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalRecord">
        </el-pagination>
        <el-dialog title="ssr二维码" :visible.sync="dialogVisible" width="30%">
            <div style="text-align: center">
                <vue-qr :text="qrcodeText" :size="200"></vue-qr>
            </div>
            <div style="text-align: center">
                <el-button type="primary" round v-clipboard:copy="qrcodeText"
                           v-clipboard:success="onSsrCopy">复制</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script src="./List.js" lang="js"></script>

<style scoped>

</style>
