function factorial(n) {
    // Dasar rekursi: jika n sama dengan 1, kembalikan 1
    if (n === 1 || n === 0 ) {
        return 1;
    }
      // Rekursi: n * faktorial dari n-1
    return n * factorial(n-1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
