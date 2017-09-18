import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

    private productId: number;
    private productName: string;

    constructor(
        private routerInfo: ActivatedRoute
    ) { }

    ngOnInit() {
        // 第一种路由传递参数的方法，对应的目标接收参数的方法
        // this.productId = this.routerInfo.snapshot.queryParams['id'];

        // 第二种路由传递参数的方法，对应的目标接收参数的方法
        // this.productId = this.routerInfo.snapshot.params['id'];
        this.routerInfo.params.subscribe( (params: Params) => this.productId = params['id']);

        // 第三种路由传递参数的方法，对应的目标接收参数的方法
        this.routerInfo.data.subscribe( (data: {product: Product}) => {
            this.productId = data.product.id;
            this.productName = data.product.name;
        } );
    }
}


export class Product {
    constructor(public id: number, public name: string) {

    }
}





























