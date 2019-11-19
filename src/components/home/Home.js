import ssrApi from "@/common/data-source/requestApis/ssrApi";

export default {
    name: "Home",
    data() {
        return {
            activeNames: ['1'],
            ssrList: [],
            qrcodeText: '',  // 显示二维码时的文本
            dialogVisible: false  // 是否显示二维码显示框
        };
    },
    mounted: function () {
        document.getElementsByClassName('hiddenButton')[0].addEventListener('click', function () {
            document.getElementsByClassName('hiddenWrap')[0].style.display = "none";
            document.getElementsByClassName('ssrwrap')[0].children[0].style.maxHeight = 'none';
        });

        ssrApi.getSsr(1,10000,'freess').then(req => {
            this.ssrList = req.data;
        });
    },
    methods: {
        onSsCopy: function () {
            this.$message({
                showClose: true,
                message: '成功复制一个SS节点，请注意它与SSR的区别！',
                type: 'success',
                center: 'true'
            });
        },
        onSsrCopy: function () {
            this.$message({
                showClose: true,
                message: '节点复制成功，请导入SSR客户端使用',
                type: 'success',
                center: 'true'
            });
        },
        onCopyAllSsr: function () {
            let ssr = '';
            for (const item of this.ssrList) {
                ssr += item.ssr + ',';
            }
            this.$copyText(ssr).then(() => {
                this.$message({
                    showClose: true,
                    message: '成功复制一组节点，请批量导入SSR客户端使用！',
                    type: 'success',
                    center: 'true'
                });
            }).catch(() => {
                this.$message({
                    showClose: true,
                    message: '节点复制失败',
                    type: 'error',
                    center: 'true'
                });
            });

        },
        // 显示二维码
        onShowQrcode: function (imageUrl) {
            this.qrcodeText = imageUrl;
            this.dialogVisible = true;
        },
        // 查看全部
        onCollapse: function (e) {
            const transform = e.toElement.getElementsByTagName('i')[0].style.transform;
            if (transform) {
                e.toElement.style.marginBottom = '';
                e.toElement.getElementsByTagName('i')[0].style.transform = '';
                e.toElement.nextElementSibling.style.display = '';
            } else {
                e.toElement.style.marginBottom = '0px';
                e.toElement.getElementsByTagName('i')[0].style.transform = 'rotate(1deg)';
                e.toElement.nextElementSibling.style.display = "none";
            }

        },
        openHref: function (t) {
            if (t == 'pc') {
                window.open("https://github.com/shadowsocksrr/shadowsocksr-csharp/releases", "_blank");
            } else if (t == 'mac') {
                window.open("https://github.com/qinyuhang/ShadowsocksX-NG-R/releases", "_blank");
            } else if (t == 'android') {
                window.open("https://github.com/shadowsocksrr/shadowsocksr-android/releases", "_blank");
            } else if (t == 'ios') {
                this.$notify.info({message: "请使用美区苹果账号下载：Potatso Lite(免费) 或 Shadowrocket(收费)"});
            }

        }
    }
}
