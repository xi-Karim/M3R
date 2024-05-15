const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageJson = require('./package.json');
const version = packageJson.version;
const name = packageJson.name;

// Default tarball name
const defaultTarballName = `${name}-${version}.tgz`;

// New tarball name
const tarballName = "m3r-lib.tgz"

// Rename the tarball
fs.renameSync(path.join(__dirname, defaultTarballName), path.join(__dirname, tarballName));
console.log(`Packaged and renamed to ${tarballName}`);

