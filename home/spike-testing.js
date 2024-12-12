import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // Mengatur untuk mulai dengan 1000 pengguna dan naik sampai 10.000 pengguna dalam waktu 10 menit.
    stages: [
      { duration: '1m', target: 1000 },  // 1000 pengguna
      { duration: '1m', target: 10000 }, // 10000 pengguna
      { duration: '1m', target: 10000 }, // Menjaga 10000 pengguna untuk beberapa saat
    ],
  };

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  http.get('http://localhost:5173/');

  // Menambahkan jeda untuk mensimulasikan interaksi pengguna
  sleep(1); // tidur selama 1 detik antara permintaan
}