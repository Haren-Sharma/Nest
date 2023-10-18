import { Expose } from "class-transformer";

export class userdto {
    @Expose()
    id:number;

    @Expose()
    email:string;
}