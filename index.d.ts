import Vue from 'vue'

export function install (vue: typeof Vue, options: any): void

export declare class ToastComponent extends Vue {
	/** Close the Loading instance */
	// close (): void
}

declare module 'vue/types/vue' {
	interface Vue {
	/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
		$toast(message: string, duration?: number, styleObj?: Object): ToastComponent
	}
}