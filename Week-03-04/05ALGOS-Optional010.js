
let scanAndFind = (array, obj)=> array.filter((element) => element [Object.keys(obj)[0]] === Object.values(obj)[0])

console.log(scanAndFind(
    [
      {
        firstName: "Vito",
        lastName: "Corleone",
      },
      {
        firstName: "Jon",
        lastName: "Snow",
      },
      {
        firstName: "Harry",
        lastName: "Potter",
      },
      {
        firstName: "Michael",
        lastName: "Corleone",
      },
    ],
    {
      lastName: "Corleone",
    }
  ));
  
  // Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]
  
  console.log(scanAndFind(
    [
      { fullName: "Roi Baudoin", id: 49762 },
      { fullName: "Margareth Tatcher", id: 94357 },
      { fullName: "Barack Obama", id: 76458 },
      { fullName: "Emmanuel Macron", id: 10687 },
      { fullName: "Charles de Gaulle", id: 67098 },
      { fullName: "Boris Johnson", id: 16437 },
    ],
    { id: 10687 }
  ));
  // Result : [{fullName: "Emmanuel Macron", id: 10687}]


