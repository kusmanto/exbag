import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTestAxios(): Promise<any> {
    try {
      const response = await axios.get('https://api.myquran.com/v2/sholat/kota/semua');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async testAmadeus(): Promise<any> {
    try {
      const config = {
        headers: {
          Authorization: 'Bearer 810859fc-7b18-3d2f-a79c-eb9712d236ec',
          env: 'PDT',
          old: 'CGKGA00CM',
          station: 'CGK',
          workstation: 'GA/A/CGK/T/3/CKI/AA/01',
          terminal: '3',
        }
      };

      const bodyParameters = {
        data: '{ "transactionStatusCode": "", "session": { "SessionId": "", "SequenceNumber": "", "SecurityToken": "" }, "data": { "setOfCriteria": { "travelCriteria": "", "recordLocator": { "reservation": { "companyId": "", "controlNumber": "5HVH8X" } } } } }',
      };

      const response = await axios.post('https://exbag-dev.garuda-indonesia.com/exbag-dev//dcs/DCSIDC_CPRIdentification',
        bodyParameters,
        config,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
