import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, password, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);
    
        if (!email) {
            throw new Error("Invalid email!");
        }
    
        if (!password) {
            throw new Error("Invalid password!");
        }
        
        const userAlreadyExists = await userRepository.findOne({
            email
        });
    
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }
    
        const user = userRepository.create({ name, email, password, admin });
        await userRepository.save(user);
    
        return user;
    }
}

export { CreateUserService }