import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import CreateUserDto from './dto/create-user.dto';
import { User } from './schemas/user.schema';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  
  findAll() {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
