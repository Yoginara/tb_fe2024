import { urlGetAyam } from "../config/url.js";

document.addEventListener('DOMContentLoaded', async () => {
    const selectElement = document.getElementById('jenis');
    const ayamDetailElement = document.getElementById('ayam-detail');

    try {
        // Fetch data dari endpoint
        const response = await fetch(urlGetAyam);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Populate the select element with options
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item._id;
            option.textContent = item.jenis;
            selectElement.appendChild(option);
        });

        // Event listener untuk perubahan pada select
        selectElement.addEventListener('change', () => {
            const selectedId = selectElement.value;
            const selectedAyam = data.find(item => item._id === selectedId);

            // Mengisi nilai pada detail ayam
            if (selectedAyam) {
                ayamDetailElement.innerHTML = `
                    <p>Jenis: ${selectedAyam.jenis}</p>
                    <p>Umur: ${selectedAyam.umur}</p>
                    <p>Bobot: ${selectedAyam.bobot}</p>
                    <p>Tinggi: ${selectedAyam.tinggi}</p>
                    <p>Jenis Kelamin: ${selectedAyam.jenis_kelamin}</p>
                    <p>Harga: ${selectedAyam.harga}</p>
                `;
            }
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
