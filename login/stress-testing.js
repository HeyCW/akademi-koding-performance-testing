import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 500 },  
        { duration: '5m', target: 2000 },  
        { duration: '1m', target: 2000 }, 
      ],
};


const BASE_URL = 'http://localhost:3000'; 
const LOGIN_ENDPOINT = '/login';

// Test data for login
const payload = JSON.stringify({
    username: 'admin', 
    password: '123', 
});

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

// Default function to be executed repeatedly during the test
export default function () {
    // Send POST request to login endpoint
    const res = http.post(`${BASE_URL}${LOGIN_ENDPOINT}`, payload, params);

    // Check the response
    check(res, {
        'status is 200': (r) => r.status === 200,
        // 'response contains token': (r) => JSON.parse(r.body).token !== undefined,
    });

    // Pause between iterations
    sleep(1);
}
