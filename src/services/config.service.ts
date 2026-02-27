import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormConfig } from "../models/formConfig";
import { Observable , tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    private apiUrl = 'https://localhost:7121/api/GetConfig';
    config: any = null;

    constructor(private http: HttpClient) {}

    getConfig() : Observable<any> {
        return this.http.get(this.apiUrl).pipe(
            tap((response: any) => this.config = response)
        );
    }
}