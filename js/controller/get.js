import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#IDAyam#", value._id)
            .replace("#JENIS#", value.jenis)
            .replace("#UMUR#", value.umur)
            .replace("#BOBOT#", value.bobot)
            .replace("#TINGGI#", value.tinggi)
            .replace("#KELAMIN#", value.jenis_kelamin)
            .replace("#HARGA#", value.harga);
    addInner("iniTabel", content);
}