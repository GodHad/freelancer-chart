export class User {
    _id: string = '';
    username: string = '';
    email: string = '';

    constructor(initializer: any) {
        if(!initializer) return ;
        if(initializer._id) this._id = initializer._id;
        if(initializer.username) this.username = initializer.username;
        if(initializer.email) this.email = initializer.email;
    }
}