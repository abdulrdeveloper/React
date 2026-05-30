"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    return (
        <nav>
            <h1>DevTube</h1>
            <div>
                <a href="/dashboard/devtools">✈️ DevTools</a>
                <a href="/dashboard/countries">🌍 Countries</a>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}