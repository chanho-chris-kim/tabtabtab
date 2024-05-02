const api = "https://tabtabtab-chk.herokuapp.com";
let userID = 0;
let currentURL = "";
let URLName = "";

chrome.tabs.getSelected(null, function (tab) {
  currentURL = tab.url;
  URLName = tab.title;
});

function handleOnclick(url) {
  chrome.tabs.create({ url: `${url}`, active: true });
}

function handleLogoLink() {
  chrome.tabs.create({ url: `${api}`, active: true });
}
document.querySelector(".logo").onclick = () => {
  handleLogoLink();
};

function handleDelete(urlID, userID) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${api}/list/${userID}/${urlID}`, options).then(() => {
    loadList();
  });
}

function loadList() {
  chrome.runtime.sendMessage({ message: "loadUserInfo" }, function (response) {
    console.log(response);
    userID = response.sub;
    fetch(`${api}/list/${userID}`).then(function (res) {
      res.json().then(function (lists) {
        console.log(lists);
        const list = document.getElementById("unordered-list");
        const reset = document.querySelectorAll("li");
        if (reset) {
          reset.forEach((list) => {
            list.remove();
          });
        }

        lists.forEach((listData) => {
          console.log(listData);
          const item = document.createElement("li");
          const link = document.createElement("p");
          const deleteButton = document.createElement("p");
          const divElement = document.createElement("div");

          divElement.classList.add("organize-p-tags");
          deleteButton.innerText = "X";
          deleteButton.onclick = () => {
            handleDelete(listData.id, userID);
          };
          link.innerText = `${listData.URLName}`;
          link.onclick = () => {
            handleOnclick(listData.URLPath);
          };
          divElement.appendChild(link)
          divElement.appendChild(deleteButton)
          item.appendChild(divElement);
          list.appendChild(item);
        });
      });
    });
  });
}

loadList();

document.querySelector("#sign-out").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "logout" }, function (response) {
    if (response === "success") window.close();
  });
});

document.querySelector("#add-button").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "addURL" }, function (response) {
    console.log(response);
    userID = response.sub;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        URLName: URLName,
        URLPath: currentURL,
      }),
    };
    fetch(`${api}/list/${userID}`, options).then(() => {
      loadList();
    });
  });
});
