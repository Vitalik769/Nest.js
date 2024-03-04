import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserExceprionFilter } from './userFilters/user.filter';
import { User } from './entities/user.entity';
import { HttpService } from '@nestjs/axios';

@Controller('users')
@UseFilters(new UserExceprionFilter())
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly httpService: HttpService,
  ) { }

  @Post('/order')
  createOrder(@Body() data) {
    const createdOrder = this.usersService.createOrder(data);


    this.httpService
      .post('https://webhook.site/c6c7a938-218b-4b8e-a0b7-ab7c84377c77', data)
      .subscribe({
        complete: () => {
          console.log('completed');
        },
        error: (err) => {
        },
      });
    return createdOrder;
  }

  @Get()
  getList(): Promise<User[]> {
    return this.usersService.getList();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

}
