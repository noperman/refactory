const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let namaWarung = '';
let tanggalHariIni = '';
let namaKasir = '';
let listProduk = [];

rl.question("Isi nama warung : ", function(warung) {
  namaWarung = warung
  rl.question("Isi tanggal hari ini : ", function(tanggal) {
    tanggalHariIni = tanggal
    rl.question("Isi nama kasir : ", function(kasir){
      namaKasir = kasir
      listProdukInput()
    })
  });
});

function listProdukInput(){
  rl.question("Enter 0 to 'exit' or press any key to 'next': ", function(exit){
    if(exit === "0"){
      rl.close()
    }

    rl.question("Masukkan produk : ", function(produk){
      rl.question("Masukkan harga : ", function(harga){
        let sold = {'produk':produk, 'harga':harga}
        listProduk.push(sold)
        listProdukInput()
      })
    })
  })
}

rl.on("close", function() {
    console.log(
      formater(namaWarung,30)+'\n',
      justify("Tanggal :", tanggalHariIni, 30, '\xa0')+"\n",
      justify("Nama Kasir :", namaKasir, 30, '\xa0')+"\n",
      lineSplitter("=",30)+"\n",
      processListProduk(listProduk)
    )
    process.exit(0);
});

function pushPad(string,length,maxLength){
    let pushN = length/maxLength

    let splitter = "\n"
    let start = 0
    let end = maxLength
    let str = string
    let output = '';

    for($i=0;$i<Math.ceil(pushN);$i++){
      output += str.substring(start,end)+splitter
      start = start+maxLength
      end = end+maxLength
    }
    return output
}

function center(string, length, maxLength){
  if(length > maxLength){
    console.log("String must be less than 30 character")
  }else{
    let n = (maxLength-length)/2
    let spaces = ''

    for($i=0;$i<Math.ceil(n);$i++){
      spaces += '\xa0'
    }

    return spaces+string
  }
}

function formater(string,maxLength){
  const length = string.length

  if(length > maxLength){
    return pushPad(string,length,maxLength)
  }else{
    return center(string,length,maxLength)
  }
}

function justify(firstString, string, maxLength, spliiter){
  let n = (maxLength - firstString.length) - string.length
  let spaces = '';
  if(n>0){
    for($i=0;$i<Math.round(n);$i++){
      spaces += spliiter
    }
  }
  return firstString+spaces+string
}

function lineSplitter(string,length){
  if(length > 0){
    let splitter = '';
    for($i=0;$i<Math.ceil(length);$i++){
      splitter += string
    }
    return splitter
  }
}

function processListProduk(data){
  if(data.length > 0){
    let result = ''
    let total = 0
    data.forEach(element => {
      result += justify(element.produk, formatRupiah(element.harga, "Rp. "), 30, '.')+'\n'+' '
      total = parseInt(total)+parseInt(element.harga)
    });
    result += "\n\xa0"+justify("Total", formatRupiah(String(total), "Rp. "),30,".")
    return result
  }
}

function formatRupiah(angka, prefix){
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}