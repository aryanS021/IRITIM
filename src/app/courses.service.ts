import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = 'http://10.64.29.243:8080/IRITM/Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }


  createcourse(data: any) {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/createcourse"
    return this.http.post(url, data)
  }

  courseedit(id:number,data:any){
    const url =`http://10.64.29.243:8080/IRITM/Dashboard/editcourse/${id}`
    return this.http.post(url,data)
  }

  CourseDelete(id: number) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/deletecourse/${id}`
    return this.http.delete(url)
  }


  scheduleCourse(data: any) {

    const url = "http://10.64.29.243:8080/IRITM/Dashboard/add-course-schedule"
    return this.http.post(url, data)
  }

  getScheduleCourse() {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/getall-course-schedule"
    return this.http.get(url);

  }
   



  CourseApply(data:any) {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/saveAppliedCourse"
    return this.http.post(url,data)
  }
  UserAppliedCourse(id:any) {
    // console.log(id)
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/getAppliedCourse/${id}`
    return this.http.get(url)

  }

getAllappliedCourse(){
  const url = `http://172.16.14.78:8080/Dashboard/getAppliedAllCourse`
    return this.http.get(url)
}


}





