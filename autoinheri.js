let Automobile={
    Model:"2022",
    Quality:"Good",
    price:"Above 5 lakh",
    quantity:"1"
}
let products1=Object.create(Automobile,{name: {value:"Car1"}})
let products2=Object.create(Automobile,{name: {value:"Tempu"}})
let products3=Object.create(Automobile,{name: {value:"Truck"}})
let products4=Object.create(Automobile,{name: {value:"Roadways"}})
console.log(products1)