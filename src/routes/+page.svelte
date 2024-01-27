<script lang="ts">
	import { goto } from "$app/navigation"
	import Hud from "$lib/components/hud.svelte"
	import playHit from "$lib/func/playHit";
	import playBossMusic from "$lib/func/playBossMusic";

	let cursorX: number;
	let cursorY: number;

	let musicBoss: any;
	let movingInterval: NodeJS.Timeout;
	let scenario = 0
	let started = false
	let showHud = false
	let cinematic = false
	let shielded = false
	const firstName = "Colle"
	const lastName = "Joulian"
	let button = {
		x: 0,
		y: 0,
		position: "relative",
		pv: 100,
		maxpv: 100,
		cursor: "pointer"
	}
	$: button.cursor = !cinematic && !shielded ? "pointer" : "not-allowed"
</script>

<div class=" flex flex-col gap-6">
	<div>
		<p class=" text-5xl font-bold selection:bg-transparent">
			{#each scenario >= 2 ? scenario === 3 ? "KILL" : "OUCH!" : firstName as letter}
				<span class=" text-primary duration-[4.5s] hover:duration-100 hover:text-black"
					>{letter}</span
				>
			{/each}
			{#each scenario >= 2 ? scenario === 3 ? "YOU!" : "çaFAITmal!" : lastName as letter}
				<span class=" text-black duration-[4.5s] hover:duration-100 hover:text-primary"
					>{letter}</span
				>
			{/each}
		</p>
		{#if scenario === 1}
			<p class="text-xl w-[600px]">
				Excuse me, but I know it may seem counterintuitive, could you please stop clicking on me ?
			</p>
		{:else if scenario == 2}
			<p class="text-xl w-[600px]">
				Son of a bitch, little piece of shit, fucking bastard ! Do you truly want to keep clicking on me like this?
				I won't let you do so.
			</p>
		{:else if scenario == 3}
		<p class="text-xl w-[600px]">
			ARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRG !!!!
			I WILL KILL YOU AND ALL YOUR FAMILY !!!! DIEEEEEeeeee...
		</p>
		{:else}
			<p class=" text-xl  w-[600px]">
				I am capable of thing <a
					class=" text-primary uppercase font-bold duration-200 hover:-translate-y-1 relative inline-block"
					data-sveltekit-preload-data="hover"
					href=".">you can't</a
				>
				do !
				<a
					class=" text-primary uppercase font-bold duration-200 hover:-translate-y-1 relative inline-block"
					data-sveltekit-preload-data="hover"
					href=".">Want</a
				> to see what ?
			</p>
		{/if}
	</div>
	<button
		class=" hover:before:-right-[450%] hover:before:duration-[0.9s] hover:before:opacity-100 before:absolute before:block before:w-[400%] before:h-1/2 before:bg-white before:opacity-0 before:blur-lg before:-rotate-[15deg] before:right-full relative w-fit py-1 px-4 overflow-hidden bg-primary rounded-md text-2xl text-white"
		style={`transform: translate(${button.x}px, ${button.y}px); position: ${button.position}; cursor: ${button.cursor}`}
		on:click={() => {
			if (!shielded && !cinematic) {
				playHit()
				if (!showHud) {
					showHud = true
				}
				button.pv -= 2.5
				if (scenario === 1) {
					scenario = 2
					cinematic = true
					setTimeout(() => {
						cinematic = false
						musicBoss = playBossMusic()
						movingInterval = setInterval(() => {
							button.x = Math.random() * 300
							button.y = Math.random() * 300
						}, 800)
					}, 4500)
				}
				if (scenario === 0) {
					cinematic = true
					scenario = 1
					setTimeout(() => {
						cinematic = false
					}, 4500)
				}
				if (button.pv <= button.maxpv/2 && button.pv > button.maxpv/4 && scenario !== 3) {
					clearInterval(movingInterval)
					scenario = 3
					cinematic = true
					button.x = 0
					button.y = 0
						setTimeout(() => {
							cinematic = false
							movingInterval = setInterval(() => {
							button.x = Math.random() * 300
							button.y = Math.random() * 300
						}, 500)
					}, 3500)
				}
				if (button.pv <= button.maxpv/4 && button.pv > button.maxpv/8) {
					clearInterval(movingInterval)
						movingInterval = setInterval(() => {
						button.x = Math.random() * 200
						button.y = Math.random() * 200
					}, 150)
				}
				if (button.pv <= button.maxpv/8) {
					button.x = Math.random() * 450
					button.y = Math.random() * 450
					clearInterval(movingInterval)
						movingInterval = setInterval(() => {
						button.x = Math.random() * 450
						button.y = Math.random() * 450
					}, 400)
				}
				if (button.pv <= 0) {
					musicBoss.pause()
					goto("show-me")
				}
			}
		}}>Show me!</button
	>
	{#if showHud}
		<Hud title="Button" current={button.pv} max={button.maxpv} />
	{/if}
</div>
