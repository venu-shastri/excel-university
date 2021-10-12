import {HttpClient} from '@angular/common/http'; 
import {Injectable,Inject} from '@angular/core';
import {UserModel} from '../home/models/userModel.model'
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class StudentInfoControllerService{
    constructor(public http:HttpClient,@Inject("StudentInfoAPIUrl") public baseUrl:string){
    
    }
    createNewStudentInfo(data:any)
    {
    //     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    //    return this.http.post<UserModel>(this.baseUrl, data, httpOptions);
    this.http.get( "http://localhost:5000/api/Exceluniversity").subscribe((data) =>{
        console.log(data);
    });
}
    createNewStudentData(data:any)
    {
            const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
        return this.http.post<UserModel>(this.baseUrl, data, httpOptions);
    }
}
    