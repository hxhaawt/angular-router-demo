import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {Observable} from "rxjs/Observable";

export class UnsavedGuard implements  CanDeactivate<ProductComponent>{
    // canDeactivate(component: ProductComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean

    // 这是路由离开相关，只有这个函数返回true的时候，页面才可以离开
    // 外部通过 app-routing.module.ts 对某个路由进行设置即可使用
    canDeactivate(component: ProductComponent) {

        return window.confirm('你还没有保存，确定要离开么？');
    }
}
