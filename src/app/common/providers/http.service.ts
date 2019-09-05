/**
 * http请求服务
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private request(method: string, url: string, httpParams?: HttpParams, httpBody?: any, httpHeaders?: any): Observable<any> {
    console.log('url: ' + url);
    const httpOptions: any = {body: Object, headers: Object, params: HttpParams};
    // httpHeaders = {
    //   ['Accept-Language'] : this.storage.getLanguage(),
    //   ['TimeZoneInfo'] : this.storage.getTimeZoneInfo()
    // };
    if (!httpHeaders) {
      httpHeaders = {
        ['Content-Type']: 'application/json; charset=utf-8',
        ['User-Agent']: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:68.0) Gecko/20100101 Firefox/68.0',
        ['Accept']: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      };
    }

    httpOptions.headers = httpHeaders;
    httpOptions.body = httpBody;
    httpOptions.params = httpParams;
    httpOptions.responseType = 'json';

    return new Observable(observer => {

      this.http.request(method, url, httpOptions).subscribe(req => {
        console.log('http返回：');
        console.log(req);
        observer.next(req);
      }, err => {
        console.log('http错误: ');
        console.log(err);
        observer.error(err);
      });
    });

  }

  /**
   * get 请求
   * @param url 请求地址
   * @param params 请求参数，可空
   */
  public get(url: string, params?: {}) {
    let par = new HttpParams();
    if (params) {
      for (const key of Object.keys(params)) {
        par = par.set(key, params[key]);
      }
    }

    return this.request('get', url, par);
  }

  /**
   * post 请求
   * @param url 请求地址
   * @param params 请求参数，可空
   */
  public post(url: string, body?: any) {
    const httpHeaders = {['Content-Type']: 'application/json'};
    const b = JSON.stringify(body);

    return this.request('post', url, null, b, httpHeaders);
  }
}
