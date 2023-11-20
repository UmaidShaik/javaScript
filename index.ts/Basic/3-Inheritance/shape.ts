export abstract class shape{
constructor(private _x:number,private _y:number){
}
 public getinfo():string{
 return "shape x: " + this._x +"y:" +this._y
}
public abstract calculateArea():number;
}