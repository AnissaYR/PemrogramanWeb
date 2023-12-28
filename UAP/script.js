const list = [
    {kode: 'Kode', nama: 'Barang', harga: 'Harga'},
    {kode: '001', nama: 'Barang A', harga: 10000},
    {kode: '002', nama: 'Barang B', harga: 20000},
    {kode: '003', nama: 'Barang C', harga: 30000},
]

function listBarang(){
    const table = document.querySelector('table');
    table.innerHTML = list.map(barang=>`<tr><td>${barang.kode}</td><td>${barang.nama}</td><td>${barang.harga}</td></tr>`).join('');
}

function pembelian(){
    const kodeBarang = document.getElementById('kodeBarang').value;
    const jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);

    const pilihan = list.find(barang=>barang.kode==kodeBarang);
    if (!pilihan) return alert ('Input yang dimasukkan tidak valid!');

    const total = pilihan.harga * jumlahBarang;
    alert (`Total pembelian anda = Rp${total}`);

    const bayar = parseInt(prompt('Masukkan jumlah yang uang anda: '));
    while(bayar<total){
        alert(`Uang yang Anda masukan kurang, silahkan input ulang`);
        bayar=parseInt(prompt('Jumlah Uang :'));
    }

    const kembalian = bayar-total;
    alert(kembalian <=0 ? `Kembalian anda = Rp${kembalian}` : `Kembalian anda =${kembalian}`);
}

listBarang();
