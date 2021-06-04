import axios from 'axios';

const KEY = 'AIzaSyARs89_OcsD8rDQ8KGYT7uFyAE6jIBQssc'; 

const instance= axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:14,
        key:KEY
    }

})
/*https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Alimola&key=AIzaSyAGuFVd2LCbvW7EBQbXu2rJiPtdxtktROE*/
export default instance;