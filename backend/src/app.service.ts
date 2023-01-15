import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(){
    try {
      await axios.get("https://http.cat/100", {
        responseType: 'arraybuffer'
      }).then(response => {
        const base64 = Buffer.from(response.data, 'binary').toString('base64');

        return base64;
      }).catch(error => {
        throw { type: "Not_Found", message: "Not Found" };
      });
    } catch (error) {
      if(error?.type === "Not_Found") throw new HttpException("Erro não encontrado", HttpStatus.NOT_FOUND);

      throw new HttpException("Erro desconhecido", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
