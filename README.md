# Coding Challenge

An open-ended take home coding challenge I received while interviewing for Marketo

## The Rules

Take a variable number of identically structured JSON records and de-duplicate the set.

An example file of records is given in the accompanying 'leads.json'. Output should be same format, with dups reconciled

according to the following rules:

1. The data from the newest date should be preferred

2. duplicate IDs count as dups. Duplicate emails count as dups. Duplicate values elsewhere do not count as dups.

3. If the dates are identical the data from the record provided last in the list should be preferred

Simplifying assumption: the program can do everything in memory (don't worry about large files)

The application should also provide a log of changes including some representation of the source record, the output record and the individual field changes.

(value from and value to) for each field.

You can use any language you prefer.

### Prerequisites

Node - https://nodejs.org/en/download/

### Installing

### From git

```
git clone https://github.com/nkoz18/adobe-code-challenge.git
cd adobe-code-challenge
npm install
```
### From npm

```
npm install adobe-code-challenge
```

## Usage

The program is a command line application that takes two arguments. The first is the input file and the second is the path where the output file will be saved.

The log is written to the root of the project. It is called 'combined.log' and its formatted in JSON.
The log keeps track of when and why (which duplicate property) each entry was removed from the JSON.

```
node removeduplicates.js "./path/to/input.json" "./path/to/output.json"
```

## Running the tests

Testing is done with Mocha.

After installing, you can simply run the following:

```bash
npm test
```
The testing script is located at `test/test.js`. I am using the Node.js native assertion module.

## Built With

* [Node.js v10.15.3](https://nodejs.org/dist/latest-v10.x/docs/api/) - JavaScript runtime
* [Winston](https://www.npmjs.com/package/winston) - Logging library
* [Mocha](https://mochajs.org/) - JavaScript test framework

## Authors

* **Nikita Kozlov** - <nikita@stroika.io>

## License

This project is licensed under the ISC License (ISC)
