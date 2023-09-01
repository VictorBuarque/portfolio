const accordionTriggers = document.querySelectorAll('.accordion .trigger');

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement;
        const isOpen = accordion.classList.contains('open');
        // Accordion clicado
        if (isOpen) {
            accordion.classList.remove('open');
        } else {
            accordion.classList.add('open');
        }
        // Fecha todos os accordions
        accordionTriggers.forEach((otherTrigger) => {
            const otherAccordion = otherTrigger.parentElement;
            if (otherAccordion !== accordion) {
                otherAccordion.classList.remove('open');
            }
        });

        
    });
});
