import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('api/users')
export class UserController {
  // http method return json and status code responses
  @Get('/json')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getJson(): Record<string, string> {
    return {
      data: 'Hello World',
    };
  }

  //   redirect Responses
  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/json',
      statusCode: 301,
    };
  }

  //   async responses
  @Get('/hello')
  async getHello(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
  ): Promise<string> {
    return `Hello ${firstName} ${lastName} welcome back`;
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
