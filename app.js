const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn.forEach((e) => {
            e.addEventListener('click', () => {
              sectBtn.forEach((e) => e.classList.remove('active-btn'))
              e.classList.add('active-btn')
            });
          });
    };

    // Sections Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
           // Remove selected from the other buttons
            const btns = sectBtns[0].children;
            for (let btn of btns) {
                btn.classList.remove('active')
            }
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id); // Saves the element id
            element.classList.add('active');
        }
    });

    // Toggle Dark Mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();