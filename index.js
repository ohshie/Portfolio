document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('button');
    const buttonBars = document.querySelectorAll("[id$='ButtonBar']");

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            buttonBars.forEach(bar => {
                bar.style.opacity = 0;
            });

            const buttonBarId = button.id + "Bar";
            const buttonBar = document.getElementById(buttonBarId);
            buttonBar.style.opacity = 100;
        })
    })
   })