import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_order.js";
import { urlFetch } from "./config/url_get_detail_order.js";
get(urlFetch, isiData);