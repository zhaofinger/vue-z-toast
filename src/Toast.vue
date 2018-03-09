<template>
	<transition name='fade'>
		<div class='toast-wrapper' v-show='show'>
			<div class='toast-content' :style='styleObj'>{{ message }}</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				message: '',
				styleObj: {}
			}
		}
	};
</script>

<style lang='css' scoped>
	.toast-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		z-index: 1000;
	}
	.toast-content {
		padding: 12px;
		border-radius: 6px;
		line-height: 1;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .4s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

</style>
