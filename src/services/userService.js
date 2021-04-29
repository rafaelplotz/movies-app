import httpRequest from '../infrastructure/httpRequest';

class UserService {
    constructor(){
        this.api = httpRequest('http://www.omdbapi.com/');
    }

    async getUserProfile(userLogin) {
        const result = await this.api.get(`?t=${userLogin}&apikey=f4e12e3`);

        return result.data;
    }
}

export default UserService;