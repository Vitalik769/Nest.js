import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: CreateUserDto): CreateUserDto;
    findAll(): CreateUserDto[];
    findOne(id: string): CreateUserDto;
    update(id: string, updateUserDto: UpdateUserDto): void;
    remove(id: string): void;
}
