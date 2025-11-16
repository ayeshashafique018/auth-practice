"use client";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f0ff]">
      <h1 className="text-4xl font-bold mb-8 text-[#5b21b6]">Sign In</h1>
      <a
        href="/api/auth/signin/google"
        className="btn-primary mb-4"
      >
        Sign in with Google
      </a>
      <a
        href="/api/auth/signin/github"
        className="btn-secondary"
      >
        Sign in with GitHub
      </a>
    </div>
  );
}
