import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";
import {ProductResolve} from "./guard/product.resolve";

const routes: Routes = [
    {
        // 重定向访问根目录时，默认为 home
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'chat',
        component: ChatComponent,
        outlet: 'aux'
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        children: [
            { path: '', component: ProductDescComponent},
            { path: 'seller/:id', component: SellerInfoComponent}
        ],

        // canActivate: [LoginGuard],
        // canDeactivate: [UnsavedGuard]

        // resolve 是一个对象不是数组
        resolve: {
            product: ProductResolve
        }


    },
    {
        // 当访问不存在的页面时，就跳转到404页面，这个路由的配置要放在最后面，
        // 不然会一遇到这个 ** 时就会匹配，就会连接到 404页面
        path: '**',
        component: Code404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [LoginGuard, UnsavedGuard, ProductResolve]
})

export class AppRoutingModule { }
