import { urlUpdOrder } from "./url.js";

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

export let urlupdate_order = urlUpdOrder + orderId;