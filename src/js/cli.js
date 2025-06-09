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
        terminalInputClone.querySelector('input').value = '';
        
        /* Replacing input element with span */
        const span = document.createElement('span')
        span.textContent = inputValue;
        input.parentNode.replaceChild(span, input);
        
        /* returns the output to the command */
        commandHandler(input.value);

        /* Appends the terminal input wrapper to the next line */
        const main = document.querySelector("main")
        main.append(terminalInputClone)

    }
});

function commandHandler(cmd) {
    const args = cmd.trim().split(' ').filter((word) => word.length > 0)
    switch (args[0]) {
        case 'exit':
            window.location.href = '/';
            break;
        case 'help':

            break

        default:
            const ti = document.querySelector('.terminal-input');
            console.log(document.querySelector('main'))
            break;
    }
}
