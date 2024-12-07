import React, { useState } from "react";

export default function SendMessage() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = () => {
        const { email, subject, message } = formData;
        if (!email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const encodedSubject = encodeURIComponent(subject);
        const encodedMessage = encodeURIComponent(`From: ${email}\n\n${message}`);
        const mailtoLink = `mailto:fuadsafat16@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            <h1 className="text-2xl md:text-5xl">CONTACT</h1>

            <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
                <h1 className="text-xl md:text-3xl font-exo_2 font-bold text-left">Send an Email</h1>

                {/* Email Input */}
                <div className="relative w-full md:w-1/2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:border-b-8 focus:border-amber-300 text-red-500 placeholder-transparent"
                        placeholder=" " // Keep placeholder invisible
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-slate-500 bg-white peer-focus:border rounded-lg px-1"
                    >
                        Your Email Address
                    </label>
                </div>

                {/* Subject Input */}
                <div className="relative w-full md:w-1/2">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:border-b-8 focus:border-amber-300 text-red-500 placeholder-transparent"
                        placeholder=" " // Keep placeholder invisible
                    />
                    <label
                        htmlFor="subject"
                        className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-slate-500 bg-white peer-focus:border rounded-lg px-1"
                    >
                        Subject
                    </label>
                </div>

                {/* Message Textarea */}
                <div className="relative w-full md:w-1/2">
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:border-b-8 focus:border-amber-300 text-red-500 placeholder-transparent h-32"
                        placeholder=" " // Keep placeholder invisible
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-slate-500 bg-white peer-focus:border rounded-lg px-1"
                    >
                        Message
                    </label>
                </div>

                <button
                    onClick={handleSend}
                    className="bg-amber-500 text-white hover:text-amber-400 font-semibold font-exo_2 px-6 py-2 w-full md:w-1/2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-1000 ease-in-out"
                >
                    Send
                </button>
            </div>
        </>
    );
}
