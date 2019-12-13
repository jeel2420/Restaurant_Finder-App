import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ri9Pr6MBO87dlSIXLIZHUC6gEGD782g93Fu_JaaLWwVbirEFUTcYEn5mFpHNToDNG1YFivnXA-QSLv4_S9kS9Hluo79x14U7XJpY2SFkrJ9nrXnZvqeF6iWu9_HxXXYx'
    }
});