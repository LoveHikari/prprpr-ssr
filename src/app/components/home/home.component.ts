import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';
import {SsrApiService} from '../../common/data-source/requestApis/ssr-api.service';
import {NativeService} from '../../common/providers/native.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('card', {read: ElementRef, static: false})card: ElementRef;

  public items: any;
  public myAngularxQrCode: string;

  constructor(private clipboard: ClipboardService, private native: NativeService, private ssrApi: SsrApiService) {
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.ssrApi.getSsr().subscribe((req: any) => {
      this.items = req.data;
    });
  }
  /**
   * 复制ss
   * @param item ssr
   */
  public onSsClick(item) {
    const ssr = item.content;

    if (this.clipboard.copyFromContent(ssr)) {
      this.native.presentAlert('成功复制一个SS节点，请注意它与SSR的区别！');
    } else {
      this.native.presentAlert('节点复制失败', 'error');
    }
  }

  /**
   * 复制ssr
   * @param item ssr
   */
  public onSsrClick(item) {
    const ssr = item.content;

    if (this.clipboard.copyFromContent(ssr)) {
      this.native.presentAlert('节点复制成功，请导入SSR客户端使用');
    } else {
      this.native.presentAlert('节点复制失败', 'error');
    }
  }

  /**
   * 显示二维码
   * @param item ssr
   */
  public onShowQrCode(item) {
    const ssr = item.content;
    this.myAngularxQrCode = ssr;
    this.card.nativeElement.toggle = true;
  }

  /**
   * 复制所有ssr
   */
  public onCopyAllSsr() {
    let ssr = '';
    for (const item of this.items) {
      ssr += item.content + ',';
    }
    if (this.clipboard.copyFromContent(ssr)) {
      this.native.presentAlert('成功复制一组节点，请批量导入SSR客户端使用！');
    } else {
      this.native.presentAlert('节点复制失败', 'error');
    }
  }
}
