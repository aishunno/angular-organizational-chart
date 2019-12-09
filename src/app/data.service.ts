import {Injectable} from '@angular/core';
import {AsyncSubject, BehaviorSubject, from, Observable, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {id: 1, name: 'Adidas', category_id: 1},
    {id: 2, name: 'Bata', category_id: 1},
    {id: 3, name: 'TH', category_id: 2}
  ];

  private categories = [
    {id: 1, name: 'Shoes'},
    {id: 2, name: 'Clothing'},
  ];

  actionStream = new ReplaySubject(1);
  actionStream$ = this.actionStream.asObservable();

  constructor(private readonly http: HttpClient) {
  }

  getProducts() {
    return from([this.products]);
  }

  getCategories() {
    return from([this.categories]);
  }

  getAllTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
