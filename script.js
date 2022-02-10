var selectedRow = null

function onFormSubmit() 
{
    if (validate()) 
    {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() 
{
    var formData = {};
    formData["mName"] = document.getElementById("mName").value;
    formData["mid"] = document.getElementById("mid").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) 
{
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.mName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm()
{
    document.getElementById("mName").value = "";
    document.getElementById("mid").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td)
{
   selectedRow = td.parentElement.parentElement;
    if (confirm('Are you sure want to Edit this record !!!')) {
    document.getElementById("mName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;}
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.mName;
    selectedRow.cells[1].innerHTML = formData.mid;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) 
{
    if (confirm('Are you sure to delete this record ?')) 
    {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate()
{
    isValid = true;
    if (document.getElementById("mName").value == "") 
     {
        isValid = false;
        document.getElementById("mNameValidationError").classList.remove("hide");
        document.getElementById("mName").focus();
     } else
       {
        isValid = true;
        if (!document.getElementById("mNameValidationError").classList.contains("hide"))
            document.getElementById("mNameValidationError").classList.add("hide");
        if (document.getElementById("mid").value == "")
          {
            isValid = false;
            document.getElementById("midValidationError").classList.remove("hide");
            document.getElementById("mid").focus();
          } else
            {
              isValid = true;
              if (!document.getElementById("midValidationError").classList.contains("hide"))
                document.getElementById("midValidationError").classList.add("hide");
              if (document.getElementById("quantity").value == "")
               {
                isValid = false;
                document.getElementById("quantityValidationError").classList.remove("hide");
                document.getElementById("quantity").focus();
               } else
                 {
                   isValid = true;
                   if (!document.getElementById("quantityValidationError").classList.contains("hide"))
                    document.getElementById("quantityValidationError").classList.add("hide");
                    //
                  if (document.getElementById("price").value == "")
                   {
                      isValid = false;
                      document.getElementById("priceValidationError").classList.remove("hide");
                      document.getElementById("price").focus();
                   } else
                      {
                        isValid = true;
                        if (document.getElementById("priceValidationError").classList.add("hide")); 
                           return isValid;
                      }
                 }
            }
 
        }
}