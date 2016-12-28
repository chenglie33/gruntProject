/**
 * Created by Administrator on 2016/12/28.
 */
describe("test Person",function(){
    var Student= require('../../lib/jasmine_examples/MyMetch');
    var student;
    beforeEach("new student",function(){
        student=new Student();
    })
    it("test student is can be used",function(){

        expect(new Student().init()).toBe("wang say he love cake")
    })
});