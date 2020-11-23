class Block{

    constructor(x, y, width, height) {

        var options = {
           
            restitution :0.4,

            friction :0.0,

            //isStatic:true
           
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;

        this.height = height;
        
        World.add(world, this.body);

      }

      display(){

        

        if (this.body.speed<3) {

         var angle = this.body.angle;
         var pos = this.body.position;
        }
         
        
         else {
        
           World.remove (world,this.body);
        
           this.visibility = this.visibility-5;
        
           push ()

           translate(pos.x, pos.y);

           rotate(angle);

           rectMode(CENTER);

           rect(0,0,this.width, this.height);

        
           tint (255,this.visibility);
        
           image (this.image,this.body.position.x, this.body.position.y,50,50);
        
           noTint ();
        
           pop()
           
         }
        
        }

        
}