import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonURL = '../../../assets/data.json';
  private formVisibleSource = new BehaviorSubject<boolean>(false);
  formVisible$ = this.formVisibleSource.asObservable();
 

  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  toggleFormVisibility(): void {
    this.formVisibleSource.next(!this.formVisibleSource.value);
    console.log(this.formVisibleSource);
  }

}
