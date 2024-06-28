import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlInsAyam, AmbilResponse} from "../config/url.js";

function pushData(){
    let data = {
        jenis : parseFloat(getValue("jenis")),
        umur : parseFloat(getValue("umur")),
        bobot : getValue("bobot"),
        tinggi : getValue("tinggi"),
        jenis_kelamin : getValue("jenis_kelamin"),
        harga : getValue("harga"),
    }
    postData(urlInsAyam, data, AmbilResponse);
}

onClick("button", pushData);