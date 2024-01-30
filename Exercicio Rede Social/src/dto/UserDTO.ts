import { User } from "../model/User";

export class UserDTO {
    constructor(
        public id: number,
        public name: string,
        public userName: string,
        public birthDate: Date,
        public bio: string,
        public avatarUrl: string,
        private email: string,
    ) { }

    static fromModel(user: User): UserDTO {
        const userDTO = new UserDTO(
            user.id,
            user.name,
            user.userName,
            user.birthDate,
            user.bio,
            user.avatarUrl,
            user.email,
        );
        return userDTO;
    }

    toModel(): User {
        const newUser = new User();
        newUser.name = this.name;
        newUser.userName = this.userName;
        newUser.birthDate = this.birthDate;
        newUser.bio = this.bio;
        newUser.avatarUrl = this.avatarUrl;
        newUser.email = this.email;
        return newUser;
    }
}