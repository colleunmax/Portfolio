<script lang="ts">
    export let value: string = ""
    export let blackToPrimary: boolean = false

    $: defaultColor = blackToPrimary ? "text-black" :  "text-primary"
    $: hoverColor = blackToPrimary ? "text-primary" : "text-black"

</script>

{#each value as letter}
    <span class=" {defaultColor} duration-[4.5s] hover:duration-100 hover:{hoverColor}"
        >{letter}</span
    >
{/each}