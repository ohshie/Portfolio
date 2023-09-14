document.addEventListener('DOMContentLoaded', function()
{
    const aboutButtons = document.querySelectorAll('#about button');
    const aboutButtonBars = document.querySelectorAll("[id$='ButtonBar']");

    const projectButtons = document.querySelectorAll('#projects button');
    const projects = document.querySelectorAll('.filtered');

    projectButtons.forEach(button => {
        button.addEventListener('click', function(){
            const filter = button.value;

            // Hide all projects
            projects.forEach(project => {
                project.style.opacity = 0;
                project.style.display = 'none';
            });

            // If "ALL" button is clicked, show all projects
            if (filter === 'All') {
                projects.forEach(project => {
                    project.style.opacity = 100;
                    project.style.display = 'block';
                });
            } else {
                // Otherwise, show only the projects that match the filter
                projects.forEach(project => {
                    if (project.classList.contains(filter)) {
                        project.style.opacity = 100;
                        project.style.display = 'block';
                    }
                });
            }
        });
    });

    aboutButtons.forEach(button => {
        button.addEventListener('click', function(){
            aboutButtonBars.forEach(bar => {
                bar.style.opacity = 0;
            });

            const buttonBarId = button.id + "Bar";
            const buttonBar = document.getElementById(buttonBarId);
            buttonBar.style.opacity = 100;
        })
    })


   })