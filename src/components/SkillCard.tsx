import { useEffect, useRef } from "preact/hooks";
import gsap from "gsap";

export default function SkillCard({
    name,
    icon,
    level,
}: {
    name: string;
    icon: string;
    level: number;
}) {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (progressRef.current) {
            gsap.to(progressRef.current, {
                width: `${level}%`,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.3,
            });
        }
    }, [level]);

    return (
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center p-2 mr-4">
                    <img src={icon} alt={name} class="object-contain" style="width: 800px;height: 800px;"/>
                </div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {name}
                </div>
            </div>

            <div class="mt-2">
                <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <span>熟练程度</span>
                    <span>{level}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                        ref={progressRef}
                        class="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full relative overflow-hidden"
                        style={{ width: "0%" }}
                    >
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
