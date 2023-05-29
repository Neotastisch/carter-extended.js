# Carter-Extended.js


[Changelog](https://github.com/Neotastisch/carter-extended.js/blob/main/changelog.md)



carter-extended.js is a module, simplifing usage for beginners, which want to make a personal assistant. It has a ton of useful features such as sending whatsapp messages, calling the api using one line of code and more. (Made for JS)

[Carter](https://www.carterapi.com/) agent. In order for it to work you'll need to create a [Carter](https://www.carterapi.com/) agent.



**Please note:** This module is still Work-In-Progress, expect bugs



## Installation



```shellscript

  npm install carter-extended.js

```



## Basic Usage



```js

  const { Carter } = require("carter-extended.js")



  // Initializing:


  Carter(apikey);
  
                                           
```



### Send a message to Carters API



```js

  //Asking the AI and sending it to WhatsApp:
  
  let response = await Carter.chat(message, playerid, speak, number)

```



`Carter.chat()` sends a fetch request. The "playerid" arg can be null, or any string. The "speak" arg can be any boolean. The "number" is the telephone number (Example: 441134960000)
All arguments are optional, except for the message one.


```js

  //Opener
  
  let response = await Carter.chat(userid)

```


`Carter.opener()` sends a fetch request, which can be used for a greeting. The "userid" arg. is optional.

```js

  //WhatsApp
  
  let response = await Carter.whatsApp(number,message)

```




