"use client";

import React, { useEffect, useState } from "react";
import Speech from "speak-tts";

// Interface for character data
interface CharacterData {
    german: string;
    bengali: string;
}

const DasAlphabet: React.FC = () => {
    const [speech, setSpeech] = useState<Speech | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);
    // const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

    // German characters with Bengali pronunciations
    const germanCharacters: CharacterData[] = [
        { german: "A", bengali: "আহ" }, { german: "B", bengali: "বেহ" },
        { german: "C", bengali: "ৎসি" }, { german: "D", bengali: "ডি" },
        { german: "E", bengali: "এ" }, { german: "F", bengali: "এফ" },
        { german: "G", bengali: "গে" }, { german: "H", bengali: "হা" },
        { german: "I", bengali: "ই" }, { german: "J", bengali: "য়ট" },
        { german: "K", bengali: "কা" }, { german: "L", bengali: "এল" },
        { german: "M", bengali: "এম" }, { german: "N", bengali: "এন" },
        { german: "O", bengali: "ও" }, { german: "P", bengali: "পে" },
        { german: "Q", bengali: "কু" }, { german: "R", bengali: "এর" },
        { german: "S", bengali: "এস" }, { german: "T", bengali: "টি" },
        { german: "U", bengali: "উ" }, { german: "V", bengali: "ফাউ" },
        { german: "W", bengali: "ভে" }, { german: "X", bengali: "ইক্স" },
        { german: "Y", bengali: "ইপসিলন" }, { german: "Z", bengali: "ৎসেট" },
        { german: "Ä", bengali: "এ" }, { german: "Ö", bengali: "ও" },
        { german: "Ü", bengali: "ইউ" }, { german: "ß", bengali: "এসজেড" },
        { german: "0", bengali: "নল" }, { german: "1", bengali: "আইন্স" },
        { german: "2", bengali: "স্পয়" }, { german: "3", bengali: "দ্গয়ায়" },
        { german: "4", bengali: "ফিয়া" }, { german: "5", bengali: "ফুনফ" },
        { german: "6", bengali: "জেক্স" }, { german: "7", bengali: "জীবেন" },
        { german: "8", bengali: "আখট" }, { german: "9", bengali: "নইন" }
    ];

    // ... keep the existing useEffect and speech initialization code same as before ...
    useEffect(() => {
        const speechInstance = new Speech();
    
        const initializeTTS = async () => {
            try {
                await speechInstance.init({
                    volume: 1,
                    lang: "de-DE",
                    rate: 0.8,
                    pitch: 0.9,
                });
    
                const loadVoices = () => {
                    const voices = window.speechSynthesis.getVoices();
                    if (voices.length > 0) {
                        const germanVoice = voices.find(voice =>
                            voice.lang.startsWith("de-") || voice.name.includes("German")
                        );
                        if (germanVoice) {
                            speechInstance.setVoice(germanVoice.name);
                        }
                        setSpeech(speechInstance);
                    } else {
                        setTimeout(loadVoices, 200);
                    }
                };
    
                if (window.speechSynthesis.onvoiceschanged !== null) {
                    window.speechSynthesis.onvoiceschanged = loadVoices;
                } else {
                    loadVoices();
                }
            } catch (error) {
                console.error("TTS Initialization Error:", error);
            } finally {
                setIsInitializing(false);
            }
        };
    
        initializeTTS();
    
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);
    

    const speakCharacter = (text: string) => {
        if (!speech) return;
        window.speechSynthesis.cancel();
        speech.speak({ text });
    };

    if (isInitializing) {
        return (
            <div className="p-4 text-center text-gray-500">
                Initialisiere Sprachausgabe...
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                জার্মান বর্ণমালা এবং সংখ্যা <br />
                <span className="text-lg">(German Alphabet and Numbers)</span>
            </h1>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-6">
                {germanCharacters.map((char, index) => (
                    <button
                        key={index}
                        onClick={() => speakCharacter(char.german)}
                        disabled={!speech}
                        className={`p-2 text-center rounded-lg transition-all
                            ${speech
                                ? "bg-blue-500 hover:bg-blue-600 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"}
                            ${index >= 26 ? "bg-purple-500 hover:bg-purple-600" : ""}`}
                        aria-label={`${char.german} - ${char.bengali}`}
                    >
                        <div className="flex flex-col items-center">
                            <span className="block text-lg font-mono font-bold">{char.german}</span>
                            <span className="block text-xs mt-1 border-t pt-1">
                                {char.bengali}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Pronunciation Guide */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">উচ্চারণ গাইড:</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li>Ä → &quot;এ&quot; (যেমন: Mädchen - ম্যাডখেন)</li>
                    <li>Ö → &quot;ও&quot; (যেমন: schön - শ্যোন)</li>
                    <li>Ü → &quot;ইউ&quot; (যেমন: über - ইবার)</li>
                    <li>ß → &quot;এসজেড&quot; (যেমন: Straße - স্ট্রাসে)</li>
                </ul>
            </div>
        </div>
    );
};

export default DasAlphabet;