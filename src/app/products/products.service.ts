import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

    private _url: string = "https://efa-gardenapp-backend.herokuapp.com/api/product";

    constructor(private http: HttpClient) {}

    getProducts(){
        return this.http.get(this._url);
    }
}

