
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if (numAnimals < 0 || avgFood < 0){
        return -1
    } else{
        return avgFood * numAnimals
    }
}

/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function mostPopularDays(week) {

    if (!week && week.length === 0) {
        return null
    }

        const counterDays = {};
        week.forEach(day => {
            if (counterDays[day]) {
                counterDays[day]++;
            }else{
                counterDays[day] = 1;
            }
        });


    const maxCount = Math.max(...Object.values(counterDays));
    const mostPopularDays = Object.keys(counterDays).filter(day => counterDays[day] === maxCount);


    if (mostPopularDays.length === 1) {
        return mostPopularDays[0];
    } else {
        return mostPopularDays;
    }

}

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */

const names = ["Boy", "Sweet", "Bro"];
const types = ["Dog", "Cat", "Bird"];
const breeds = ["Retriever", "Persian", "Canary"];
function createAnimalObjects(names, types, breeds) {
    if (!names || !types || !breeds || names.length !== types.length || names.length !== breeds.length || names.length === 0) {
        return [];
    }

    const animals = [];
    for (let i = 0; i < names.length; i++) {
        const animal = {
            name: names[i],
            type: types[i],
            breed: breeds[i]
        };
        animals.push(animal);
    }

    return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

