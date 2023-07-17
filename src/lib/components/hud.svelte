<script lang="ts">
	export let title = ""
	export let current = 0
	export let max = 0
    $: pourcentage = (current/max) * 100
    $: console.log(pourcentage)
</script>

<div id="hud" class=" absolute top-0">
	<h1 class=" text-4xl font-extrabold text-primary">{title}</h1>
	<div class=" relative h-5 rounded w-56 bg-black overflow-hidden">
        <div style={`width: ${pourcentage}%;`} class="block absolute h-5 bg-primary rounded"></div>
    </div>
</div>
