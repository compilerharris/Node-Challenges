const vision = require('@google-cloud/vision');

const CREDENTIALS = JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "***",
    "private_key_id": "***",
    "private_key": "***",
    "client_email": "***",
    "client_id": "***",
    "auth_uri": "***",
    "token_uri": "***",
    "auth_provider_x509_cert_url": "***",
    "client_x509_cert_url": "***",
    "universe_domain": "googleapis.com"
}))

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email,
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandmark = async (file_path) => {

    let [result] = await client.landmarkDetection(file_path);
    console.log(result.landmarkAnnotations[0].description);
}

detectLandmark('landmark_one.jpeg');