'use strict';

var crypto = require('crypto');
var fs = require('fs');

function getHash(filename, callback) {
    var sha = crypto.createHash('sha1');

    var stream = fs.ReadStream(filename);
    stream.on('error', function (error) {
        callback(error);
    });
    stream.on('data', function (data) {
        sha.update(data);
    });
    stream.on('end', function () {
        var hash = sha.digest('hex');
        callback(null, hash);
    });
}

function backupTest(test, expectedFile, actualFile) {
    test.expect(1);

    var expected = '';
    var actual = '';
    getHash(expectedFile, function (error, hash) {
        if (error) {
            console.error(error);
            test.done();
        } else {
            expected = hash;
            getHash(actualFile, function (error, hash) {
                if (error) {
                    console.error(error);
                } else {
                    actual = hash;
                    test.equal(expected, actual, 'Hashes should me equal for excepted and actual backups');
                }
                test.done();
            });
        }
    });
}

exports.backupWithDefaultCompression = function (test) {
    backupTest(test, 'tests/expected/backup.tar.gz', 'tmp/backup.tar.gz');
};

exports.backupWithCustomCompression = function (test) {
    backupTest(test, 'tests/expected/backupWithCustomCompression.tar.gz', 'tmp/backupWithCustomCompression.tar.gz');
};