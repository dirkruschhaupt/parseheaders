'use strict';

/* eslint-env node */




function parseHeaders(text) {
    let obj = {};
    let parsed = text.split('\n');
    let i = 0;
    obj.headers = {};
    obj.code = {};

    while (i < parsed.length) {
      if (i === 0) {
          let versionData = parsed[i].split(' ');
          obj.version = versionData[0];
          obj.code = versionData[1];
      }
      else {
        let line = parsed[i].split(': ');
        if (line.length === 2) {
          obj.headers[line[0]] = line[1];
        }
      }
      obj.body = parsed.join();
      i++;
    }
    return obj;

}

module.exports = parseHeaders;
