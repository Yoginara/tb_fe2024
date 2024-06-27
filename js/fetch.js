import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/get.js";
import { urlGetAyam } from "./config/url.js";
get(urlGetAyam, isiTablePresensi);