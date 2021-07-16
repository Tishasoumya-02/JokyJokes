
chrome.runtime.onMessage.addListener(function(msg,sender,response)
{
    var url="https://official-joke-api.appspot.com/jokes/random";
    fetch(url).then(function(res)
    {
        if (res.status !== 200) {
            console.log("error")
            return;
          }
          res.json().then(function(data) {
              console.log(data);
              alert(data[0].setup+" 🤔");
              alert(data[0].punchline+" 😆");
          });
        }).catch(function(err) {
         console.log(err);
        });
      });
  