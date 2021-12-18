$(document).ready(function(){
    $("input").prop('required', true)
    $('#age').prop('min', 18);
    $('#age').prop('max', 60);
    $("#panNo").change(function(){
        var inputValues = $(this).val();
        var panNumber = inputValues.toUpperCase()
        console.log(panNumber)
        var regex = /[A-Z]{5}[0-9]{4}[A-Z]$/;
        if(!regex.test(panNumber)){
            $("#panNo").val("")
            alert("Invalid PAN no.")
            return regex.test(inputValues)
        }
    });
})