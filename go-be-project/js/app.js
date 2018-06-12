$(document).ready( function() {

    $('.submit-form').on( 'click', function( event ) {
        event.preventDefault();
        var name = $('#name').val(); //document.getElementById('name');
        var phone = $('#phone').val();
        var birth = $('#birth').val();
        var confirm = $('input[name=confirm]:checked', '#myForm').val(); 
        var gender = $('input[name=gender]:checked', '#myForm').val(); 
        var generateId = Math.floor(1 + (Math.random() * Math.pow(10, 7)));

        // validate input
        var isValid = false;

        if(name=="")
        {
            $("#nameerror").html("Please enter your name");
            isValid = false;
        }
        else if(name.length<3){
            $("#nameerror").html("first name too short");
            isValid = false;
        }
        else{
            $("#nameerror").html("Awesome!");
            isValid = true;
        }

        
        if(phone=="")
        {
            $("#phoneerror").html("Please enter your phone number");
            isValid = false;
        }
        else if(phone.length<10){
            $("#phoneerror").html("phone number too short");
            isValid = false;
        }
        else{
            $("#phoneerror").html("Awesome!");
            isValid = true;
        }
    
        
           if(birth=="")
        {
            $("#birtherror").html("Please Choose Your BirthDate");
            isValid = false;
        }
        else{
            $("#birtherror").html("Awesome!");
            isValid = true;
        }
        
           if(gender !=1 && gender!=2)
        {
            $("#gendererror").html("Please Choose Your Gender");
            isValid = false;
        }
        else{
            $("#gendererror").html("Awesome!");
            isValid = true;
        }
        
          if(!jQuery("#confirm").prop("checked") )
        {
            $("#confirmerror").html("Please Agree To The Terms");
            isValid = false;
        }
        else {
            $("#confirmerror").html("Awesome!");
            isValid = true;
        }




        if( isValid === true ) {
            // create an object to be saved
            var form_data = {
                name: name,
                phone: phone,
                birth: birth,
                confirm: confirm,
                gender: gender,
                generateId:generateId
            };
$('#myForm').append('<span>Great!</span>');
            // save the form data in local storage as string
            localStorage.setItem( 'form_data', JSON.stringify( form_data ) );
        }
    });

    

    if( localStorage.getItem( 'form_data') ) {
        // get the data as JS object
        var data = JSON.parse(localStorage.getItem( 'form_data') );
        console.log( data );
    }
});

