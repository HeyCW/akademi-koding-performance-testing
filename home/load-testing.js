import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Menggunakan stages untuk mensimulasikan peningkatan pengguna secara bertahap
  stages: [
    { duration: '1m', target: 1000 },  // 1000 pengguna selama 1 menit
    { duration: '2m', target: 3000 },  // 3000 pengguna selama 2 menit
    { duration: '2m', target: 5000 },  // 5000 pengguna selama 2 menit
  ],
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  http.get('http://akademi-koding-lb-1655785727.us-east-1.elb.amazonaws.com:5173/');

  // Menambahkan jeda untuk mensimulasikan interaksi pengguna
  sleep(1); // tidur selama 1 detik antara permintaan
}