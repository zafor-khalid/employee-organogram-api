import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Normally, we'd fetch the user from the database and validate password
    if (username === 'admin' && password === 'password') {
      return { id: 1, username: 'admin', role: 'admin' }; // Mocked user object
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
