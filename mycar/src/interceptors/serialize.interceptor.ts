//it is going to take an object and serialize that into JSON
import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //Run something before a request is handled
        //by the request handler
        console.log("I am running beore the request handler",context)
        return next.handle().pipe(
            map((data:any)=>{
                //Run something before the response is sent out
                console.log("I am running beore the response is sent out",data)
            })
        )
    }
}
