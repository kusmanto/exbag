import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExternalApiService {
  private readonly apiUrl = 'https://exbag-dev.garuda-indonesia.com/exbag-dev/dcs/DCSIDC_CPRIdentification';

  async fetchAnyData(bearerToken: string): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, {
        headers: {
          Authorization: 'Bearer ${bearerToken}', // Add the Bearer Token to the headers
        },
        data: '{}',
      });
      return response.data; // Return the JSON response
    } catch (error) {
      throw new Error('Failed to fetch data from external API: ${error.message}');
    }
  }
}