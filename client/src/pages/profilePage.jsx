import React, { useState } from 'react';
import Footer from '../components/ui/footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfilePage = () => {
    // Assume profile data comes from registration and is stored in localStorage
    const initialProfile = JSON.parse(localStorage.getItem('profile')) || {
        FullName: '',
        bio: '',
        level: '',
        progress: 0,
        profilePicture: '', // Add profilePicture field
    };

    const [profile, setProfile] = useState(initialProfile);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState(profile);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = () => {
        setProfile(formData);
        localStorage.setItem('profile', JSON.stringify(formData));
        setEditing(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto p-6 flex-1">
                <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
                <div className="bg-white p-6 rounded shadow-md">
                    <div className="flex items-center mb-6">
                        <Avatar className="w-20 h-20 mr-4">
                            <AvatarImage src={profile.profilePicture} alt={profile.FullName} />
                            <AvatarFallback>
                                {profile.FullName ? profile.FullName[0] : "U"}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-xl font-semibold">{profile.FullName}</p>
                            <p className="text-gray-500">{profile.level}</p>
                        </div>
                    </div>
                    {editing ? (
                        <div>
                            <label className="block mb-2">
                                Profile Picture URL:
                                <input
                                    type="text"
                                    name="profilePicture"
                                    value={formData.profilePicture}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </label>
                            <label className="block mb-2">
                                Full Name:
                                <input
                                    type="text"
                                    name="FullName"
                                    value={formData.FullName}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </label>
                            <label className="block mb-2">
                                Bio:
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </label>
                            <label className="block mb-2">
                                Level:
                                <input
                                    type="text"
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </label>
                            <label className="block mb-2">
                                Progress:
                                <input
                                    type="number"
                                    name="progress"
                                    value={formData.progress}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </label>
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            >
                                Save Changes
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Full Name:</strong> {profile.FullName}</p>
                            <p><strong>Bio:</strong> {profile.bio}</p>
                            <p><strong>Level:</strong> {profile.level}</p>
                            <p><strong>Progress:</strong> {profile.progress}%</p>
                            <button
                                onClick={handleEdit}
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;