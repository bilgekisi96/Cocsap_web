import {Component, OnInit} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styles: [
  ]
})

export class RealtimeComponent implements OnInit{

  ngOnInit() {
    this.fetchData().then(res=>{console.log(res)})

  }
  sendMessage() {
    this.makePostRequest({"data":"Hello men"}).then(res =>{console.log(res)})
  }

  async fetchData() {

    const username = 'chatbot';
    const password = 'wrong';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    try {
      const response = await fetch('https://4000-bilgekisi96-tensorflow-3yrna3360cv.ws-us110.gitpod.io/data', {
        method: 'GET',
        headers: {
        'Authorization': basicAuth
      }
      });
      // Since we can't access the response body or headers, we won't be able to handle the data here
      console.log('Request sent successfully');
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors here
    }
  }

  async makePostRequest(datam:any) {
    const urlpost = 'https://4000-bilgekisi96-tensorflow-3yrna3360cv.ws-us110.gitpod.io/dataup';
    const requestData = { data: datam };

    const username = 'chatbot';
    const password = 'wrong';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    try {
      const response = await axios.post(urlpost, requestData,{
      headers: {
        'Authorization': basicAuth
      }});

      console.log('Status Code:', response.status);
      console.log('Response JSON:', response.data);

    } catch (error) {
      console.error('Error:');
      // Handle errors here
    }
  }



}
