<script>
	import rickRoll from "$lib/assets/rick.mp4"
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={rickRoll} autoplay controls />
<style>
	video {
		pointer-events: none;
	}
</style>
