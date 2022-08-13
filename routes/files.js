
const filesRoutes = (app, fs) => {

    // variables
    const dataPath = './data/files.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/files', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/files', (req, res) => {

        readFile(data => {

            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value            
            const newFileId = req.body.file_name

            // add the new file
            data[newFileId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({ result: 'new file added' });
            });

        }, true);
    });


    // UPDATE
    app.put('/files/:id', (req, res) => {

        readFile(data => {

            const fileId = req.params["id"];
            data[fileId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({ result: `files id:${fileId} updated` });
            });

        }, true);
    });


    // DELETE
    app.delete('/files/:id', (req, res) => {

        readFile(data => {

            // delete the file
            const fileId = req.params["id"];
            delete data[fileId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`files id:${fileId} removed`);
            });
            
        }, true);
            
    });
};

module.exports = filesRoutes;
