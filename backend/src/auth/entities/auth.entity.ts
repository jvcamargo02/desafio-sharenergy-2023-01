export type User = {
    name: string;
    username: string;
    password: string;
}

export class Auth { 
    name: string;
    username: string;
    password: string;

    constructor(props: User) {
        Object.assign(this, props)
    }
}
