import { shape } from "./shape"
export class rectangle extends shape{
    constructor(theX:number,theY:number,private _height:number,private _width:number){
        super(theX,theY)
    }
    public getinfo(): string {
       return super.getinfo()+ "height: " + this._height + "width: " + this._width
    }
    public calculateArea(): number {
        return this._height+this._width
    }
}