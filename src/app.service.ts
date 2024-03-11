import { Injectable } from '@nestjs/common'; //import this injectable code

@Injectable() //decorator,reusable code
export class AppService {
  //class
  getHello(): string {
    //function
    return 'Hello World!'; //return string word
  }

  getOrg(): string {
    return 'Organizations are here';
  }
}
