const { default: ExpoStatusBar } = require("expo-status-bar/build/ExpoStatusBar");

class Meal {
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title
        this.affordability = affordability
        this.complexity = complexity
        this.imageUrl = imageUrl
        this.duration = duration
        this.steps=steps
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFree = isLactoseFree
    }

}

export default Meal