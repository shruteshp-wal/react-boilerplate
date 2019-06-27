import axios from 'axios';

export default axios.create({
    baseURL: 'http://cents-staging.heroku.com/api/v1'
})

