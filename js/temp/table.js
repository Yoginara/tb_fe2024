export let isiTabel = `<tr>
      <td style="width: 140px">#IDAyam#</td>
      <td style="width: 140px">#JENIS#</td>
      <td style="width: 140px">#UMUR#</td>
      <td style="width: 140px">#BOBOT#</td>
      <td style="width: 140px">#TINGGI#</td>
      <td style="width: 140px">#KELAMIN#</td>
      <td style="width: 140px">#HARGA#</td>
      <td style="width: 140px">
        <a type="button" href="../edit/ayam.html?ayamId=#IDEDIT#"><i class="ri-edit-2-line"></i>
        </a>
      |
      <button type="button" id="del_button" onclick="confirmDelete('#IDHAPUS#')"> <i class="ri-delete-bin-line"></i>
      </button>
      </td>
    </tr>`;
