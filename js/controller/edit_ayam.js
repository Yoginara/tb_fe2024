export function isiData(results) {  
    const inputMapping = [
      { id: 'jenis', path: 'jenis' },
      { id: 'umur', path: 'umur' },
      { id: 'bobot', path: 'bobot' },
      { id: 'tinggi', path: 'tinggi' },
      { id: 'jenis_kelamin', path: 'jenis_kelamin' },
      { id: 'harga', path: 'harga' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}