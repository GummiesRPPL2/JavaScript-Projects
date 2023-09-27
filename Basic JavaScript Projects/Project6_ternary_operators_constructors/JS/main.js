function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point
    }
}