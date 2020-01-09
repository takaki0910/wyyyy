/**
 * 请求统一管理
 */
import Request from '../common/request';
import * as urls from './urls'





/* Common */
export const rankGender = data => Request.get('/ranking/gender', data);

// export const getKeywordMusic = (url,params) => Request.get(url,params);
export const getKeywordMusic1 = (data) => Request.get(`${urls.MUSIC_SEARCH}${data}`)