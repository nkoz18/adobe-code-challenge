#!/usr/bin/env node

'use strict';

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const fs = require('fs');

const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

fs.readFile(inputPath, 'utf8', function (err, data) {
  if (err) throw err;
  let leads = JSON.parse(data).leads.sort(dateSort);
  let results = {};
  results.leads = removeDuplicates(removeDuplicates(leads , "_id"), "email");
  results = JSON.stringify(results, null, '\t');
  fs.writeFile(outputPath, results, function(error) {
       if (error) {
         console.error("write error:  " + error.message);
       } else {
         console.log("Successful Write to " + outputPath);
       }
  });
});

function removeDuplicates(leads, prop) {
  return leads.filter((obj, pos, arr) => {
    if((arr.map(mapObj => mapObj[prop] ).indexOf(obj[prop]) === pos) === false){
      writeToLog(arr[pos], prop);
    }else{
      return true;
    }
  });
}

function writeToLog(item, prop){
  logger.log({
    timestamp: new Date(),
    level: 'info',
    message: 'Duplicate Removed',
    duplicateProperty: prop,
    item: item
  });
}

function dateSort(a, b) {
  if(new Date(b.entryDate).getTime() === new Date(a.entryDate).getTime()){
    return true;
  }
  return new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime();
}

module.exports = {
    dateSort: dateSort,
    removeDuplicates: removeDuplicates
}
