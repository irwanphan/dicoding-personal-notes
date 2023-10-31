import Config from './config';

const ApiEndpoint = {
    REGISTER: `${Config.BASE_URL}/register`,
    LOGIN: `${Config.BASE_URL}/login`,
    LOGGED_IN_USER: `${Config.BASE_URL}/users/me`,
};

export default ApiEndpoint;
