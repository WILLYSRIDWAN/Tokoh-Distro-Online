document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.btn-primary');
    const checkoutForm = document.getElementById('checkoutForm'); 
    const formContainer = checkoutForm.closest('.bg-white'); 

    orderButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();

            
            formContainer.style.display = 'block';
            formContainer.style.opacity = 0;

            setTimeout(() => {
                formContainer.style.opacity = 1;
                formContainer.style.transition = 'opacity 0.5s ease';
            }, 10);

            alert('Terima kasih telah memesan di PC Conner! Silakan isi formulir checkout.');
        });
    });

   
    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();

        const inputs = checkoutForm.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('Pembayaran berhasil! Terima kasih telah berbelanja di PC Conner.');
            checkoutForm.reset();
        } else {
            alert('Harap lengkapi semua kolom sebelum melanjutkan.');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Referensi elemen
    const orderButtons = document.querySelectorAll('.btn-primary');
    const checkoutForm = document.getElementById('checkoutForm');
    const formContainer = checkoutForm.closest('.form-container');

    // Fungsi untuk menampilkan formulir checkout
    const showCheckoutForm = () => {
        formContainer.classList.remove('hidden');
        setTimeout(() => formContainer.classList.add('visible'), 10);
    };

    // Fungsi untuk validasi formulir
    const validateForm = () => {
        const inputs = checkoutForm.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        return isValid;
    };

    // Event listener untuk tombol "Pesan Sekarang"
    orderButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            alert('Terima kasih telah memesan di PC Conner! Silakan isi formulir checkout.');
            showCheckoutForm();
        });
    });

    // Event listener untuk pengiriman formulir
    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();

        if (validateForm()) {
            alert('Pembayaran berhasil! Terima kasih telah berbelanja di PC Conner.');
            checkoutForm.reset();
            formContainer.classList.remove('visible');
            setTimeout(() => formContainer.classList.add('hidden'), 500);
        } else {
            alert('Harap lengkapi semua kolom sebelum melanjutkan.');
        }
    });
});

