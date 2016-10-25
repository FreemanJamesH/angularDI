let mathFunction = function(){
  return {
    add: function(a,b){
      return a + b
    }
  }
}

mathFunction().add(2,5)


// An aside:  We've just created a function that returns an object. This object has
//  functions (methods) which we can use, and may themselves return objects
// with methods. This method --> object --> method --> object pattern can continue
// ad infinitum. This is where we start to see chaining.

//Like using jQuery:

$("div").children().css("background-color", "yellow")

//See? '$' is a function, and '"div"' is the argument. This function returns an object,
//which we can see has the '.children' method available for our use, among many other
// methods it my have. This method, when called, returns another object which we
// can see has the '.css' method available.

//Note that we don't actually see these objects at any point, we just know it's there. You
// could console.log($("div").children()) or any other point to see these objects.

//We've seen it in knex, too:

knex('users').where('id', 4).then(function(results){
  console.log(results);
})

//'knex' is a function here, which when called with the "'users'" arguments returns
// an object, which has the '.where' method available. The object --> method
// chain continues with the '.then' method.

//
