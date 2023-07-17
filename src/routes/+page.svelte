<script lang="ts">
	import { goto } from "$app/navigation"
	import Hud from "$lib/components/hud.svelte"

	let showHud = false
	const firstName = "Colle"
	const lastName = "Joulian"
	let button = {
		x: 0,
		y: 0,
		position: "relative",
		pv: 100,
		maxpv: 100
	}
	function onFoo() {
		console.log("mdr")
	}
</script>

<div class=" flex flex-col gap-6">
	<p class=" text-5xl font-bold selection:bg-transparent">
		{#each firstName as letter}
			<span class=" text-primary duration-[4.5s] hover:duration-100 hover:text-black">{letter}</span
			>
		{/each}
		{#each lastName as letter}
			<span class=" text-black duration-[4.5s] hover:duration-100 hover:text-primary">{letter}</span
			>
		{/each}
	</p>
	<p class=" text-xl">
		I am capable of thing <a
			class=" text-primary uppercase font-bold duration-200 hover:-translate-y-1 relative inline-block"
			data-sveltekit-preload-data="hover"
			href=".">you can't</a
		>
		do by your own ! <br />
		<a
			class=" text-primary uppercase font-bold duration-200 hover:-translate-y-1 relative inline-block"
			data-sveltekit-preload-data="hover"
			href=".">Want</a
		> to see what ?
	</p>
	<button
		class=" hover:before:-right-[450%] hover:before:duration-[0.9s] hover:before:opacity-100 before:absolute before:block before:w-[400%] before:h-1/2 before:bg-white before:opacity-0 before:blur-lg before:-rotate-[15deg] before:right-full relative w-fit py-1 px-4 overflow-hidden bg-primary rounded-md text-2xl cursor-pointer text-white"
		style={`transform: translate(${button.x}px, ${button.y}px); position: ${button.position}`}
		on:mouseenter={async () => {
			await new Promise((res) => setTimeout(res, 150))
			button.x = Math.round(Math.random() * 500)
			button.y = Math.round(Math.random() * 500)
		}}
		on:click={() => {
			if (!showHud) {
				showHud = true
			}
			button.pv -= 10
			if (button.pv === 0) {
				goto("show-me")
			}
		}}>Show me!</button
	>
	{#if showHud}
		<Hud title="Button" current={button.pv} max={button.maxpv} />
	{/if}
</div>
