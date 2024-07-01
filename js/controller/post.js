import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlInsAyam} from "../config/url.js";
import { AmbilResponse} from "../config/response.js";

function pushData(){
    let data = {
        jenis: getValue("jenis"),
        umur: getValue("umur"),
        bobot: getValue("bobot"),
        tinggi: getValue("tinggi"),
        jenis_kelamin: getValue("jenis_kelamin"),
        harga: getValue("harga"),
    };

    // Validate if required fields are filled correctly
    if (!data.jenis || isNaN(data.umur) || isNaN(data.bobot) || isNaN(data.tinggi) || !data.jenis_kelamin || isNaN(data.harga)) {
        alert("Please fill out all fields with valid data.");
        return;
    }
    postData(urlInsAyam, data, AmbilResponse);
}

onClick("button", pushData);