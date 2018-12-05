$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

var div = document.getElementById("submit");

$(document).ready(function createTxtField(){
    div.innerhtml = '';
    var field = div.appendChild(document.createElement('field'));
    field.name = 'input';
    field.action = '';
    field.appendChild(document.createTextNode('Enter your name into the text field '))ß;

    var input = div.appendChild(document.createElement('input'));
    input.type = 'text';
    input.name = 'name';
    input.id = 'name';

    fieldName = document.getElementById("name");
    fieldName.defaultValue = "";
    fieldName.setAttribute("onfocus", "this.value=''");

    input = div.appendChild(document.createElement('button'));
    input.type = 'button';
    input.onclick =  () => {
        if(fieldName.value == ""){
             var textNode = document.createTextNode("Please enter your name");
        }
        else {
            var textNode = document.createTextNode("Thanks for making an appointment " + fieldName.value);
        }

        var header = document.createElement("h1");
        header.appendChild(textNode);
        document.body.append(header);
    };


    var submit = document.createTextNode('Submit');
    input.appendChild(submit);
});