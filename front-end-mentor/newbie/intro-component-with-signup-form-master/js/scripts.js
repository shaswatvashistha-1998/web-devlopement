function validate_fields(){
  if (document.getElementById('NameInput').value == ""){
      console.log("Name must not be empty");
  }
  if (document.getElementById('LastNameInput').value == ""){
      console.log("Last name must not be empty");
  }
  if (document.getElementById('EmailInput').value == ""){
      console.log("Email must not be empty");
  }
  if (document.getElementById('PasswordInput').value == ""){
      console.log("Password must not be empty");
  }

}
