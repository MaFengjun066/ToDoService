import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { Observable, throwError } from 'rxjs';

const apiUrl: string = "https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  public getAll():  Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(`${apiUrl}`);
  }

  public getById(id: string): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${apiUrl}/${id}`);
  }

  public create(todo: ToDoItem): Observable<void>{
    return this.http.post<void>(`${apiUrl}`, todo);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`);
  }

  public update(id: string, todo: ToDoItem): Observable<ToDoItem> {
    return this.http.put<ToDoItem>(`${apiUrl}/${id}`, todo);
  }
}
