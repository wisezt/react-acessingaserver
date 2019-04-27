import axios from 'axios';

const instance = axios. create(
    {
        baseURL: 'https://react-acessingaserver.firebaseio.com/'
    }
);
export default instance;