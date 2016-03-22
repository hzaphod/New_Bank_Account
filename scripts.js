//Customer constructor with firstname and lastname properties, the constructor will add each of these properties to every contact object that is created.

function Customer(first, last) {
  this.firstName = first;
  this.lastName = last;
}


function deposit(userinput){
  var balance = 0;
  balance = balance + userinput;
  return balance;
}

function withdraw(userinput){
  var balance = 0;
  balance = balance - userinput;
  return balance;
}


//Prototype method; returns full name based on the properties firstname & lastname
Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//User interface logic
$(document).ready(function() {

  //form submit listener callback function
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    //Reads in the value of the inputted data in the two fields
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    //Creates a new customer object by calling the Customer constructor & passing it the inputted data from the form
    var newCustomer = new Customer(inputtedFirstName, inputtedLastName);
    //Adds Customers Name to span tag with the id #customername
    $("#customername").text(newCustomer.fullName());

  });

  $("button#withdraw").click(function(){
    $(".withdrawamount").show();
    $(".submit").show();
    $(".name").hide();
    $(".transactions").hide();

    $(".submit").click(function(){
      $("form#new-customer").submit(function(event) {
        event.preventDefault();
        var userinput = parseInt($("input#withdrawamount").val());
        var newBalance = withdraw(userinput);
        $(".balance").show();
        $(".balance").text("$ " + newBalance);
        $(".newtransactions").show();
        $(".withdrawamount").hide();
        $(".submit").hide();
      });
    });

    $("#newaccount").click(function(){
      location.reload();
    });

    // $("#currentaccount").click(function(){
    //
    // });

  });

  $("button#deposit").click(function(){
    $(".depositamount").show();
    $(".submit").show();
    $(".name").hide();
    $(".transactions").hide();

    $(".submit").click(function(){
      $("form#new-customer").submit(function(event) {
        event.preventDefault();
        var userinput = parseInt($("input#depositamount").val());
        var newBalance = deposit(userinput);
        $(".newtransactions").show();
        $(".depositamount").hide();
        $(".submit").hide();
      });
    });

    $("#newaccount").click(function(){
      location.reload();
    });


  });

});
