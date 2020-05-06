let toDoList = [];

// event listener on form 
$("form").on("submit", function(e) {
    e.preventDefault(); 
    const input = $("input")
    const newItem = input.val();
    toDoList.push(newItem);
    // window.localStorage.setItem("New Item List", toDoList);
    updateStorage(toDoList);
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
   const removeStorage = $(this).siblings("h3").text();
   $(this).closest("tr").fadeOut(500, function() {
    this.remove(); 
   }); 
   let idx = storageArr.indexOf(removeStorage);
   storageArr.splice(idx, 1);
   updateStorage(storageArr);
});

// load local storage, if it exists
let storageArr = window.localStorage.getItem("New Item List").split(",");
for (let i = 0; i < storageArr.length; i++) {
    toDoList.push(storageArr[i]);
    const newRow = `<tr>
        <td>
            <a href="">X</a><h3>${storageArr[i]}</h3>
        </td>
    </tr>`;
    $("tbody").append(newRow);
}

function updateStorage(arr) {
    window.localStorage.setItem("New Item List", arr);
}