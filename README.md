If we have a 3-button, It is recommended to use a single on-off system for example : 

<!DOCTYPE html>
<html>
  <head>
    <style>
      /* The word "toggle" means turn on/off. */
      .toggle-button {
        background-color: rgb(230, 230, 230);
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        margin-right: 10px;
        font-size: 15px;
        cursor: pointer;
      }

      .is-toggled {
        background-color: black;
        color: white;
      }
    </style>
  </head>
  <body>
    <button class="toggle-button js-button" onclick="
      const button = document.querySelector('.js-button');
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    ">Gaming</button>

    <button class="toggle-button js-button-2" onclick="
      const button = document.querySelector('.js-button-2');
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    ">Music</button>

    <button class="toggle-button js-button-3" onclick="
      const button = document.querySelector('.js-button-3');
      if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    ">Tech</button>
  </body>
</html>

In this code, it will display 3 buttons, if we click one of these buttons the color will change to black...

But there is another solution to this problem, we can make a system that will only make one button color change at a time, but the other button will still be on this color. But this solution is not recommended,  this has a big risk for the Android/PC old version 

