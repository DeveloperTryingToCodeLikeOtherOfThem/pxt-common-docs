function generateUser() {
  createProfile();
  return "USER" + Math.randomRange(1000, 9999);
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
