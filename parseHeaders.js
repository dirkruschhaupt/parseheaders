'use strict';

/* eslint-env node */

function parseHeaders(text) {
    let obj = {};
    obj.headers = {};
    obj.code = {};
    let parsedLines = text.split('\n');

    for (let i = 0; i < parsedLines.length; i++) {
      if (i === 0) {
          let versionStatusData = parsedLines[i].split(' ');
          obj.version = versionStatusData[0];
          obj.code = versionStatusData[1];
      }
      else {
        let line = parsedLines[i].split(': ');
        if (line.length === 2) {
          obj.headers[line[0]] = line[1];
        }
      }
      obj.body = parsedLines.join();
    }

    return obj;
}

module.exports = parseHeaders;
