
import {CanActivate} from "@angular/router";

export class LoginGuard implements CanActivate {

    canActivate () {
        // 这是路由守卫，只有这个函数返回true的时候，页面才显示
        // 外部通过 app-routing.module.ts 对某个路由进行设置即可使用
        let login: boolean = Math.random() < 0.5;
        if ( !login ) {
            console.log('用户没有登录')
        }

        return login;
    }
}









