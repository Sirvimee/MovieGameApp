import { EventEmitter, Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api-response";
import { Page } from "../model/page";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    finalScoreChanged: EventEmitter<number> = new EventEmitter();
    finalScore!: number;

    private readonly baseUrl = environment.backendUrl + '/api/movies';

    constructor(private http: HttpClient) { }

    // getMovies(name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> {
    //     return this.http.get<ApiResponse<Page>>(this.baseUrl + '?name=' + name);
    // }

    getTwoMovies() {
        return this.http.get(this.baseUrl + '/picked');
    }

    getOneMovie() {
        return this.http.get(this.baseUrl + '/random');
    }

}