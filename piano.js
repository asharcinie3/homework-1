function toggleMenu() {
    var mobileLinks = document.querySelector('.links.mobile');
    mobileLinks.style.display = (mobileLinks.style.display === 'block') ? 'none' : 'block';
}
 
function showP(element) {
    var pElement = element.querySelector('p');
    if (pElement) {
        pElement.style.display = 'block';
    }
}

function hideP(element) {
    var pElement = element.querySelector('p');
    if (pElement) {
        pElement.style.display = 'none';
    }
}