import "./assets/app.css";
import { useEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import ThemeMode from "./components/ThemeMode";
import { GithubIcon, Mail, ExternalLink } from "lucide-preact";
import SkillCard from "./components/SkillCard";

export default function App() {
    const textElement = useRef<HTMLSpanElement>(null);
    const skillsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textElement.current) return;

        const text = "Hi, 我是ImAur";
        const chars = text.split("");

        gsap.timeline({ repeat: 0 })
            .set(textElement.current, { text: "" })
            .to(
                {},
                {
                    duration: chars.length * 0.06,
                    ease: "none",
                    onUpdate: function () {
                        const idx = Math.floor(this.progress() * chars.length);
                        textElement.current.textContent = chars
                            .slice(0, idx + 1)
                            .join("");
                    },
                },
            );

        gsap.to(".cursor", {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        if (skillsContainerRef.current) {
            const skillsWidth = skillsContainerRef.current.scrollWidth / 2;

            gsap.to(skillsContainerRef.current, {
                x: -skillsWidth,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(gsap.utils.wrap(-skillsWidth, 0)),
                },
            });
        }
    }, []);

    const ConnectMe = [
        {
            name: "github",
            href: "https://github.com/BlocksFunction",
            icon: GithubIcon,
        },
        {
            name: "邮箱",
            href: "mailto:imaur@foxmail.com",
            icon: Mail,
        },
    ];

    const skills = [
        {
            name: "C++",
            icon: "/c++.svg",
            level: 75,
        },
        {
            name: "Java",
            icon: "/java.svg",
            level: 60,
        },
        {
            name: "Go",
            icon: "/go.svg",
            level: 80,
        },
        {
            name: "Rust",
            icon: "/rust.svg",
            level: 40,
        },
        {
            name: "Kotlin",
            icon: "/kotlin.svg",
            level: 50,
        },
        {
            name: "Vue",
            icon: "/vue.svg",
            level: 80,
        },
        {
            name: "React",
            icon: "/react.svg",
            level: 70,
        },
        {
            name: "PReact",
            icon: "/preact.svg",
            level: 70,
        },
        {
            name: "Typescript/JavaScript",
            icon: "/typescript.svg",
            level: 75,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 blur-xl"></div>

            <div className="fixed top-4 right-4 z-50">
                <ThemeMode />
            </div>

            <div className="relative mb-8 group z-10">
                <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-500"></div>
                    <img
                        alt="我的头像"
                        src="/head.webp"
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105 z-10"
                    />
                </div>
            </div>

            <div className="text-center mb-10 z-10">
                <div className="text-4xl md:text-5xl font-bold mb-4">
                    <span
                        ref={textElement}
                        className="text-gray-800 dark:text-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
                    ></span>
                    <span className="cursor ml-1 text-blue-500 font-bold">
                        |
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-md mx-auto text-lg">
                    欢迎来到ImAur的主页~
                </p>
            </div>

            <div className="flex space-x-6 mb-12 z-10">
                {ConnectMe.map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.href}
                        className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
                        aria-label={platform.name}
                    >
                        <platform.icon
                            size={24}
                            className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
                        />
                    </a>
                ))}
            </div>

            <div className="w-full mb-16 z-10">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200 flex items-center justify-center">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 w-12 mr-3 rounded-full"></span>
                    技术栈
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-500 h-1 w-12 ml-3 rounded-full"></span>
                </h3>

                <div className="relative overflow-hidden py-4">
                    <div
                        ref={skillsContainerRef}
                        className="flex space-x-6 py-4"
                    >
                        {skills.map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-72">
                                <SkillCard
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                />
                            </div>
                        ))}
                        {skills.map((skill, index) => (
                            <div
                                key={`copy-${index}`}
                                className="flex-shrink-0 w-72"
                            >
                                <SkillCard
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-4 text-gray-500 dark:text-gray-400 text-sm z-10">
                tips: 这个网页是PReact构建的
            </footer>
        </div>
    );
}
