import { getProfileById } from '../fetch-utils.js';
import { renderDetail } from '../render-utils.js';

const detailContainerEl = document.querySelector('#detail-container');
let profileData = {};

window.addEventListener('load', async () => {
    const urlData = new URLSearchParams(window.location.search);
    const id = urlData.get('id');
    console.log(id);
    profileData = await getProfileById(id);
    console.log(profileData);
    let detailEl = renderDetail(profileData);
    detailContainerEl.append(detailEl);
});
