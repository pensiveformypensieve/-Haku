// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

 export class Size{
    constructor(width=80, height=60) {
        width<1 ? this.width=1:this.width=width;
        height<1 ? this.height=1:this.height=height;
    }
  
    resize(newWidth, newHeight){
      this.width = newWidth;
      this.height = newHeight;
    }
  }

  export class Position {
    constructor(x = 0, y = 0) {
        x<0 ? this.x = 0:this.x=x;
        y<0 ? this.y = 0:this.y=y;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

  export class ProgramWindow{
    constructor(){
        this.size = new Size();
        this.position = new Position();
        this.screenSize = new Size(800, 600);
    }

    resize(size){
        if(size.width > (this.screenSize.width - this.position.x) && 
        size.height > (this.screenSize.height - this.position.y)){
            this.size.width = (this.screenSize.width - this.position.x);
            this.size.height = (this.screenSize.height - this.position.y);
        } else if (size.width > (this.screenSize.width - this.position.x)){
            this.size.width = (this.screenSize.width - this.position.x);
        } else if (size.height > (this.screenSize.height - this.position.y)){
            this.size.height = (this.screenSize.height - this.position.y);
        } else {
            this.size = size;
        }
    }

    move(position){
        if(position.x > (this.screenSize.width - this.size.width) && 
        position.y > (this.screenSize.height - this.size.height)){
            this.position.x = (this.screenSize.width - this.size.width);
            this.position.y = (this.screenSize.height - this.size.height);
        } else if (position.x > (this.screenSize.width - this.size.width)){
            this.position.x = (this.screenSize.width - this.size.width);
        } else if (position.y > (this.screenSize.height - this.size.height)){
            this.position.y = (this.screenSize.height - this.size.height);
        } else {
            this.position = position;
        }
    }
}
  
export function changeWindow(position){
    position.resize(new Size(400,300));
    position.move(new Position(100,150));
    return position;
}