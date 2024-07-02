export let isiTabel = `<tr>
      <td style="width: 140px">#IDOrder#</td>
      <td style="width: 140px">#AYAM#</td>
      <td style="width: 140px">#NAMA#</td>
      <td style="width: 140px">#ALAMAT#</td>
      <td style="width: 140px">#TANGGAL#</td>
      <td style="width: 140px">
        <a type="button" href="../edit/order.html?presensiId=#IDEDIT#"><i class="ri-edit-2-line"></i>
        </a>
      |
      <button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"> <i class="ri-delete-bin-line"></i>
      </button>
      </td>
    </tr>`