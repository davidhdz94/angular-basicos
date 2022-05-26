import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponet } from './contador/contador.componet';

@NgModule({
    declarations:[
        ContadorComponet
    ],
    exports:[
ContadorComponet
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule{

}