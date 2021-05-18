// import axios from 'axios';

const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
const apiKey = 'b4699bd08b3f1b396d7f0b4e98c67b42d98151b1';

const apiClient = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
});

export default {
    urlShortener() {
        return apiClient.post('', {
            "domain": "bit.ly",
            "long_url": "https://dev.bitly.com"
        });
    },
};
