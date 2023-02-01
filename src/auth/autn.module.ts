import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import{PassportModule} from '@nestjs/passport'
import { UserModule } from 'src/user/user module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt .strategy';
import { LocalStratergy } from './local.strategy';
@Module({
    imports: [PassportModule,UserModule, JwtModule.register({
        secret:"newuser",
        signOptions: { expiresIn: '60s' },
      })],
    controllers: [],
    providers: [LocalStratergy,AuthService,JwtStrategy],
    exports:[AuthService]
  })
  export class AuthModule {}