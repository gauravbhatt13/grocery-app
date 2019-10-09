import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<String[]> {
    const url = 'http://localhost:8080/items/categories';
    return this.http.get<String[]>(url);
  }

  addGroceryItem(name, tags) {
    let subscription:Subscription;
    const url = 'http://localhost:8080/items';
    const obj = {
      name: name,
      tags: tags
    };
    subscription = this.http.post(url, obj)
      .subscribe(res => subscription.unsubscribe());
  }

  getAllItems(): Observable<Object[]> {
    const url = 'http://localhost:8080/items';
    return this.http.get<Object[]>(url);
  }

  getItemsByCategories(categories): Observable<Object[]> {
    let url = 'http://localhost:8080/items?';
    categories.forEach((e, idx)=> {
      if (idx === categories.length - 1){
        url = url.concat('category=', e)
      } else {
        url = url.concat('category=', e, '&');
      }
    });
    return this.http.get<Object[]>(url);
  }

  updateGroceryItem(item, tags) {
    let subscription:Subscription;

    const url = 'http://localhost:8080/items';
    const obj = {
      id: item.id,
      name: item.name,
      tags: tags
    };
    subscription = this.http.put(url, obj)
      .subscribe(res => subscription.unsubscribe());
  }

  deleteGroceryItem(id){
    let subscription:Subscription;
    const url = 'http://localhost:8080/items/' + id;
    subscription = this.http.delete(url).subscribe(res=>subscription.unsubscribe());
  }
}
