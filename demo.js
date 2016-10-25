let mathFunction = function(){
  return {
    add: function(a,b){
      return a + b
    }
  }
}

mathFunction().add(2,5)

$('div').on('click', function(){
  this.text = 'Hello'
})

knex('users').where('id', 4).then(function(results){
  console.log(results);
})
