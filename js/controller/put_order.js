import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlupdate_order } from "../config/url_put_order.js";
import { AmbilResponseTabelOrder } from "../config/response.js";

function pushData(){
    let idAyam = getValue("jenis");
    let jenisAyam = document.querySelector("#ayam-detail p:nth-child(1)").textContent.slice(7);
    let umurAyam = document.querySelector("#ayam-detail p:nth-child(2)").textContent.slice(6);
    let bobotAyam = document.querySelector("#ayam-detail p:nth-child(3)").textContent.slice(7);
    let tinggiAyam = document.querySelector("#ayam-detail p:nth-child(4)").textContent.slice(8);
    let jenisKelaminAyam = document.querySelector("#ayam-detail p:nth-child(5)").textContent.slice(15);
    let hargaAyam = document.querySelector("#ayam-detail p:nth-child(6)").textContent.slice(7);
    let namaPemesan = getValue("pemesan");
    let alamat = getValue("alamat");
    let data = {
        ayam: {
            _id : idAyam,
            jenis: jenisAyam,
            umur: parseInt(umurAyam),
            bobot: parseInt(bobotAyam),
            tinggi: parseInt(tinggiAyam),
            jenis_kelamin: jenisKelaminAyam,
            harga: parseInt(hargaAyam),
        },
        nama_pemesan: namaPemesan,
        alamat: alamat,
    };

putData(urlupdate_order, data, AmbilResponseTabelOrder);

}

onClick("button", pushData);