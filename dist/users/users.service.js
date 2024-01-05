"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_exeption_1 = require("./exeption/users.exeption");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    create(createUserDto) {
        createUserDto.id = (0, uuid_1.v4)();
        this.users.push(createUserDto);
        return createUserDto;
    }
    findAll() {
        if (this.users.length == 0) {
            throw new users_exeption_1.UserExceprion('There are no mons');
        }
        return this.users;
    }
    findOne(id) {
        for (const item of this.users) {
            if (item.id == id)
                return item;
            throw new users_exeption_1.UserExceprion('Such id does not exist');
        }
    }
    update(id, updateMonPlanDto) {
        const pid = this.users.findIndex((p) => p.id == id);
        this.users[pid] = {
            ...this.users[pid],
            ...updateMonPlanDto,
        };
    }
    remove(id) {
        const result = this.users.filter((c) => c.id !== id);
        if (result.length === this.users.length) {
            throw new users_exeption_1.UserExceprion('Such id does now exist');
        }
        this.users = result;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map