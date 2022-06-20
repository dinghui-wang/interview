import { Post, Body, Controller } from '@midwayjs/decorator';
import { UserLoginDTO } from '../dto/user.dto';
import { UserModel } from '../model/user.model';
import { JwtService } from '@midwayjs/jwt';


@Controller('/api/user')
export class UserController {

    @Post('/login')
    async login(@Body() body: UserLoginDTO): Promise<any> {
        const userModel = new UserModel();
        const user = await userModel.getUserByUsernameAndPassword(body.username, body.password);
        if (!user) {
            return {
                code: 400,
                result: "error",
                message: "账号或密码不正确",
                data: null
            }
        }
        const jwtService = new JwtService();
        const token = jwtService.sign({
            id: user.id,
            username: user.username,
        });
        return {
            code: 200,
            result: "success",
            message: "登录成功",
            data: {
                result: "success",
                token,
            }
        };
    }
}

