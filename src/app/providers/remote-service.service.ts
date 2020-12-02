import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Garage } from '../models/garages';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  // API path
  base_path = 'http://192.168.1.84:3000/oficinas/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item): Observable<Garage> {
    return this.http
      .post<Garage>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single student data by ID
  getItem(id): Observable<Garage> {
    return this.http
      .get<Garage>(this.base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getByCat(Page, CategoriaId): Observable<Garage> {
    return this.http
      .get<Garage>(this.base_path + '?page=' + Page + 'ListaPorCategorias/' + CategoriaId)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get students data
  getList(): Observable<Garage> {
    return this.http
      .get<Garage>(this.base_path + 'ListarTodos')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListPaginate(page): Observable<Garage> {
    return this.http
      .get<Garage>(this.base_path + '?page=' + page)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(id, item): Observable<Garage> {
    return this.http
      .put<Garage>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Garage>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}