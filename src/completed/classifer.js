const natural = require('natural');

const classifier = new natural.LogisticRegressionClassifier();

const train = async (pokemon) => {
    // TODO: 6. Train the classifer with the provided documents.
    pokemon.forEach(({ documents, id }) => {
        documents.forEach((document) => {
            classifier.addDocument(document, id);
        });
    });

    classifier.train();
};

const getClassifications = (text, threshold = 0.9) => {
    // TODO: 7. Get classification for the observed text; then
    // return the classification label for
    // classifications with a probability greater than
    // our threshold.
    return classifier.getClassifications(text)
        .filter(({ value }) => value > threshold)
        .map(({ label }) => label);
};

module.exports = { train, getClassifications };
