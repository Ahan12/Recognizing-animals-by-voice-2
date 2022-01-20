function StartClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/53kH-0Ji4/model.json', modelReady);


}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error) {
    if (error) {
        console.error(error);

    } else {

    }
}