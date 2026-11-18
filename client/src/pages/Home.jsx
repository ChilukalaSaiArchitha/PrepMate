
import { useNavigate } from "react-router-dom";
import logo from "../assets/prepmate-logo.png";
import {
    Mic,
    FileText,
    Bot,
    Brain,
    CalendarDays,
    Trophy,
    ArrowUpRight
} from "lucide-react";

function Home() {
    const navigate = useNavigate();

    const features = [
        {
            icon: Mic,
            title: "AI Mock Interviews",
            description:
                "Practice real-time technical and behavioral interviews. Receive instant detailed scores, mistakes logs, and model answers."
        },
        {
            icon: FileText,
            title: "Resume Intelligence",
            description:
                "Check your resume against ATS tracking algorithms, extract skills, and receive actionable tips to fix deficiencies."
        },
        {
            icon: Bot,
            title: "AI Career Coach",
            description:
                "A chat assistant to explain complex concepts, solve doubts, and generate targeted study roadmaps."
        },
        {
            icon: Brain,
            title: "AI Prep Hub",
            description:
                "Generate comprehensive preparation roadmaps, study resources, coding tasks, and quizzes for any topic or company."
        },
        {
            icon: CalendarDays,
            title: "Study Planner",
            description:
                "Personalized week-by-week planner checklists to keep your placement preparations organized and on track."
        },
        {
            icon: Trophy,
            title: "Leaderboard & Streaks",
            description:
                "Earn XP points and achievements, maintain daily active streaks, and compete with candidates globally."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

            {/* Navbar */}
            <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    <img
                        src={logo}
                        alt="PrepMate"
                        className="h-10 w-auto object-contain cursor-pointer"
                        onClick={() => navigate("/")}
                    />

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate("/login")}
                            className="text-xs font-bold text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-xl transition"
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => navigate("/register")}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition hover:shadow-md hover:shadow-indigo-100"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center md:py-32">

                <div className="flex justify-center mb-8">
                    <img
                        src={require("../assets/prepmate-icon.png")}
                        alt="PrepMate icon"
                        className="h-16 w-16 object-contain"
                    />
                </div>

                <span className="bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest inline-block mb-6">
                    Prepare. Practice. Perform.
                </span>

                <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
                    Your Placement Journey Starts Here.
                </h1>

                <p className="text-gray-500 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    PrepMate is an AI-powered placement preparation platform that helps students build skills, practice coding, improve aptitude, and prepare confidently for interviews.
                </p>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => navigate("/register")}
                        className="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold py-4 px-8 rounded-2xl transition shadow-lg shadow-indigo-100 text-base"
                    >
                        Start Preparing Free
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="bg-white border-y border-slate-200/50 py-20"
            >
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Everything You Need to Get Placement-Ready
                        </h2>

                        <p className="text-gray-400 mt-3 font-medium">
                            Your complete AI-powered toolkit for placement preparation.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group relative min-h-[280px] flex flex-col bg-slate-50/70 border border-slate-200 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="font-bold text-slate-900 text-lg">
                                            {feature.title}
                                        </h3>

                                        <ArrowUpRight
                                            size={19}
                                            className="text-slate-300 transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>

                                    <p className="text-sm text-gray-500 mt-3 leading-7">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200/50 bg-white py-12 text-center text-xs text-gray-400 font-bold uppercase tracking-wider">
                <div className="max-w-7xl mx-auto px-6">

                    <img
                        src={logo}
                        alt="PrepMate"
                        className="h-8 w-auto object-contain mx-auto mb-3"
                    />

                    &copy; 2026 PrepMate - AI-Powered Placement Preparation Platform. All rights reserved.

                </div>
            </footer>
        </div>
    );
}

export default Home;
