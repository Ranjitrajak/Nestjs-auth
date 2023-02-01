import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/userservice";

@Injectable()
export class LocalStratergy extends PassportStrategy(Strategy) {
  constructor(private readonly userService:UserService) {
    super()
  }
  
  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username)
    
    if(!user) {
      throw new UnauthorizedException()
    }
    if( user !== undefined && user.password === password) return user
    
    else throw new UnauthorizedException()
    
    
  }
}