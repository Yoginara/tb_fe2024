import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableOrder } from "./controller/get_order.js";
import { urlGetOrder } from "./config/url.js";
get(urlGetOrder, isiTableOrder);