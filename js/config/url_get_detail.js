import { urlGetIdAyam } from "./url.js";

const urlParams = new URLSearchParams(window.location.search);
const ayamId = urlParams.get('ayamId');

export let urlFetch = urlGetIdAyam + ayamId;