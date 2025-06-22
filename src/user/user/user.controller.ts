import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Query,
} from '@nestjs/common';

@Controller('api/users')
export class UserController {
  // http method return json and status cosde
  @Get('/json')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getJson(): Record<string, string> {
    return {
      data: 'Hello World',
    };
  }

  // http method get
  @Get()
  getAllUsers() {
    return 'Get all users';
  }

  // http method get dengan query
  @Get('/by-query')
  getUserByQuery(@Query('id') id: string) {
    return `Get user by query : ${id}`;
  }

  // http method get dengan param
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return `Get user by id : ${id}`;
  }
}
