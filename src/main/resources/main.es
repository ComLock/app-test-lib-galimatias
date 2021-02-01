import {URL} from '/lib/galimatias';
import {toStr} from '/lib/util';

const url = new URL('https://www.example.com/path?param=value#froggy');

//log.info(`url:${toStr(url)}`);
log.info(`toString:${toStr(url.toString())}`);
log.info(`getScheme:${toStr(url.getScheme())}`);
log.info(`getHost:${toStr(url.getHost())}`);
log.info(`getFragment:${toStr(url.getFragment())}`);
//log.info(`normalize:${toStr(url.normalize())}`);
//log.info(`resolve:${toStr(url.resolve())}`);
