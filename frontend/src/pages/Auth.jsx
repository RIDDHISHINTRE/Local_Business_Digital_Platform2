import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ ADD

export default function Auth() {
  const navigate = useNavigate(); // ✅ ADD

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    if (
      !form.email ||
      !form.password ||
      (!isLogin && (!form.name || !form.phone))
    ) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // 🔐 LOGIN
        const res = await axios.post(
          "http://localhost:5000/auth/login",
          {
            email: form.email,
            password: form.password,
          }
        );

        const token = res.data.token;
        const user = res.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("role", user.role);

        
        if (user.role === "admin") {
          navigate("/admin"); 
          return;
        }

        navigate("/dashboard"); 

      } else {
        // 📝 SIGNUP
        const res = await axios.post(
          "http://localhost:5000/auth/signup",
          form
        );

        alert(res.data.message || "Signup successful! Check email");

        setIsLogin(true);
      }

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT BACKGROUND */}
      <div className="hidden md:block w-1/2 bg-[#eef2ff]" />

      {/* RIGHT BACKGROUND */}
      <div className="w-full md:w-1/2 bg-[#f9fafb]" />

      {/* CARD */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="w-full max-w-7xl h-[720px] flex rounded-3xl overflow-hidden border border-gray-200 shadow-xl">

          {/* LEFT */}
          <div className="hidden md:flex w-1/2 bg-[#e0e7ff] p-16 flex-col justify-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                LocalBiz
              </h1>

              <h2 className="mt-16 text-5xl font-bold leading-tight text-gray-900">
                Capturing growth,<br />
                <span className="text-blue-600">creating presence.</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg">
                Your complete digital platform.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-14">
            <div className="w-full max-w-md text-gray-900">

              {/* Toggle */}
              <div className="flex justify-end gap-3 mb-10">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-5 py-2 rounded-full border text-base ${
                    isLogin
                      ? "bg-black text-white"
                      : "border-gray-400 text-gray-700"
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-5 py-2 rounded-full border text-base ${
                    !isLogin
                      ? "bg-black text-white"
                      : "border-gray-400 text-gray-700"
                  }`}
                >
                  Create account
                </button>
              </div>

              <h2 className="text-5xl font-bold">
                {isLogin ? "Welcome back" : "Create account"}
              </h2>

              <p className="text-gray-600 mb-10 text-xl">
                {isLogin
                  ? "Sign in to your account"
                  : "Start your journey"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onChange={handleChange}
                  />
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  onChange={handleChange}
                />

                {!isLogin && (
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onChange={handleChange}
                  />
                )}

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  onChange={handleChange}
                />

                <button
                  disabled={loading}
                  className="w-full py-5 bg-black text-white rounded-lg font-semibold text-xl disabled:opacity-50"
                >
                  {loading
                    ? "Please wait..."
                    : isLogin
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>

              <p className="mt-8 text-center text-gray-600 text-lg">
                {isLogin ? "New here?" : "Already have an account?"}{" "}
                <span
                  className="text-blue-600 cursor-pointer font-medium"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Create account" : "Sign in"}
                </span>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}