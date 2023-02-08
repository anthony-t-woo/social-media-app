# Slices

## Create New Profile

-   From the auth page, user should be able to create a new profile.
    -   Dynamically render the auth page for sign up - adding additional form fields for profile create.
-   On form submit, create user on user table and create new profile in profiles table.
    -   Call signUp function with email and password
    -   Call create profile function with email, username, bio ...

## View Profiles

-   On load, user should be able to see a list of profiles (displayed as profile cards on the page)
    -   Fetch profiles data and assign to state (array of objects)
    -   Loop through data, render, append to DOM

## View Detail of Profile

-   On click of profile card from ./profiles, user should be able to see a detail view of the profile selected.
    -   Fetch profile data and assign to state (profile object).
    -   Render div and append to DOM

## Upvote/Downvote

-   On click of up or down, user should be able to add or subtract from profile karma
    -   Update table row by ID,up/down

# HTML

## ./auth

-   div to append additional input fields when user clicks on create account link
-   page dynamically renders depending on signup/signin

## ./

-   empty profiles-container div to inject profile data (profile-card).

## ./profile/?id=user_id

-   empty div to inject profile data to
    -   dynamically rendered div with data fetched based on id
        -   h2 username
        -   img avatar
        -   p email
        -   p bio
        -   p karma
        -   upvote button
        -   downvote button
