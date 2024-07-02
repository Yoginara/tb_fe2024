import { urlGetIdOrder } from "./url.js";

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

export let urlFetch = urlGetIdOrder + orderId;