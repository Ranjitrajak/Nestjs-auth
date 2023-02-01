import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { AppService } from './app.service';
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/local-authgard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  @UseGuards(LocalAuthGuard)

  @Post('/login')

  login(@Request() req): any {

    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user
  }
}
