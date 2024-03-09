function generateTanggal() {
    var selectTanggal = document.getElementById('tanggal_lahir')
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option')
        option.text = i
        option.value = i
        selectTanggal.add(option)
    }
}

function generateTahun() {
    var selectTahun = document.getElementById('tahun_lahir')
    var currentYear = new Date().getFullYear()
    for (var i = currentYear; i >= 1990; i--) {
        var option = document.createElement('option')
        option.text = i
        option.value = i
        selectTahun.add(option)
    }
}

generateTanggal()
generateTahun()



