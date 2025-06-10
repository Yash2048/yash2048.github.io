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

const cmds = ['exit','help','inspiration']

function commandHandler(cmd, mainElement, clone) {
    const args = cmd.trim().split(' ').filter((word) => word.length > 0);
    const p = document.createElement("p");
    p.className = "output";

    switch (args[0]) {
        case 'exit':
            window.location.href = '/';
            break;

        case 'help':
            mainElement.innerHTML +=
                `
            <p class='output'><span>available commands: </span><span>${cmds.toString().replaceAll(',', ', ')}</span></p>    
            `
            break;

        case 'inspiration':
            p.textContent = "Redirecting... => ";
            const a = document.createElement("a");
            a.href = "https://meddelanden.se/";
            a.target = "_blank"
            a.textContent = "meddelanden.se";
            p.appendChild(a)
            mainElement.append(p)
            window.open('https://meddelanden.se/')
            break;

        case 'whoami':

        break;

        case undefined:
            break;

        default:

            const commandSpan = document.createElement("span");
            commandSpan.textContent = `${args[0]}: `;

            const errorSpan = document.createElement("span");
            errorSpan.className = "error";
            errorSpan.textContent = "command not found.";

            p.appendChild(commandSpan);
            p.appendChild(errorSpan);
            mainElement.appendChild(p);
            break;
    }
}
