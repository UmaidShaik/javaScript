import { shape } from "./shape"
export class rectangle implements shape{
    constructor(private _height:number,private _width:number){
    }
    public getinfo(): string {
       return "height: " + this._height + "width: " + this._width
    }
    public calculateArea(): number {
        return this._height+this._width
    }
}