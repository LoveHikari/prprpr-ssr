import ssrApi from "@/common/data-source/requestApis/ssrApi";
import moment from "moment";

export default {
    name: "List",
    data() {
        return {
            tableData: [{
                eNumber: 'A10001',
                eName: 'YE集团',
                eIndustry: '金融业',
                eRange: '商业',
                eModel: '国有企业',
                createTime: '2017-03-27',
                updateTime: '2016-03-27',
                recordStatus: '1'
            }],
            qrcodeText: "",
            dialogVisible: false,
            currentPage: 1,  // 当前页
            pageSize: 10,  // 每页数量
            totalRecord: 0  // 总数据

        }
    },
    created: function () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            ssrApi.getSsr(this.currentPage, this.pageSize).then((req) => {
                this.tableData = req.data;
                this.totalRecord = req.totalRecord;
            });
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.fetchData();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.fetchData();
        },
        // 格式化时间
        formatDate: function (date) {
            return moment(date).format("YYYY-MM-DD HH:mm")
        },
        onShowQrcode: function (imageUrl) {
            this.qrcodeText = imageUrl;
            this.dialogVisible = true;
        },
        onSsrCopy: function () {
            this.$message({
                showClose: true,
                message: '节点复制成功，请导入SSR客户端使用',
                type: 'success',
                center: 'true'
            });
        },
    },
    filters: {

    }
}
