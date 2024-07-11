import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlupdate_ayam } from "../config/url_put.js";
import { AmbilResponseTabelAyam } from "../config/response.js";

function pushData(){
    let data = {
        jenis: getValue("jenis"),
        umur: parseInt(getValue("umur")),
        bobot: parseInt(getValue("bobot")),
        tinggi: parseInt(getValue("tinggi")),
        jenis_kelamin: getValue("jenis_kelamin"),
        harga: parseInt(getValue("harga")),
    };

    // Validate if required fields are filled correctly
    if (!data.jenis || !data.umur || !data.bobot || !data.tinggi || !data.jenis_kelamin || !data.harga) {
        alert("Please fill out all fields with valid data.");
        return;
    }

putData(urlupdate_ayam, data, AmbilResponseTabelAyam);

}

onClick("button", pushData);