import { Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bcrypt';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [UsuarioModule,
    PassportModule,
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions:{
      expiresIn:'2h'
    }
  })],
  providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [Bcrypt],

})
export class AuthModule { }