function handleLogoLink(){
  chrome.tabs.create({ url: `http://localhost:3000/`, active: true });
}
document.querySelector(".logo").onclick = () => {
  handleLogoLink();
};

document.querySelector("#sign-in").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "login" }, function (response) {
    console.log("response from google OAUTH")
    console.log(response)
    let status = null;
    const id = response.sub;
    if (id) {
      const url = "http://localhost:5000/users";
      const selectedUser = `${url}/${id}`
      const options = {
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        }
      };
      fetch(selectedUser, options).then((response) => {
        console.log("success:")
        console.log(response);
        status = response.status
      }).then(()=>{
        if(!status === 404){
          return
        } else{
        console.log("Fail, creating a new account")
        const options = {
          method: "POST",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: id,
            name: "default Name",
            email: "",
            image: "https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png"
          }),
        };
        fetch(url, options).then((response) => {
          console.log(response);
        });
      }
      });
    }
  });
});


