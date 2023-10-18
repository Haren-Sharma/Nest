//it is going to take an object and serialize that into JSON
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
// import { userdto } from 'src/users/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto:any){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //Run something before a request is handled
        //by the request handler
        return next.handle().pipe(
            map((data:any)=>{
                //Run something before the response is sent out
                return plainToInstance(this.dto,data,{
                    excludeExtraneousValues:true
                })
            })
        )
    }
}
