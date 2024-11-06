function fibonacci(n) {
      // Dasar rekursi: Fibonacci ke-0 adalah 0, dan Fibonacci ke-1 adalah 1
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0,1];
    }
      // Rekursi: menghasilkan deret Fibonacci hingga n
    const series = fibonacci(n-1); // Mendapatkan deret Fibonacci hingga n-1
    series.push(series[n-1] + series[n-2]); // Menambahkan elemen Fibonacci ke-n
    return series;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
