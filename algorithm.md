### Banking Web App

**Things Program Needs**

  - Variable(?) to hold the account Balance

**Program Plan**

1. User inputs:
  - First Name
  - Last Name
2. User Selects Transaction type
  - If transaction type = Deposit {
    - Hide
      * Input Fields for Name
      * Deposit Button
      * Withdraw Button
    - Show:
      * Input Field for $Amount to Deposit
      * Submit Button (When clicked (function){           *LOOP OF SOME SORT*
          - Hide submit Button
          - Add $Amount to accountbalance
          - Display buttons:
            - Transaction with Same Account (On click (function){
                - Show Input Field for $Amount to Deposit
                * Submit Button (When clicked (function){
                    - Hide submit Button
                    - Add $Amount to accountbalance
              })
            - Transaction with New Account (On click (function){
                - Returns back to beginning with user inputs for name and buttons for transaction type
                - Maybe refresh page?
              })
        })
  - If transaction type = Withdraw {
    - Hide
      * Input Fields for Name
      * Deposit Button
      * Withdraw Button
    - Show:
      * Input Field for $Amount to Withdraw
      * Submit Button (When clicked (function){           *LOOP OF SOME SORT*
          - Hide submit Button
          - Subtract $Amount from accountbalance
          - Display buttons:
            - Transaction with Same Account (On click (function){
                - Show Input Field for $Amount to Withdraw
                * Submit Button (When clicked (function){
                    - Hide submit Button
                    - Subtract $Amount from accountbalance
              })
            - Transaction with New Account (On click (function){
                - Returns back to beginning with user inputs for name and buttons for transaction type
                - Maybe refresh page?
              })
        })


  }
