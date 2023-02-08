/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getProfiles } from './fetch-utils.js';
import { renderProfile } from './render-utils.js';

/* Get DOM Elements */
const profilesEl = document.querySelector('#profiles-container');
/* State */
let profilesData = [];
/* Events */
window.addEventListener('load', async () => {
    profilesData = await getProfiles();
    console.log(profilesData);
    displayProfiles();
});
/* Display Functions */
function displayProfiles() {
    profilesEl.textContent = '';
    for (let profile of profilesData) {
        let profileEl = renderProfile(profile);
        profilesEl.append(profileEl);
        profileEl.addEventListener('click', async () => {
            location.replace('');
        });
    }
}
