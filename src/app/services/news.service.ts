import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Response, RequestOptions,  } from '@angular/http';
@Injectable()
export class NewsService {
  options: any;
  private newsUrl="http://localhost:3000/index/news";
  private catURL="http://localhost:3000/index/catagories/";
   constructor(private http:HttpClient) { }

   getBycatagory(catagories){
    return this.http.get<any>(this.catURL+'/'+catagories);
  }
      
   createnews(news){
    return this.http.post<any>(this.newsUrl,news);
   }
    getById(id){
  return this.http.get<any>(this.newsUrl +'/'+ id)
    }
    getnews(){
      return this.http.get<any>(this.newsUrl)
    }
  
   deletenews(id){
     return this.http.delete<any>(this.newsUrl +'/'+ id);

   }
  updatenews(news,id){
    return this.http.put<any>(this.newsUrl +'/'+ id , news);

  }
  
  }
