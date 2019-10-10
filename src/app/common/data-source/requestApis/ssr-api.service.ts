import {Injectable} from '@angular/core';
import {HttpService} from '../../providers/http.service';
import {Observable} from 'rxjs';
import {APP_SERVE_URL} from '../../providers/globalData';

@Injectable({
  providedIn: 'root'
})
export class SsrApiService {

  constructor(private http: HttpService) {
  }

  /**
   * 获得ssr
   */
  public getSsr() {
    return new Observable(observer => {
      this.http.get(APP_SERVE_URL + 'api/ssr?groups=freess').subscribe(req => {
        if (req.error === 200) {
          observer.next(req);
        }
      });
    });


  }
}
