import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { scene } from './scene';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
private baseURL="http://localhost:9087/getallscene";
  constructor(private httpClient:HttpClient) { }
getSceneList():Observable<scene[]>{
  return this.httpClient.get<scene[]>('${this.baseURL}');
}
}
