import { Rule, RuleType } from '@midwayjs/validate';


export class UserLoginDTO {
    // 用户名
    @Rule(RuleType.string().required())
    username: string;
    // 密码
    @Rule(RuleType.string().required())
    password: string;
}