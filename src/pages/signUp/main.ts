import App from './signUp.svelte'
const docApp: HTMLDivElement | HTMLElement | null = document.getElementById('app')

const app = new App({
  target: docApp
})

export default app
