// // let data = [
// //     "element1",
// //     "element2",
// //     "element3",
// //     "element4",
// // ];

// // for (let elem of data) {
// // console.log(elem);
// // }



// let cat = {
//     nom : "Lucky",
//     age : 10,
//     couleur :"grey",
//     food : ["meat", "fish", "water", "milk"]
// }

// // console.log(cat["nom"]); // notation orientée tableau
// // console.log(cat.nom);   // notation orientée objet

// for(prop in cat){
//     if(prop === "food") {
//         console.log("Le chat mange : ")
//         for (let aliment of cat[prop]){
//             console.log(aliment);
//         }
//     }
//     else {
//         console.log(prop + " : " +cat[prop]);
//     }
// }

// // let data = [
// //     {
// //      "marque" : "renault",
// //         "prix" : 25000,
// //         "type" : "clio",
// //         "year" : 1991
// //     },
// //     {
// //         "marque" : "saab",
// //         "prix" : 45000,
// //         "type" : "500e",
// //         "year" : 1988

// //     },
// //     {
// //         "marque" : "Chevrolet",
// //         "prix" : 37000,
// //         "type" : "impala",
// //         "year" : 1958

// //     },
// // ];

// // for (let car of data){
// //     for (let prop in car){
// //         console.log(`${prop} : ${car[prop]}`)
// //     // console.log(`Marque : ${car.marque}`);
// //     // console.log(`Prix : ${car.prix}`);
// //     // console.log(`Type : ${car.type}`);
// //     }
// // console.log("------------");

// // }


// console.log("_________________________");

// data = {
//     "origin" : 'localhost',
//     "status" : "done",
//     "code" : 200,
//     "content": [
//         {
//             "taste" : "vanilla",
//             "price" : 6
//         },
//         {
//             "taste" : "chocolate",
//             "price" : 4.5
//         },
//         {
//             "taste" : "boudin-noir",
//             "price" : 14
//         }
//     ],
//     "date" : "21/05/2006",
//     "is_saved" : true,
//     "authors" : ["mike kelly", "john smith", "kelly franklin"]
// }

// for (ice of data.content) {
//     for (prop in ice){
//         console.log(ice[prop]);
//     }
// }

let Car = function(model, year){
    this.model = model,
    this.year = year,
    this.drive = function (){
        console.log(this.model + " says : vroum vroum");
    }
}

let mycar = new Car("clio", 1992);
let my_wifecar = new Car("206", 1998);

console.log(mycar.model);
mycar.drive();

console.log(my_wifecar.model);
my_wifecar.drive();
