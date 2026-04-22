function generateUser() {
  createProfile();
  return "USER" + randomRange(1000, 9999);
} 
generateUser();

function createProfile() {
  fetch("https://github.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/blob/master/docs/static/userProfile.png")
  .then(res => res.blob())
  .then(blob => {
    const imgURL = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = imgURL; 
    document.body.appendChild(img);
  });
}

function randomRange(min, max) {
    if (min == max) return min;
    if (min > max) {
        let t = min;
        min = max;
        max = t;
    }
    if (Math.floor(min) == min && Math.floor(max) == max)
        return min + Math.floor(Math.random() * (max - min + 1));
    else
        return min + Math.random() * (max - min);
}
