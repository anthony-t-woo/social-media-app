export function renderProfile(profile) {
    const div = document.createElement('div');
    const usernameEl = document.createElement('h3');
    const karmaEl = document.createElement('p');

    div.classList.add('profile-card');
    usernameEl.textContent = profile.username;
    karmaEl.textContent = `Karma: ${profile.karma}`;

    div.append(usernameEl, karmaEl);

    return div;
}
