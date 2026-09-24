<script lang="ts">
    import skillsJson from "../../content/cli/skills.json";
    import experienceJson from "../../content/cli/experience.json";
    import aboutJson from "../../content/cli/about.json";
    import type { Skills, Experience } from "../../types/cli";
    import { tick } from "svelte";

    const cmds = [
        "help",
        "clear",
        "exit",
        "inspiration",
        "whoami",
        "about",
        "skills",
        "experience",
        "contact",
    ];
    const insp: string = "meddelanden.se";

    let input: HTMLInputElement | null = $state(null);
    let history: string[] = $state([]);
    const redirectTo = () => {
        setTimeout(() => {
            window.open(`https://${insp}/`);
        }, 500);
    };
    const handleKeydown = async (ev: KeyboardEvent) => {
        if (!input) return;
        const isTypingKey = ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey;
        if (isTypingKey && document.activeElement !== input) {
            input.focus();
        }
        if (ev.key === "Enter") {
            const inputValue = input.value.trim();
            if (inputValue !== "") handleInput(inputValue);
            console.log("Entered", " ", inputValue);
            input.value = "";
            await tick();
            input.scrollIntoView();
        }
    };

    const handleInput = (str: string) => {
        const cmd = str.split(/\s+/)[0];
        switch (cmd) {
            case "clear":
                history.length = 0;
                break;

            case "exit":
                history.length = 0;
                window.location.href = "/";
                break;

            default:
                history.push(str);
                break;
        }
    };
</script>

{#snippet output(cmd: string)}
    {@const name = cmd.trim().split(/\s+/)[0]}
    {#if name === "help"}
        {@render help(cmds)}
    {:else if name === "whoami"}
        {@render whoami()}
    {:else if name === "inspiration"}
        {@render inspiration()}
    {:else if name === "about"}
        {@render about(aboutJson.points)}
    {:else if name === "skills"}
        {@render skills(skillsJson)}
    {:else if name === "experience"}
        {@render experience(experienceJson)}
    {:else if name === "contact"}
        {@render contact()}
    {:else}
        {@render error(name)}
    {/if}
{/snippet}

{#snippet prompt()}
    <span class="terminal-prompt">
        <span class="usr-name">guest</span>@<span class="host-name"
            >yash2048.github.io</span
        >&gt;
    </span>
{/snippet}

{#snippet help(cmds: string[])}
    <p class="output">
        <span>available commands: </span><span>
            {" " + cmds.toString().replaceAll(",", ", ")}</span
        >
    </p>
{/snippet}

{#snippet whoami()}
    <p class="output">guest</p>
{/snippet}

{#snippet inspiration()}
    <p {@attach redirectTo} class="output">
        Redirecting... =&gt;
        <a
            aria-label="inspiration"
            href={"https://" + insp}
            target="_blank"
            rel="noopener noreferrer"
        >
            {insp}
        </a>
    </p>
{/snippet}

{#snippet about(points: string[])}
    <div class="output about">
        <h1>Hi, I'm Yash.</h1>
        <ul>
            {#each points as point}
                <li>
                    <p>{point}</p>
                </li>
            {/each}
        </ul>
    </div>
{/snippet}

{#snippet contact()}
    <div class="output contact-me">
        <h3>Contact me</h3>
        <address>
            Find with me on <a
                aria-label="github.com/Yash2048/"
                href="https://github.com/Yash2048/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="devicon-github-plain"></i></a
            ><br />
            Connect with me on
            <a
                aria-label="linkedin.com/in/yash-raj-trying-to-code"
                href="https://www.linkedin.com/in/yash-raj-trying-to-code/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="devicon-linkedin-plain"></i></a
            ><br />
            Mail me at
            <a
                href="mailto:yashraj.ch2048@gmail.com"
                target="_blank"
                rel="noopener noreferrer">yashraj.ch2048@gmail.com</a
            ><br />
        </address>
    </div>
{/snippet}

{#snippet error(str: string)}
    <p class="output">
        <span>
            {str}:
        </span>
        <span class="error"> command not found </span>
    </p>
{/snippet}

{#snippet skills(data: Skills)}
    <div class="output skills">
        {#each Object.entries(data) as [category, items]}
            <div class="skill {category}">
                <span class="skill-name">{category}:</span>
                <ul>
                    {#each items as { name, className }}
                        <li>
                            <i class={className}></i>
                            <p>{name}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
{/snippet}

{#snippet experience(data: Experience)}
    <section class="output experience">
        <section class="work-experience">
            <h3>Work</h3>
            {#each data.work as work}
                <article class="work">
                    <h4 class="work-place">
                        {work["work-place"]}
                        <span class="location">{work.location}</span>
                    </h4>
                    <p class="work-position">
                        {work["work-position"]}
                        <span class="time">
                            <time datetime={work.time[0].datetime}
                                >{work.time[0].Date}</time
                            >-<time datetime={work.time[1].datetime}
                                >{work.time[1].Date}</time
                            >
                        </span>
                    </p>
                    <ul class="work-description">
                        {#each work["work-point"] as point}
                            <li class="work-point"><p>{point}</p></li>
                        {/each}
                    </ul>
                </article>
            {/each}
        </section>

        <section class="project-experience">
            <h3>Projects</h3>
            {#each data.project as project}
                <article class="project">
                    <h4 class="project-title">{project["project-title"]}</h4>
                    <p class="project-type">
                        {project["project-type"]}
                        <span class="tech-stack">{project["tech-stack"]}</span>
                    </p>
                    <ul class="project-description">
                        {#each project["project-point"] as point}
                            <li class="project-point"><p>{point}</p></li>
                        {/each}
                    </ul>
                </article>
            {/each}
        </section>
    </section>
{/snippet}

<svelte:window onkeydown={handleKeydown} />
<main>
    {#each history as cmd}
        <div class="terminal-input">
            {@render prompt()}
            <span>{cmd}</span>
        </div>
        {@render output(cmd)}
    {/each}

    <div class="terminal-input">
        {@render prompt()}
        <input
            bind:this={input}
            class="cmd"
            type="text"
            name="command"
            id="cmd"
            autocomplete="off"
        />
    </div>
</main>
