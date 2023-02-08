export function renderProfile(profile) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const usernameEl = document.createElement('h3');
    const karmaEl = document.createElement('p');

    div.classList.add('profile-card');
    usernameEl.textContent = profile.username;
    karmaEl.textContent = `Karma: ${profile.karma}`;

    a.href = `./detail/?id=${profile.user_id}`;

    div.append(usernameEl, karmaEl);
    a.append(div);

    return a;
}

export function renderDetail(profile) {
    const div = document.createElement('div');
    const usernameEl = document.createElement('h3');
    const karmaDiv = document.createElement('div');
    const karmaEl = document.createElement('p');
    const bioEl = document.createElement('p');
    const upVoteEl = document.createElement('button');
    const downVoteEl = document.createElement('button');
    upVoteEl.id = 'upvote';
    downVoteEl.id = 'downvote';
    upVoteEl.textContent = '👍';
    downVoteEl.textContent = '👎';
    usernameEl.textContent = profile.username;
    karmaEl.textContent = `Karma: ${profile.karma}`;
    bioEl.textContent = profile.bio;

    karmaDiv.append(karmaEl, upVoteEl, downVoteEl);
    div.append(usernameEl, karmaDiv, bioEl);
    return div;
}
