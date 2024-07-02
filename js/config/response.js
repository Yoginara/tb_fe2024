export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}

export function AmbilResponseTabelAyam(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "../table/ayam.html"; //reload halaman setelah klik ok pada alert
}

export function AmbilResponseTabelOrder(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "../table/order.html"; //reload halaman setelah klik ok pada alert
}