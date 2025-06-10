document.addEventListener("keydown", (event) => {
    const input = document.getElementById("cmd")
    const isTypingKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
    if (
        isTypingKey &&
        document.activeElement !== input
    ) {
        input.focus();
    }
    if (event.key === 'Enter') {
        const inputValue = input.value;
        const terminalInput = input.closest('.terminal-input');
        const terminalInputClone = terminalInput.cloneNode(true);
        const main = document.querySelector("main")
        terminalInputClone.querySelector('input').value = '';

        /* Replacing input element with span */
        const span = document.createElement('span')
        span.textContent = inputValue;
        input.parentNode.replaceChild(span, input, terminalInputClone);

        /* returns the output to the command */
        commandHandler(input.value, main);

        /* Appends the terminal input wrapper to the next line */
        main.append(terminalInputClone)

    }
});

const cmds = ['exit', 'help']

function commandHandler(cmd, mainElement, clone) {
    const args = cmd.trim().split(' ').filter((word) => word.length > 0);

    switch (args[0]) {
        case 'exit':
            window.location.href = '/';
            break;

        case 'help':
            mainElement.innerHTML +=
                `
            <p class='output'><span>available commands: </span><span>${cmds.toString().replace(',', ', ')}</span></p>    
            `
            break;

        case 'whoami':
            
            break;

        case undefined:
            break;

        default:
            mainElement.innerHTML +=
                `
            <p class='output'><span>${args[0]}: </span><span>command not found.</span></p>    
            `;
            break;
    }
}
