<script lang="ts">
    import { onMount } from "svelte";

    let theme: string | null = null;
    const onclick = () => {
        if (theme === null) {
            console.log(theme);
            theme = "dark";
            document.documentElement.dataset.theme = "dark";
        } else if (theme === "dark") {
            console.log(theme);
            theme = "light";
            document.documentElement.dataset.theme = "light";
        } else if (theme === "light") {
            console.log(theme);
            theme = null;
            document.documentElement.removeAttribute("data-theme");
        }
    };
    onMount(() => {
        theme = document.documentElement.dataset.theme ?? null;
    });
</script>

<button {onclick} class="dark-light-mode">
    {#if theme === "light"}
        <svg class="icon">
            <use href="#icon-theme-light"></use>
        </svg>
    {:else if theme === "dark"}
        <svg class="icon">
            <use href="#icon-theme-dark"></use>
        </svg>
    {:else}
        <svg class="icon">
            <use href="#icon-theme-auto"></use>
        </svg>
    {/if}
</button>

<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <symbol id="icon-theme-auto" viewBox="0 0 20 20">
        <path
            fill-rule="evenodd"
            d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16"
        />
    </symbol>

    <symbol id="icon-theme-dark" viewBox="0 -960 960 960">
        <path
            d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
        />
    </symbol>

    <symbol id="icon-theme-light" viewBox="0 -960 960 960">
        <path
            d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
        />
    </symbol>
</svg>

<style>
    .icon {
        width: 2.1rem;
        height: 2.1rem;
    }
</style>
