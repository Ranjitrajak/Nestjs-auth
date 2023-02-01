import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/autn.module';
import { UserModule } from './user/user module';

@Module({
  imports: [UserModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
