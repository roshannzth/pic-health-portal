import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService{
    constructor(private http:HttpClient){

    }

    validateCredentials(email:string, password:string){
        return this.http.post("https://localhost:5001/api/accounts/ValidateCredentials", {"Email": email, "Password":password});
    }
}