import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_ayam.js";
import { urlFetch } from "./config/url_get_detail.js";
get(urlFetch, isiData);