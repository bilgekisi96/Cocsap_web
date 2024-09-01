import {Component, OnInit} from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: [
  ]
})
export class HistoryComponent implements OnInit {

  ngOnInit() {
  }

  handlePayment(){}
  async makePostRequest(datam:any) {
    const urlpost = 'https://tekelektrikcompany.com/api/auth/login/';
    const requestData = {data: datam};

    const username = 'chatbot';
    const password = 'wrong';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    const response = await axios.post(urlpost, requestData, {
      headers: {
        'Authorization': basicAuth
      }});

    console.log('Status Code:', response.status);
    console.log('Response JSON:', response.data);

  }

}
