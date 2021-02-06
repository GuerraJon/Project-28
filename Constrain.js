class Constrain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.Constrain = Constraint.create(options);
        World.add(world, this.Constraint);
    }

    fly(){
        this.Constrain.bodyA = null;
    }

    display(){
        if (this.Constrain.bodyA){
            var pointA = this.Constrain.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}