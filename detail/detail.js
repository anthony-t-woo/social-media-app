import { getProfileById, updateKarma } from '../fetch-utils.js';
import { renderDetail } from '../render-utils.js';

const detailContainerEl = document.querySelector('#detail-container');
// let upvoteButton = '';
// let downvoteButton = '';
let profileData = {};
let id = '';

window.addEventListener('load', async () => {
    const urlData = new URLSearchParams(window.location.search);
    id = urlData.get('id');
    profileData = await getProfileById(id);
    let detailEl = renderDetail(profileData);
    detailContainerEl.append(detailEl);
    const upvoteButton = document.querySelector('#upvote');
    const downvoteButton = document.querySelector('#downvote');
    upvoteButton.addEventListener('click', async () => {
        profileData.karma++;
        await updateKarma(id, profileData.karma);
        console.log(profileData.karma);
    });
    downvoteButton.addEventListener('click', async () => {
        profileData.karma--;
        await updateKarma(id, profileData.karma);
        console.log(profileData.karma);
    });
});
