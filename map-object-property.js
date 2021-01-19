const students =  [
    {id: 21 ,name: 'Farhad Ahmed'},
    {id: 32 ,name: 'Farhana Moni'},
    {id: 43 ,name: 'Evan Ahmed'},
    {id: 54 ,name: 'Fayshal Ahmed'}

];

 // for loop style //

const output = []

for (let i = 0; i < students.length; i++ ){
  const student = students[i] ;
  const result = student.name ;
  output.push(result);

}
console.log(output);

// Map  style// 

const names = students .map( s => s.name);
 const Ids = students.map ( s => s.id);
 console.log(Ids); 