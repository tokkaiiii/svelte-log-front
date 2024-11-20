import { mount } from 'svelte'
import './styles/main.css'
import App from './App.svelte'
import {auth} from "./stores/index.js";

await auth.refresh()

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
