'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {

  // State variables for email, password, and loading indicator
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // track loading state
  const router = useRouter();

  // Handles form submission for signing in
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();                         // prevent default form submission behavior      
    setLoading(true);                           // start loading to true while request is in progress
    
    // Use NextAuth's signIn method with the "credentials" provider
    const res = await signIn("credentials", {
      redirect: false,                          // Prevent auto-redirect so we can handle response
      email,
      password,
    });
    setLoading(false);                          // stop loading indicator once request completes

    if (res?.ok) {
      router.push("/dashboard");                // Redirect to dashboard on successful sign-in
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-gray-50 border border-gray-300 rounded-md p-6 min-h-[350px] flex flex-col justify-start">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        {/* Email */}
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full px-3 py-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          required
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Spacer to push button down */}
        <div className="flex-grow" />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}