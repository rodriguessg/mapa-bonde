function updateMap(location) {
    let mapUrl = '';
    switch(location) {
        case 'Largo de Guimarães':
            mapUrl = 'https://www.google.com/maps/embed/v1/place?q=Largo%20de%20Guimarães&key=AIzaSyAFSdjGRGSS2PprGPjXigj5ddEb-IAaEuQ"';
            break;
        case 'Santa Tereza':
            mapUrl = 'https://www.google.com/maps/embed/v1/place?q=Santa%20Tereza%2C%20Bonde&key=AIzaSyAFSdjGRGSS2PprGPjXigj5ddEb-IAaEuQ"';
            break;
        case 'Dois Irmãos':
            mapUrl = 'https://www.google.com/maps/embed/v1/place?q=Dois%20Irmãos&key=AIzaSyAFSdjGRGSS2PprGPjXigj5ddEb-IAaEuQ"';
            break;
        default:
            mapUrl = 'https://www.google.com/maps/embed/v1/place?q=Santa%20Tereza%2C%20Bonde&key=AIzaSyAFSdjGRGSS2PprGPjXigj5ddEb-IAaEuQ"';
    }
    document.getElementById('map').src = mapUrl;
}