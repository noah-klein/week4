// This code runs when the page loads
$(function() {

  // Add the speak() method to alert something incredible
  var dog = {
    name: "Rosie",
    breed: "Pug",
    color: "Fawn",
    speak: function() {
      window.alert("woof")
    }
  }

  dog.speak()

})
