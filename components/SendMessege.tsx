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

            <div className="flex flex-col items-center space-y-6 md:p-8">
                <h1 className="text-xl md:text-3xl font-exo_2 font-bold text-left">Send an Email</h1>

                {/* Email Input */}
                <div className="relative w-full md:w-1/2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="peer text-gray-800 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-transparent"
                        placeholder="Your Email Address"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 -top-2 text-sm text-gray-500 rounded-md transition-all duration-300 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 "
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
                        className="peer w-full border text-gray-800 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-transparent"
                        placeholder="Subject"
                    />
                    <label
                        htmlFor="subject"
                        className="absolute left-3 -top-2 text-sm text-gray-500 rounded-md transition-all duration-300 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
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
                        className="peer w-full border text-gray-800 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-transparent h-32"
                        placeholder="Message"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute left-3 -top-2 text-sm text-gray-500 rounded-md transition-all duration-300 bg-white px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
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
