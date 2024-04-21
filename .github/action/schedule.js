const path = require('path');
const fs = require('fs');
const { default: Jabber } = require('jabber');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const PARENT_FOLDER = path.resolve(__dirname, '../..');

fs.mkdirSync(PARENT_FOLDER + '/lib', { recursive: true });

if (!fs.existsSync(PARENT_FOLDER + '/lib/index.js')) {
  fs.writeFileSync(PARENT_FOLDER + '/lib/index.js', 'module.exports = {};');
}

// add date comment
const now = new Date();
const date = now.toISOString();

fs.writeFileSync(
  PARENT_FOLDER + '/lib/index.js',
  `\n// ${date}\n` + fs.readFileSync(PARENT_FOLDER + '/lib/index.js')
);

let pkg;

try {
  pkg = require(PARENT_FOLDER + 'package.json');
} catch (err) {
  pkg = {};
}

const keywords = pkg.keywords || [];

keywords.push('IT', 'library', 'code', 'util', 'feature', 'commit', 'change');

// should create new file?

const fileCount = fs.readdirSync(PARENT_FOLDER + '/lib');

const shouldCreate = random(1, 100) / fileCount.length > 2;
const jabber = new Jabber(keywords);

if (!shouldCreate) {
  const file = jabber.createWord(random(3, 10)) + '.js';
  fs.readFileSync(PARENT_FOLDER + '/lib/' + file);

  fileCount.push(file);
}

// choose a file to fill data
const f = fileCount[random(0, fileCount.length - 1)];

if (f) {
  fs.writeFileSync(
    PARENT_FOLDER + '/lib/' + f,
    `/*\n${jabber.createParagraph(50)} */\n`
  );
}

console.log(jabber.createParagraph(random(8, 10)));
