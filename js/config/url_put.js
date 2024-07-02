import { urlUpdAyam } from "./url.js";

const urlParams = new URLSearchParams(window.location.search);
const ayamId = urlParams.get('ayamId');

export let urlupdate_ayam = urlUpdAyam + ayamId;