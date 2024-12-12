import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

  // Define the load test with a constant VU count of 10 VUs for the whole test
  vus: 5000,
  duration: '30s',
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  http.get('http://akademi-koding-lb-1655785727.us-east-1.elb.amazonaws.com:5173/');

}