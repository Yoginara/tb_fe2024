export function isiData(results) {
  const inputMapping = [
    { id: 'jenis', path: 'ayam._id' },
    { id: 'pemesan', path: 'nama_pemesan' },
    { id: 'alamat', path: 'alamat' },
  ];

  inputMapping.forEach(({ id, path }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path);
    if (inputElement) {
      inputElement.value = value;
    }
  });

  // Handling ayam details
  const ayamDetailElement = document.getElementById('ayam-detail');
  const ayam = results.ayam;

  if (ayam && ayamDetailElement) {
    ayamDetailElement.innerHTML = `
            <p>Jenis: ${ayam.jenis}</p>
            <p>Umur: ${ayam.umur}</p>
            <p>Bobot: ${ayam.bobot}</p>
            <p>Tinggi: ${ayam.tinggi}</p>
            <p>Jenis Kelamin: ${ayam.jenis_kelamin}</p>
            <p>Harga: ${ayam.harga}</p>
        `;
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((value, key) => (value && value[key] ? value[key] : ''), obj);
}

document.addEventListener('DOMContentLoaded', function () {
  const cancelButton = document.getElementById('cancelButton');

  cancelButton.addEventListener('click', function () {
    const confirmCancel = confirm('Anda yakin ingin membatalkan?'); // Tampilkan dialog konfirmasi
    if (confirmCancel) {
      window.location.href = '../table/order.html'; // Arahkan ke halaman utama jika dikonfirmasi
    }
  });
});
