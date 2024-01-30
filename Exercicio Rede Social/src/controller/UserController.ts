import { AppDataSource } from "../data-source";
import { UserDTO } from "../dto/UserDTO";
import { User } from "../model/User";

export class UserController {
    constructor() {}

    async getUsers() {
        const userRepository = AppDataSource.getRepository(User);
        const usersList = await userRepository.find(); 
        return usersList.map((user:User) => UserDTO.fromModel(user));
    }

    async createUser(userDTO: UserDTO) {
        const userRepository = AppDataSource.getRepository(User);
        const newUser = userDTO.toModel();
        const savedUser = await userRepository.save(newUser);
        return UserDTO.fromModel(savedUser)
    }
}