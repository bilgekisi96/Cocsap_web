import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  async loginpost(requestData?:any){

     try {

        const response = await axios.post('https://tekelektrikcompany.com/api/auth/login', requestData);

        console.log('Status Code:', response.status);
        console.log('Response JSON:', response.data);
        return response
      }

      catch(error){
        console.error('Error fetching data:', error);
        return error
      }

  }

 async loginget(basicAuth?:any){

    try {

      const response = await axios.get('https://tekelektrikcompany.com/api/auth/login', {
        method: 'GET',
        headers: {
          'Authorization': basicAuth
        }
      });
      // Since we can't access the response body or headers, we won't be able to handle the data here
      console.log(response)

    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors here
    }

  }





}
