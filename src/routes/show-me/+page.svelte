<script>
	import rickRoll from "$lib/assets/rick.mp4"
</script>

<iframe
	title="Never gonna give you up form rick ashley"
	src={rickRoll}
	allow="autoplay"
	id="video"
	style="display:none"
/>
<video src={rickRoll} autoplay controls muted />

<style>
	video {
		pointer-events: none;
	}
</style>
