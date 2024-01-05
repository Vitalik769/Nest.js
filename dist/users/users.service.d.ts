import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): CreateUserDto;
    findAll(): CreateUserDto[];
    findOne(id: string): CreateUserDto;
    update(id: string, updateMonPlanDto: UpdateUserDto): void;
    remove(id: string): void;
}
