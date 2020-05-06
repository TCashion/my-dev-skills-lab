// event listener on form 
$("form").on("submit", function(e) {
    e.preventDefault(); 
    const input = $("input")
    const newItem = input.val();
    const newRow = `<tr>
                        <td>
                            <a href="">X</a><h3>${newItem}</h3>
                        </td>
                    </tr>`;
    $("tbody").append(newRow);
    input.val("");
});

// event listener on anchor
$("table").on("click", "a", function(e) {
   e.preventDefault();  
   console.log("anchor")
   $(this).closest("tr").fadeOut(500, function() {
    this.remove(); 
   }); 
});