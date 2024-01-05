"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExceprion = void 0;
class UserExceprion extends Error {
    constructor(message = ``) {
        super();
        this.message = message;
    }
    what() {
        return this.message;
    }
}
exports.UserExceprion = UserExceprion;
//# sourceMappingURL=users.exeption.js.map