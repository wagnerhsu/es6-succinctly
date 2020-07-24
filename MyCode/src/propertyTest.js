export default  ()=>{
    class Person {
        constructor(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    const p = new Person('t');
    console.log(p.name);
    p.name = "Test";
    console.log(p.name);
}