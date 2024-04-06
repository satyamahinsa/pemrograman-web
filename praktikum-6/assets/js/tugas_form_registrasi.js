const formRegistrasi = document.getElementById("form_registrasi");
const namaInput = document.getElementById('nama_lengkap');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const teleponInput = document.getElementById('telepon');
const jenisKelaminInput = document.getElementById('jenis_kelamin');
const alamatWebsiteInput = document.getElementById('alamat_website');

const addErrorMessage = (input, message) => {
    input.className = "error";
    input.previousElementSibling.textContent = message
}

const deleteError = (e) => {
    if (e.target.classList.contains('error')) {
        e.target.previousElementSibling.textContent = "";
        e.target.classList.remove('error');
    }
}

formRegistrasi.addEventListener("submit", e => {
    e.preventDefault();

    let nameError = "";
    if (namaInput.value.trim() === "") {
        nameError = "*Nama lengkap harus diisi";
    } else if (!/^[a-zA-Z\s]+$/.test(namaInput.value.trim())) {
        nameError = "*Hanya bisa diisi karakter alfabet";
    } else if (namaInput.value.trim().length < 6) {
        nameError = "*Nama lengkap minimal 6 karakter";
    }

    if (nameError !== "") {
        addErrorMessage(namaInput, nameError);
    }

    let usernameError = "";
    if (usernameInput.value.trim() === "") {
        usernameError = "*Username harus diisi";
    } else if (usernameInput.value.trim().length < 6) {
        usernameError = "*Username minimal 6 karakter";
    }

    if (usernameError !== "") {
        addErrorMessage(usernameInput, usernameError);
    }

    let emailError = "";
    if (emailInput.value.trim() === "") {
        emailError = "*Email harus diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailError = "*Format email tidak valid";
    }

    if (emailError !== "") {
        addErrorMessage(emailInput, emailError);
    }

    let passwordError = "";
    if (passwordInput.value.trim() === "") {
        passwordError = "*Password harus diisi";
    } else if (passwordInput.value.trim().length < 6) {
        passwordError = "*Password minimal 6 karakter";
    }

    if (passwordError !== "") {
        addErrorMessage(passwordInput, passwordError);
    }

    let teleponError = "";
    if (teleponInput.value.trim() === "") {
        teleponError = "*No. Telepon harus diisi";
    } else if (!/^\d{10,13}$/.test(teleponInput.value.trim())) {
        teleponError = "*Format No. Telepon tidak valid";
    }

    if (teleponError !== "") {
        addErrorMessage(teleponInput, teleponError);
    }

    let jenisKelaminError = "";
    if (jenisKelaminInput.value === "") {
        jenisKelaminError = "*Jenis Kelamin harus dipilih";
    }

    if (jenisKelaminError !== "") {
        addErrorMessage(jenisKelaminInput, jenisKelaminError);
    }

    let alamatWebsiteError = "";
    if (alamatWebsiteInput.value.trim() === "") {
        alamatWebsiteError = "*Alamat website harus diisi";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(alamatWebsiteInput.value.trim())) {
        alamatWebsiteError = "*Format alamat website tidak valid";
    }

    if (alamatWebsiteError !== "") {
        addErrorMessage(alamatWebsiteInput, alamatWebsiteError);
    }
})

namaInput.addEventListener("focus", deleteError)
usernameInput.addEventListener("focus", deleteError)
emailInput.addEventListener("focus", deleteError)
passwordInput.addEventListener("focus", deleteError)
teleponInput.addEventListener("focus", deleteError)
jenisKelaminInput.addEventListener("focus", deleteError)
alamatWebsiteInput.addEventListener("focus", deleteError)


