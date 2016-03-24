//Customer constructor with firstname and lastname properties, the constructor will add each of these properties to every contact object that is created.

function Customer(first, last, balance) {
  this.firstName = first;
  this.lastName = last;
  this.balance = balance;
}

Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Customer.prototype.deposit = function(userinput){
  this.balance = this.balance + userinput;
};

Customer.prototype.withdraw = function(userinput){
  this.balance = this.balance - userinput;
};


$(document).ready(function() {

  $("form#new-customer").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var userinput = parseInt($("input#moneyamount").val());
    $("#balanceamount").text(userinput);

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName, userinput);
    $("#customername").text(newCustomer.fullName());

    $(".name").hide();
    $(".submit").hide();
    $(".transactions").show();
    $(".balance").show();


    $("#deposit").click(function(){
      var userinput = parseInt($("input#moneyamount").val());
      newCustomer.deposit(userinput);
      $("#balanceamount").text(newCustomer.balance);

    });

    $("#withdraw").click(function(){
      var userinput = parseInt($("input#moneyamount").val());
      newCustomer.withdraw(userinput);
      $("#balanceamount").text(newCustomer.balance);
      debugger;
    });


    $("#newaccount").click(function(){
      location.reload();
    });


  });





});
