        const input = document.getElementById("cmd")
        document.addEventListener("keydown", (event) => {
            const isTypingKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey;

            if (
                isTypingKey &&
                document.activeElement !== input
            ) {
                input.focus();
            }
        });
