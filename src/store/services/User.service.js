import Config from '../utils/Config';

class UserService {
  _baseUrl = null;
  constructor() {
    this._baseUrl = Config.BASE_URL + '/user';
  }
  signup(payload) {
    return {
      payload: {
        full_name: payload.full_name,
        user_id: '334d331d23re',
        token: '383874dhfdfhdy7733',
      },
      message: 'successful retrieval',
      error: null,
    };
  }
}

export default new UserService();