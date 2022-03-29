import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  userService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  
  findAll() {
    return this.appService.getHello();
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
    return this.appService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
