import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table_order.js";

export function isiTableOrder(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    // Extracting the date from the ISO string and formatting it to dd/MM/yyyy
    let date = new Date(value.tanggal_pemesanan);
    let formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

    let content = 
        isiTabel.replace("#IDOrder#", value._id)
                .replace("#AYAM#", value.ayam.jenis)
                .replace("#NAMA#", value.nama_pemesan)
                .replace("#ALAMAT#", value.alamat)
                .replace("#TANGGAL#", formattedDate)
                .replace("#IDEDIT#", value._id)
                .replace("#IDHAPUS#", value._id);
    addInner("iniTabel", content);
}