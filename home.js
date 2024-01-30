const profileBox= document.querySelector('.profile-box');
const profilebuttn= document.querySelector(".profile-btn");
const container= document.querySelector(".container");

profilebuttn.onclick =() =>{
    // main.classList.add('active');
    if (profileBox.classList.contains("active")) {
        profileBox.classList.remove("active");
    } else {
        profileBox.classList.add("active");
    }
}
container.onclick=() =>{
    // main.classList.remove('active');
    if (profileBox.classList.contains("active")) {
        profileBox.classList.remove("active");
    } 
}

