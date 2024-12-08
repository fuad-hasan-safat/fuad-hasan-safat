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

            <div className="flex flex-col items-center space-y-6 md:p-8">
                <h1 className="font-exo_2 text-2xl md:text-5xl">CONTACT</h1>

                <h1 className="font-bold font-exo_2 text-left text-xl md:text-2xl">Send an Email</h1>

                {/* Email Input */}
                <div className="relative w-full md:w-1/2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full text-gray-800 peer focus:outline-none placeholder-transparent"
                        placeholder="Your Email Address"
                    />
                    <label
                        htmlFor="email"
                        className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
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
                        className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full text-gray-800 peer focus:outline-none placeholder-transparent"
                        placeholder="Subject"
                    />
                    <label
                        htmlFor="subject"
                        className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
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
                        className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full h-32 text-gray-800 peer focus:outline-none placeholder-transparent"
                        placeholder="Message"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
                    >
                        Message
                    </label>
                </div>

                <button
                    onClick={handleSend}
                    className="bg-amber-500 hover:bg-blue-600 px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 w-full md:w-1/2 font-exo_2 font-semibold text-white hover:text-amber-400 focus:outline-none transition-all duration-1000 ease-in-out"
                >
                    Send
                </button>
            </div>
        </>
    );
}
