function handleLogoLink(){
  chrome.tabs.create({ url: `http://localhost:3000/`, active: true });
}
document.querySelector(".logo").onclick = () => {
  handleLogoLink();
};

document.querySelector("#sign-in").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "login" }, function (response) {
    console.log(response)
    const id = response.sub;
    if (id) {
      const url = "http://localhost:5000/users";
      console.log(id)
      const options = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          name: "name",
          email: "email"
        }),
      };
      fetch(url, options).then((response) => {
        console.log(response);
      });
    }
  });
});


