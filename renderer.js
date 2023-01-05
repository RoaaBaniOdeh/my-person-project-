
class render{
    peopleRenderer(people){
       // console.log(people)
        const source = $('#myPeople-template').html();
        const template = Handlebars.compile(source);     
        const newHTML = template({people}); 
        $('#people').append(newHTML);
     }
}
