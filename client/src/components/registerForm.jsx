import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { register } from '../services/api';
import { Link } from 'react-router-dom';

export default function Register() {
    const [profilePicture, setProfilePicture] = useState("");
    const [FullName, setFullName] = useState("");
    const [bio, setBio] = useState("");
    const [Level, setLevel] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!profilePicture || !FullName || !bio || !Level || !email || !password) {
            return alert("All fields required");
        }
        try {
            const res = await register({ profilePicture, FullName, bio, Level, email, password });
            localStorage.setItem("token", res.data.token);
            navigate("./dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900 px-4">
            <Card className="w-full max-w-md shadow-xl animate-fade">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Register</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Profile Picture URL"
                        value={profilePicture}
                        onChange={e => setProfilePicture(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={FullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Bio"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />
                    <select
                        className="w-full border rounded px-3 py-2"
                        value={Level}
                        onChange={e => setLevel(e.target.value)}
                    >
                        <option value="">Select Level</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={`Grade ${i + 1}`}>{`Grade ${i + 1}`}</option>
                        ))}
                    </select>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleRegister} className="w-full">
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}