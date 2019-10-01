const natural = require('natural');

const classifier = new natural.LogisticRegressionClassifier();

const train = async (pokemon) => {
    // TODO: 6. Train the classifer with the provided documents.
};

const getClassifications = (text, threshold = 0.9) => {
    // TODO: 7. Get classification for the observed text; then
    // return the classification label for
    // classifications with a probability greater than
    // our threshold.
    return [];
};

module.exports = { train, getClassifications };
