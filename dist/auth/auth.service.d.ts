import { JwtService } from '@nestjs/jwt';
import * as mongoose from 'mongoose';
import { User } from '../schemas/user.schema';
import { SignUpUserDto } from './dto/sing-up.dto';
export declare class AuthService {
    private jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: mongoose.Model<User>);
    login(user: any): Promise<{
        access_token: string;
        res: mongoose.Document<unknown, {}, User> & User & {
            _id: mongoose.Types.ObjectId;
        };
    }>;
    signUp(user: SignUpUserDto): Promise<mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    }>;
}
