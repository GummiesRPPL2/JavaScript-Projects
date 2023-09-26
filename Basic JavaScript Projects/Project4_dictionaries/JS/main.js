/* The function has the dictionary and the delete operator deletes the specified key value pair */
function meals_dictionary(){
    var meals = {
        Breakfast : "Pancakes",
        Lunch : "Turkey BLT",
        Dinner : "Stead and Potatoes",
        Dessert : "Chocolate Cake",
        Snack : "Peanut Butter Bites"
    }
    delete meals.Dessert;
    document.getElementById("Dictionary").innerHTML = meals.Dessert;
}
