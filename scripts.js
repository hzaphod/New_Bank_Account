//Customer constructor with firstname and lastname properties, the constructor will add each of these properties to every contact object that is created.

function Customer(first, last, balance) {
  this.firstName = first;
  this.lastName = last;
  this.balance = 0;
}

Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Customer.prototype.deposit = function(userinput){
  return this.balance = this.balance + userinput;
};

Customer.prototype.withdraw = function(userinput){
  return this.balance = this.balance - userinput;
};


$(document).ready(function() {

  $("form#new-customer").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newCustomer = new Customer(inputtedFirstName, inputtedLastName);
    $("#customername").text(newCustomer.fullName());

    var userinput = parseInt($("input#moneyamount").val());
    $("#balanceamount").text(userinput);

    $(".name").hide();
    $(".submit").hide();
    $(".transactions").show();
    $(".balance").show();



    $("#deposit").click(function(){
      debugger;
      var newBalance = new Customer(inputtedFirstName, inputtedLastName, userinput); //This works for initial deposits //maybe call it new account instead
      var newBalance = new Customer(userinput); // for future deposits just call the function
      $(".balance").show();
      $(".balanceamount").text("$ " + newBalance);
    });

    $("#newaccount").click(function(){
      location.reload();
    });


  });





});
