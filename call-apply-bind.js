// call apply bind



//  CALL METHOD
const user1 = {
    firstName: 'harshit',
    age:8,
    about: function(hobby,fav){
        console.log(this.firstName,  this.age, hobby,  fav)
    }
}

// user1.about()
 
const user2 = {
    firstName: 'mohit',
    age:9,
   
}


user1.about.call(user2,"Driving","Cars & bike")

// APPLY METHOD

 const user3 = {
    name:"harrama",
    age:19
 }

 function about(name){
    console.log(name , this.name)

 }

 about.apply(user3,["haie"])

 // BIND METOD

 const user4 = {
    name:"mohan",
    age:15,
    gt(){
        console.log(this.name)

    }
 }
 

 function detail(name){
    console.log(this.age ,this.name, name)
 }


 const fync = detail.bind(user4 , "rss")

 fync()

 user4.gt()