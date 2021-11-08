/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

const avgPrepTime = 2;

export function cookingStatus(remainingTime){
  let cookingStatus;
  if(remainingTime === undefined){
   cookingStatus = 'You forgot to set the timer.';
  }else if(remainingTime <= 0){
    cookingStatus = 'Lasagna is done.';
  }else{
    cookingStatus = 'Not done, please wait.';
  }

  return cookingStatus;
}

export function preparationTime(layers, time){
  let preparationTime;
  if(time === undefined){
    preparationTime = layers.length * avgPrepTime;
  }else{
    preparationTime = layers.length * time;
  }

  return preparationTime;
}

export function quantities(layers){
  console.log(layers);
  let noodles = 0;
  let sauce = 0;
  let quantities = {noodles: 0, sauce: 0};

  for(let l in layers){
    console.log(l);
    if (layers[l] === 'noodles'){
      console.log(layers[l]);
      noodles += 1;
      console.log(noodles);
    }
    if(layers[l] === 'sauce'){
      console.log(layers[l]);
      sauce += 1;
      console.log(sauce);
    }
  }

  quantities.noodles = noodles*50;
  quantities.sauce = sauce*0.2;

  return quantities;
}

export function addSecretIngredient(friendsList, myList){
  let lastElement = friendsList[friendsList.length-1];
  console.log(lastElement);
  myList.push(lastElement);
  console.log(myList);
}

export function scaleRecipe(recipe, numOfPortions){
  let newScaledRecipe = {...recipe};
  let portions = numOfPortions/2;
  for(let key in newScaledRecipe){
    newScaledRecipe[key] *= portions;
  }

    return newScaledRecipe;
}
