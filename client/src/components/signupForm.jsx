import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signup } from "../services/api";
import { Link } from "react-router-dom"


export default function Signup() {
  const [FullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!FullName|| !userName  || !bio || !level ||!password) return alert("All fields required");
    setLoading(true);
    try {
      const res = await signup({ FullName, userName, bio, level, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900 px-4">
      <Card className="w-full max-w-md shadow-xl animate-fade">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
              type="text"
              placeholder="Full Name"
              value={FullName}
              onChange={e => setFullName(e.target.value)}
           />
          <Input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            />
            <Input
             type="text"
             placeholder="Bio"
             value={bio}
             onChange={e => setBio(e.target.value)}
           />
            <select
              className="w-full border rounded px-3 py-2"
              value={level}
              onChange={e => setLevel(e.target.value)}
              >
                 <option value="">Select Level</option>
                     {Array.from({ length: 12 }, (_, i) => (
                     <option key={i + 1} value={`Grade ${i + 1}`}>{`Grade ${i + 1}`}</option>
                        ))}
              </select>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignup} disabled={loading} className="w-full">
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </CardFooter>
        <p className="text-sm text-center text-zinc-600 dark:text-zinc-300 mt-4">
            Already have an account?{" "}
            <Link to="/loginForm" className="text-blue-600 hover:underline">
                Login
            </Link>
        </p>
      </Card>
    </div>
  );
}
