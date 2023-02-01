import { Module } from '@nestjs/common'; 
import { UserService } from './userservice';

@Module({
    imports: [],
    controllers: [],
    providers: [UserService],
    exports:[UserService]
  })
  export class UserModule {}