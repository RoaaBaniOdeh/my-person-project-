
  let renderer = new render()
  const displayPerson =  function(data) {

    let people =[]
    for (let person of data.results) {
    people.push({'id': person.id.value, 'title': person.name.title,'firstName': person.name.first ,'lastName': person.name.last ,'email':  person.email})
    }
   console.log(data)
   //console.log(users)
  renderer.peopleRenderer(people)
};
 
  $.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?results=10',//Requesting Multiple Users "fetch up to 5,000 generated users in one request using the results parameter" .
    success: displayPerson,
    error: function (xhr, text, error) {
        alert(text);
    }
    })
    
