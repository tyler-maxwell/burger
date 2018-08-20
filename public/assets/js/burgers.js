$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        console.log(this);

        var id = $(this).data("id");
        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
            }).then(
            function() {
                location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function() {
                location.reload();
            }
        );
    });
});
  