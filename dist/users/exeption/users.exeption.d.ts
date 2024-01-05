export declare class UserExceprion extends Error {
    readonly message: string;
    constructor(message?: string);
    what(): string;
}
