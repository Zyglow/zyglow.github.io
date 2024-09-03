window.onload = function() {
  let numButton = document.getElementById('clicker');
  numButton.addEventListener("click", passGen);
}

function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
}

function passGen() {
    let numBox = document.getElementById("inputLength");
    let password = generatePassword(numBox.value);
    const svd = document.getElementById("pw");
    console.log(svd);
    //alert(password);
    svd.innerText = password;
    svd.style.backgroundColor = "white";
    svd.style.color = "black";
    console.log(svd);
}
