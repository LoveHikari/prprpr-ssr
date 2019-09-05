/**
 * 本地服务
 */
import { Injectable } from '@angular/core';
import {ElMessageService} from 'element-angular/release/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  constructor(private message: ElMessageService) {
  }

  public presentAlert(msg: string, type: string = 'success') {
    this.message.setOptions({ showClose: true });
    this.message[type](msg);
  }

  public messageBox() {

  }
  //
  // /**
  //  * 统一调用此方法显示提示信息
  //  * @param msg 信息内容
  //  */
  // async presentToast(msg: string = '操作完成') {
  //   const toast = await this.toastCtrl.create({
  //     message: msg,
  //     duration: 2000,  // 显示时长
  //     position: 'middle',
  //     showCloseButton: false,
  //   });
  //   await toast.present();
  // }
  //
  // async presentToast2(msg: string = '操作完成', head: string = '标题') {
  //   const toast = await this.toastCtrl.create({
  //     header: head,
  //     message: msg,
  //     duration: 5000,  // 显示时长
  //     position: 'top',
  //     showCloseButton: true,
  //     closeButtonText: '关闭',
  //     // color: 'light',
  //   });
  //   await toast.present();
  // }
  //
  //
  // /**
  //  * Loading
  //  */
  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingCtrl.create({
  //     spinner: null,
  //     duration: 2000,
  //     message: 'Please wait...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading'
  //   });
  //   return await loading.present();
  // }
  //
  // async presentPayPassword(ha: (value: any) => void) {
  //   const alert = await this.alertCtrl.create({
  //     header: '支付密码',
  //     inputs: [
  //       {
  //         name: 'name2',
  //         type: 'password',
  //         placeholder: '输入支付密码'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: '关闭',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: '确认',
  //         handler: ha
  //       }
  //     ]
  //   });
  //
  //   await alert.present();
  // }

}
