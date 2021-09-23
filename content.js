
chrome.runtime.onMessage.addListener(function(msg,sender,response)
{
    var url="https://v2.jokeapi.dev/joke/Any?type=single";
    fetch(url).then(function(res)
    {
        if (res.status !== 200) {
            console.log("error")
            return;
          }
          res.json().then(function(data)
           {
              console.log(data);
            alert(data.setup+" 🤔");
              alert(data.delivery +" 🤣");
          });
        }).catch(function(err) {
         console.log(err);
        });
      });
  
