import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserExceprion } from './exeption/users.exeption';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>,
  ) {}

  getList(): Promise<User[]> {
    return this.userRepository.find();
  }

  private users: CreateUserDto[] = [];
  
  create(createUserDto: CreateUserDto): CreateUserDto {
    createUserDto.id = uuid();
    this.users.push(createUserDto)
    return createUserDto;
  }

  findAll() {
    if (this.users.length == 0) {
      throw new UserExceprion('There are no mons');
    }
    return this.users;
  }

  findOne(id: string) {
    for (const item of this.users) {
      if (item.id == id) return item;
      throw new UserExceprion('Such id does not exist');
    }
  }
  
  update(id: string, updateMonPlanDto: UpdateUserDto): void {
    const pid = this.users.findIndex((p) => p.id == id);
    this.users[pid] = {
      ...this.users[pid],
      ...updateMonPlanDto,
    };
  }

  remove(id: string) {
    const result: CreateUserDto[] = this.users.filter((c) => c.id !== id);
    if (result.length === this.users.length) {
      throw new UserExceprion('Such id does now exist');
    }

    this.users = result;
  }

  createOrder(data) {
    return data;
  }
}