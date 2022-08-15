# b8b_result_analysis

This repository is part of the Beat Byte Bot Ecosystem (B8B).

- B8B Result Analysis: https://github.com/gilpanal/b8b_result_analysis
- B8B Virtuoso: https://github.com/gilpanal/b8b_virtuoso
- B8B Synapse: https://github.com/gilpanal/b8b_synapse

The code is based and adapted from https://github.com/bpk68/api-server-starter

The music dataset used belongs to MagnaTune: https://mirg.city.ac.uk/codeapps/the-magnatagatune-dataset

The deep learning models used are TensorFlow models available in Essentia for various (music) audio analysis and classification tasks. These models are in TensorFlow.js format. More info:

- https://essentia.upf.edu/models.html#magnatagatune
- Download: https://essentia.upf.edu/models/autotagging/mtt/

## Requirements:
- Node.js (v14)

## How to run it locally:
1. ```git clone https://github.com/gilpanal/b8b_result_analysis.git```
2. ```cd b8b_result_analysis```
3. ```npm i```
4. Replace the content in `data/files.json` with one from the JSONs in folders `cnn`, `vgg` or `harp`
5. Start the main server by typing ```npm start```
6. Verify the content is served correctly at: http://localhost:3001/files
7. Run the analyse command: ```npm run analyse```




