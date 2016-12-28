/**
 * Created by Administrator on 2016/12/28.
 */
var Person=  function(){
    this.love=function(){
        console.log(this.name+" say he love cake");
    }
    var klass=function(){
        this.init.apply(this,arguments);
    }
    klass.prototype.init=function(){console.log(this.name+"           class")}
    klass.prototype.baseMethod=function(){
        console.log("this is base do")
    }
    return klass;
}

var Student=new Person;
Student.prototype.init=function(){
    this.name="student";
    return this.name;
}

module.exports = Student;