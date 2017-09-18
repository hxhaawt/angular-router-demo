import {Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(private router: Router){

    }

    // resolve 守卫
    // 第三种路由传递参数的方法，同时要在app-routing.module.ts的路由规则里进行设置
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<Product>|Promise<Product>|Product {

        const productId: number = route.params['id'];

        // 测试 id 是否为1,这只是测试用 这个ID是路由routerLink传递过来的
        if (productId == 1) {
            // 传递参数给对应调用这个组件的组件，这里是product.component.ts
            return new Product(5, 'iphone7');
        } else {
            // 导航到 home 页面
            this.router.navigate(['/home']);

            return undefined;
        }

    }

}













