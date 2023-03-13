import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Pipe({
  name: 'secure'
})
export class SecurePipe implements PipeTransform {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  async transform(src: string): Promise<string> {
    if (src.indexOf(';base64,') > -1) {
      return src;
    }
    const token = '[bearer token]';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const imageBlob  = await this.http.get(src, { headers, responseType: 'blob' }).toPromise() as Blob;
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result as string);
     reader.readAsDataURL(imageBlob);
    });
  }

}
