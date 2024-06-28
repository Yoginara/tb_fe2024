import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableAyam } from "./controller/get.js";
import { urlGetAyam } from "./config/url.js";
get(urlGetAyam, isiTableAyam);