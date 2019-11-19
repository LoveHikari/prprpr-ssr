<template>
    <div>
        <header id="header">
            <div class="topBar black-bg">
                <div class="wrap pdsx5">
                    只做免费节点，疑问或建议可联系站务邮箱。[本站是唯一更新渠道]
                    <span class="float-right gray hidden-xs-only">连接世界，连结你我。不忘初心，方得始终！</span>
                </div>
            </div>
            <div class="wrap">
                <el-row>
                    <el-col :xs="24" :sm="6" :span="6" class="logoBar center">
                        <a href="/" class="logo gray">
                            <h1>
                                <span class="red">免费节点</span>
                                -
                                <span class="blue">Lncn.ml</span>
                            </h1>
                        </a>
                    </el-col>
                    <el-col :span="12"></el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </div>
        </header>
        <div class="wrap">
            <div>
                <el-row class="mgtop10 hidden-sm-and-down" style="margin-left: -5px; margin-right: -5px;">
                    <el-col :span="24" :md="8" style="padding-left: 5px; padding-right: 5px;">
                        <div class="ad adMain white-bg pd10 center">
                            <a href="/" target="_blank" rel="nofollow">
                                <img src="../../assets/img/390_130.png" alt="赞助商广告">
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="24" :md="16" style="padding-left: 5px; padding-right: 5px;">
                        <div class="adWrap1 pd10 white-bg center">
                            <div class="ad topAd pc">
                                <a href="/" target="_blank" rel="nofollow">
                                    <img src="../../assets/img/810_60.png" alt="赞助商广告">
                                </a>
                            </div>
                            <div class="ad topAd pc">
                                <a href="/" target="_blank" rel="nofollow">
                                    <img src="../../assets/img/810_60.png" alt="赞助商广告">
                                </a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <div class="center box-list mgtop10 pd10 white-bg hidden-sm-and-up">
                    <div class="ad">
                        <a href="https://www.zrj666.xyz/auth/register?code=fUHj" target="_blank" rel="nofollow">
                            <img src="/img/hengfu-yidong.svg" alt="赞助商广告">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <el-row class="pdsx10" style="margin-left: -5px; margin-right: -5px;">
                <el-col :span="24" :xs="24" :sm="8" :md="8" :lg="6" style="padding-left: 5px; padding-right: 5px;">
                    <div class="side box-list">
                        <div class="white-bg pd10 rc center download">
                            <div class="dt" @click="onCollapse($event, 'downloadssr')">
                                软件下载-SSR
                                <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                            </div>
                            <div class="downloadssr">
                                <el-button-group>
                                    <el-button size="mini" @click="openHref('pc')">
                                        <!----><!----><span>pc</span>
                                    </el-button>
                                    <el-button size="mini" @click="openHref('android')">
                                        <!----><!----><span>android</span>
                                    </el-button>
                                    <el-button size="mini" @click="openHref('mac')">
                                        <!----><!----><span>mac</span>
                                    </el-button>
                                    <el-button size="mini" @click="openHref('ios')">
                                        <!----><!----><span>ios</span>
                                    </el-button>
                                </el-button-group>
                                <div class="border mgtop10"></div>
                                <div class="mgtop10 font-small">
                                    ** 请珍惜使用,不要用作BT下载 **
                                    <br>站务：tianfangdao@gmail.com
                                </div>
                            </div>

                        </div>
                        <div class="white-bg pd10 rc center use">
                            <div class="dt" @click="onCollapse($event, 'olssr')">
                                基础使用方法-SSR
                                <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                            </div>
                            <ol class="olssr">
                                <li>复制节点，导入SSR客户端</li>
                                <li>切换到添加的可用节点</li>
                                <li>设置代理模式为PAC模式</li>
                                <li>切换PAC绕过大陆(或GFWList)</li>
                                <li>打开谷歌搜索测试</li>
                            </ol>
                        </div>
                        <div class="ad sideAD center">
                            <a href="/" target="_blank" rel="nofollow">
                                <img src="../../assets/img/310_80.png" alt="赞助商广告">
                            </a>
                        </div>
                        <div class="ad sideAD center">
                            <a href="/" target="_blank" rel="nofollow">
                                <img src="../../assets/img/310_80.png" alt="赞助商广告">
                            </a>
                        </div>
                        <div class="ad sideAD center">
                            <a href="/" target="_blank" rel="nofollow">
                                <img src="../../assets/img/310_80.png" alt="赞助商广告">
                            </a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24" :xs="24" :sm="16" :md="16" :lg="14" class="box-list mgtop10-phone"
                        style="padding-left: 5px; padding-right: 5px;">
                    <div class="white-bg pd10">
                        <div class="dt">说点什么</div>
                        <p>
                            <b>感慨：</b>不知不觉，Lncn创办一年了，也不知道多少人见证了这一年的变化，又有多少人会关注它的发展。
                            <br><b>通知：</b>TG群组移交给二当家管理了(这名号还是你们给取的)，以后Lncn没有任何官方群组。
                            <br><b>更新：</b>两天更新一次，实际上已经实施许久了，这次只是明确一下，短期内不会再有变动。
                        </p>
                    </div>
                    <div class="home box-list">
                        <div class="ssr white-bg rc">
                            <div class="ssrwrap">
                                <el-row style="margin-left: -5px; margin-right: -5px; max-height: 300px; overflow: hidden;">
                                    <div class="dt">
                                        <div style="display: inline-block;">免费SSR列表-Lncn</div>
                                        <div style="display: inline-block;float: right">
                                            <router-link to="/list" style="color: #969696;">更多</router-link>
                                        </div>

                                    </div><!---->

                                    <el-col v-for="(item, key) in ssrList" :key="key" :span="6" :xs="12"
                                            style="padding-left: 5px; padding-right: 5px;">
                                        <div class="onessr pdsx10">
                                            <div class="ssrname">{{item.remarks}}</div>
                                            <div>
                                                <el-button size="mini" style="margin-right: 5px;"
                                                           v-clipboard:copy="item.ss" v-clipboard:success="onSsCopy">
                                                    <!----><!----><span>SS</span>
                                                </el-button>
                                                <el-button-group>
                                                    <el-button size="mini" @click="onShowQrcode(item.ssr)">
                                                        <!----><!----><span>码</span>
                                                    </el-button>
                                                    <el-button size="mini" v-clipboard:copy="item.ssr"
                                                               v-clipboard:success="onSsrCopy">
                                                        <!----><!----><span>SSR</span>
                                                    </el-button>
                                                </el-button-group>
                                            </div>
                                        </div>
                                    </el-col>
                                    <div class="hiddenWrap">
                                        <div class="hiddenBlock"></div>
                                        <div class="hiddenButton">
                                            <el-button size="mini">
                                                <!----><!----><span>查看全部</span>
                                            </el-button>
                                        </div>
                                    </div>
                                </el-row>
                            </div>
                            <!---->
                            <div class="ssrNotice pd10 center">
                                IOS平时用配置模式，其他设备请绕过局域网和大陆。无法访问Lncn,尝试切换到全局。
                                <br>如失效，利用更新节点到本站重新获取！平时别用，备用节点延迟两天失效！
                            </div>
                            <div class="noticeContent">
                                <span class="gray">预计下次更新：周日</span>
                            </div>
                            <div class="pd10 right">
                                <div class="date gray">
                                    最后更新时间：
                                    <span class="pink">10月11日 02点20分</span>
                                </div>
                                <el-button type="primary" size="mini" @click="onCopyAllSsr()">
                                    <!----><!----><span>复制所有SSR节点</span>
                                </el-button>
                            </div>
                        </div>
                        <div class="intro pd10 white-bg rc">
                            <div class="dt noborder">常见问题-Lncn</div>
                            <el-collapse v-model="activeNames" accordion>
                                <el-collapse-item name="1" title="当前加密方式不安全？">
                                    1.RC4加密相对简单，其实对安全没多大影响。
                                    <br>2.加密正比计算能力，CPU超负荷运行容易引起宕机。
                                    <br>3.每60分钟清空一次全部日志文件，安全性是可靠的。
                                </el-collapse-item>
                                <el-collapse-item name="2">
                                    <template slot="title">
                                        <span class="pink">大陆直连本站？</span>
                                    </template>
                                    在本地host文件中将本站域名绑定到 <code>69.194.14.16</code><br>
                                    安卓可下载
                                    <a href="https://play.google.com/store/apps/details?id=dns.hosts.server.change"
                                       target="_blanl">Hosts Go</a>
                                    添加 ， windows具体操作方法如下↓
                                    <br>1.目录：C:/Windows/System32/drivers/etc，记事本打开host文件
                                    <br>2.在最后一行添加(注意空格)： <code>69.194.14.16 lncn.org</code>
                                    <br>3.win+R 输入cmd回车，执行： <code>ipconfig /flushdns</code>
                                    <br>4.重新刷新页面即可,如失效请还原host并用代理访问！
                                </el-collapse-item>
                                <el-collapse-item name="3" title="为什么更新？没有订阅？">
                                    1.更新端口密码，避免大流量高频率导致服务被屏蔽。
                                    <br>2.防止长时间人数积累，导致节点不可使用。
                                    <br>3.Lncn没有订阅，本站是唯一更新渠道。
                                </el-collapse-item>
                                <el-collapse-item name="4" title="更快的网络速度？">
                                    1.本站提供的是日常基础节点，所以进行了限制。
                                    <br>2.另外，不同地区、运营商、vps线路、时间段，都会影响网速。
                                    <br>3.如果有更高的需求，建议购买付费的机场服务或者vpn工具。
                                    <br>4.当然，你还可以自行搭建，教程谷歌即可
                                </el-collapse-item>
                                <el-collapse-item name="5" title="推荐的vps服务商？">
                                    1.可以参考一下
                                    <a href="https://www.onevps.com/portal/aff.php?aff=2652" target="_blank">onevps</a>
                                    东京机房 ,新人半价优惠码：VPSWELCOME
                                    <br>2.这家服务相对不错，就是价格有点偏贵，仅建议购买东京机房
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4" class="hidden-md-and-down" style="padding-left: 5px; padding-right: 5px;">
                    <div class="side box-list">
                        <div class="about white-bg pd10 center">
                            <div class="dt left">关于</div>
                            Lncn免费账号
                            <br>纯公益SS/SSR节点分享
                            <br>平均每周更新两到三次
                            <br>
                        </div>
                        <div class="websiet pd10 white-bg center">
                            <div class="dt left">
                                网站与工具
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC2tQpW0dPiyWPebwBSksJ_g" target="_black"
                                       rel="nofollow">Google</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCMUnInmOkrWN4gof9KlhNmQ" target="_black"
                                       rel="nofollow">YouTube</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_black" rel="nofollow">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_black" rel="nofollow">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_black" rel="nofollow">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/intl/zh-CN/chrome/" target="_black" rel="nofollow">Chrome</a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/" target="_black" rel="nofollow">Gmail</a>
                                </li>
                            </ul>
                        </div>
                        <div class="vps box-list center">
                            <div>
                                <a href="/" target="_black" rel="nofollow">
                                    <img src="../../assets/img/bwg.png" class="rc">
                                </a>
                            </div>
                            <div><a href="/" target="_black" rel="nofollow">
                                <img src="../../assets/img/bwg.png" class="rc">
                            </a>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <footer id="footer" class="center">
            <div class="wrap">
                <div>©2018-2019 <a href="/">免费节点</a> , Inc. All rights reserved.
                </div>
                <div>疑问建议/合作咨询：xmh.yxw@gmail.com</div>
            </div>
        </footer>

        <el-dialog title="ssr二维码" :visible.sync="dialogVisible" width="30%">
            <div style="text-align: center">
                <vue-qr :text="qrcodeText" :size="200"></vue-qr>
            </div>

        </el-dialog>
    </div>
</template>

<script src="./Home.js" lang="js"></script>

<style scoped>
    @import 'Home.scss';
</style>
