import React from "react";

function User({ profile }) {
    if (!profile) {
        return <h3>Fetching Users Profile</h3>
    }

    return (
        <div className="user container">
            <h2>{profile.username}</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Password Protected</p>
            <p>Favorite Genre: {profile.genre}</p>
            <p>Team: {profile.choice}</p>
        </div>
    )
}

export default User