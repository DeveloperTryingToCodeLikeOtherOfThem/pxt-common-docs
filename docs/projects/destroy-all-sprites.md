## Deleting all sprites in the screen

I have seen many people ask this question, "How do I delete every single sprite in the screen, even with no kinds." 

## 1 Create a Backward Loop
First, you have to make a for loop. 
`for (let i = allSpr.length - 1; i >= 0; i--) {
  // adding code later
 }` 

 The reason why the condition can either be greater or equal to zero is because you are shrinking the array
 while iterating forward.

## 2 Removing Sprites
 Next, we have to remove sprites by using the removeElement method.
 `removeElement` searches for the actual object and removes it safely.
 `for (let i = allSpr.length - 1; i >= 0; i--) {
    allSpr.removeElement(); // adding argument in the final step
  }
 `

 ## 3. Remove the Sprite at the Current Index
 Finally, we have to get all the sprites by using `allSpr[i]`.
 for (let i = allSpr.length - 1; i >= 0; i--) {
    allSpr.removeElement(allSpr[i]); // tells the compiler to read the allSpr array and repeating the index as many times as the for loop repeats
  }
