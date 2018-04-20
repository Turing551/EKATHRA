/**
 * Created by sharvil on 28/12/17.
 */
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='login']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      college_name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      contact_no: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10
      },
      password: {
        required: true,
        maxlength: 30
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      college_name: "Please enter your college name",
      password: {
        required: "Please provide a password",
        maxlength: "Your password must be no more than 30 characters long"
      },
      email: "Please enter a valid email address",
      contact_no: {
          required: "Please provide your contact number",
          minlength: "Your contact number must contain 10 digits",
          maxlength: "Your contact number must contain 10 digits"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

/**
 * Created by sharvil on 28/12/17.
 */
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='signup']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      clg_name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      contact_no: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10
      },
      password: {
        required: true,
        maxlength: 30
      },
      confirm: {
          required: true,
          equalTo: "#password1",
          maxlength: 30
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      college_name: "Please enter your college name",
      password: {
        required: "Please provide a password",
        maxlength: "Your password must be no more than 30 characters long"
      },
      email: "Please enter a valid email address",
      contact_no: {
          required: "Please provide your contact number",
          minlength: "Your contact number must contain 10 digits",
          maxlength: "Your contact number must contain 10 digits"
      },
      confirm: {
          required: "Please repeat your above password",
          maxlength: "Your password must be no more than 30 characters long"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});