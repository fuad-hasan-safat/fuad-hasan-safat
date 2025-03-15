"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Speech from "speak-tts";

interface Greeting {
  german: string;
  bangla: string;
  meaning: string;
  description: string;
}

const greetings: Greeting[] = [
  { 
    german: "Guten Morgen", 
    bangla: "গুটেন মর্গেন", 
    meaning: "Good Morning", 
    description: "সকাল বেলা (সূর্যোদয় থেকে দুপুর ১২টা পর্যন্ত) একে অপরকে অভিবাদন জানাতে ব্যবহৃত হয়।" 
  },
  { 
    german: "Guten Tag", 
    bangla: "গুটেন টাগ", 
    meaning: "Good Day", 
    description: "দুপুর বা দিনের বেলা (১২টা থেকে সন্ধ্যা পর্যন্ত) সাধারণ অভিবাদন।" 
  },
  { 
    german: "Guten Abend", 
    bangla: "গুটেন আবেন্ড", 
    meaning: "Good Evening", 
    description: "সন্ধ্যা বা রাতের শুরুতে (সাধারণত ৬টা পর থেকে) ব্যবহার করা হয়।" 
  },
  { 
    german: "Gute Nacht", 
    bangla: "গুটে নাখট", 
    meaning: "Good Night", 
    description: "ঘুমানোর আগে বা রাতের শেষে বিদায় নেওয়ার সময় বলা হয়।" 
  },
  { 
    german: "Hallo", 
    bangla: "হালো", 
    meaning: "Hello", 
    description: "যেকোনো সময় অনানুষ্ঠানিকভাবে কাউকে ডাকতে বা শুরু করতে ব্যবহার হয়।" 
  },
  { 
    german: "Tschüss", 
    bangla: "চুস", 
    meaning: "Bye", 
    description: "অনানুষ্ঠানিকভাবে বিদায় নেওয়ার সময় বলা হয়, বন্ধু বা পরিচিতদের সাথে।" 
  },
  { 
    german: "Auf Wiedersehen", 
    bangla: "আউফ ভিডারজেন", 
    meaning: "Goodbye", 
    description: "আনুষ্ঠানিক বা দীর্ঘ সময়ের জন্য বিদায় নেওয়ার সময় ব্যবহৃত হয়।" 
  },
  { 
    german: "Wie geht’s?", 
    bangla: "ভি গেটস?", 
    meaning: "How are you?", 
    description: "কাউকে তার খোঁজখবর নেওয়ার জন্য অনানুষ্ঠানিক প্রশ্ন।" 
  },
  { 
    german: "Mir geht es gut", 
    bangla: "মিয়ার গেট এস গুট", 
    meaning: "I'm fine", 
    description: "কেউ যখন জিজ্ঞেস করে 'Wie geht’s?' তখন এই উত্তর দেওয়া হয়।" 
  },
  { 
    german: "Danke schön", 
    bangla: "ডাঙ্কে শ্যোন", 
    meaning: "Thank you very much", 
    description: "কাউকে গভীর কৃতজ্ঞতা বা আনুষ্ঠানিকভাবে ধন্যবাদ জানাতে।" 
  },
  { 
    german: "Bitte", 
    bangla: "বিটে", 
    meaning: "Please/You’re welcome", 
    description: "অনুরোধ করার সময় ('Please') বা জবাব হিসেবে ('আপনাকে স্বাগতম') ব্যবহার হয়।" 
  },
  { 
    german: "Guten Appetit", 
    bangla: "গুটেন আপেটিট", 
    meaning: "Enjoy your meal", 
    description: "খাওয়ার আগে অন্যকে শুভেচ্ছা জানাতে বলা হয়।" 
  },
  { 
    german: "Herzlich willkommen", 
    bangla: "হের্ৎসলিখ ভিলকোমেন", 
    meaning: "Warm welcome", 
    description: "অতিথি বা নতুন কাউকে আন্তরিকভাবে স্বাগতম জানাতে।" 
  },
  { 
    german: "Frohes Neues Jahr", 
    bangla: "ফ্রোহেস নয়েস ইয়ার", 
    meaning: "Happy New Year", 
    description: "নববর্ষের শুভেচ্ছা বিনিময় করতে জানুয়ারি মাসে ব্যবহার করা হয়।" 
  },
  { 
    german: "Alles Gute zum Geburtstag", 
    bangla: "আলেস গুটে ৎসুম গেবুর্টসটাগ", 
    meaning: "Happy Birthday", 
    description: "জন্মদিনে ব্যক্তিকে শুভেচ্ছা জানানোর সময় বলা হয়।" 
  },
  { 
    german: "Schönes Wochenende", 
    bangla: "শ্যোনেস ভোখেনএন্ডে", 
    meaning: "Have a nice weekend", 
    description: "শুক্রবার বা সপ্তাহের শেষে বিদায় নেওয়ার সময় শুভকামনা জানাতে।" 
  },
  { 
    german: "Wie heißt du?", 
    bangla: "ভি হাইস্ট ডু?", 
    meaning: "What is your name?", 
    description: "কাউকে প্রথমবার নাম জিজ্ঞাসা করার সময় ব্যবহৃত হয় (অনানুষ্ঠানিক)।" 
  },
  { 
    german: "Es tut mir leid", 
    bangla: "এস টুট মির লাইট", 
    meaning: "I’m sorry", 
    description: "কোনো ভুল বা দুঃখের ঘটনায় ক্ষমা চাইতে বলা হয়।" 
  },
  { 
    german: "Willkommen", 
    bangla: "ভিলকোমেন", 
    meaning: "Welcome", 
    description: "সাধারণভাবে কাউকে স্বাগতম জানাতে বা কোনো স্থানে আসার সময়।" 
  },
  { 
    german: "Bis später", 
    bangla: "বিস শ্পেটার", 
    meaning: "See you later", 
    description: "অল্প সময়ের মধ্যে আবার দেখা হবে বলে আশা প্রকাশ করতে।" 
  },{
    german: "Grüß Gott",
    bangla: "গ্রুস গট",
    meaning: "Greetings to God (Regional)",
    description: "দক্ষিণ জার্মানি (বাভারিয়া) ও অস্ট্রিয়ায় সকাল থেকে বিকেল পর্যন্ত ব্যবহৃত ধর্মীয় ভাবযুক্ত অভিবাদন।"
  },
  {
    german: "Moin",
    bangla: "ময়েন",
    meaning: "Hi/Good Day",
    description: "উত্তর জার্মানি (হামবুর্গ, ব্রেমেন) ও ডেনমার্ক সীমান্তে সারাদিন ব্যবহার করা হয়। খুবই অনানুষ্ঠানিক।"
  },
  {
    german: "Servus",
    bangla: "জের্ভুস",
    meaning: "Hi/Bye (Regional)",
    description: "বাভারিয়া ও অস্ট্রিয়ায় 'হ্যালো' বা 'বিদায়' উভয় অর্থে ব্যবহৃত হয়।"
  },
  {
    german: "Wie geht es Ihnen?",
    bangla: "ভি গেট এস ইহেন?",
    meaning: "How are you? (Formal)",
    description: "বয়স্ক বা অপরিচিত ব্যক্তিকে সম্মানসূচকভাবে খোঁজ নেওয়ার জন্য।"
  },
  {
    german: "Schön Sie kennenzulernen",
    bangla: "শ্যোন জি কেনেন্ৎসুলের্নেন",
    meaning: "Nice to meet you",
    description: "কাউকে প্রথমবার পরিচয়ের সময় আনুষ্ঠানিকভাবে বলা হয়।"
  },
  {
    german: "Gute Reise",
    bangla: "গুটে রাইজে",
    meaning: "Safe journey",
    description: "কেউ ভ্রমণে যাওয়ার সময় শুভেচ্ছা জানাতে।"
  },
  {
    german: "Viel Glück",
    bangla: "ফিল গ্লুক",
    meaning: "Good luck",
    description: "পরীক্ষা, ইন্টারভিউ বা চ্যালেঞ্জিং কাজের আগে শুভকামনা দিতে।"
  },
  {
    german: "Gute Besserung",
    bangla: "গুটে বেসারুং",
    meaning: "Get well soon",
    description: "অসুস্থ ব্যক্তিকে দ্রুত সুস্থ হওয়ার শুভেচ্ছা জানাতে।"
  },
  {
    german: "Herzlichen Glückwunsch",
    bangla: "হের্ৎসলিখেন গ্লুক্ভুন্শ",
    meaning: "Heartfelt congratulations",
    description: "জন্মদিন, পদোন্নতি বা সাফল্যে আন্তরিক অভিনন্দন জানাতে।"
  },
  {
    german: "Guten Rutsch",
    bangla: "গুটেন রুট্শ",
    meaning: "Good slide into the New Year",
    description: "নববর্ষের আগে (৩১ ডিসেম্বর) শুভেচ্ছা বিনিময়ে ব্যবহৃত হয়।"
  }
]
export default function Greetings() {
    const [speech, setSpeech] = useState<Speech | null>(null);

    useEffect(() => {
      const speechInstance = new Speech();
      speechInstance
        .init({
          volume: 1,
          lang: "de-DE",
          rate: 1,
          pitch: 1,
        })
        .then(() => setSpeech(speechInstance))
        .catch((e) => console.error("TTS Error:", e));
    }, []);
  
    const speakGreeting = (text: string) => {
      if (speech) {
        speech.speak({ text });
      }
    };
  
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Head>
            <title>German to Bangla Greetings</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 onClick={() => speakGreeting('Deutsche Grüße')} className="text-2xl font-bold text-center mb-6">German Greetings (Deutsche Grüße  <span className="text-xl cursor-pointer">🔊</span>) 🇩🇪</h1>
  
        <div className="grid grid-cols-1 gap-4">
          {greetings.map((greet, index) => (
            <button
              key={index}
              onClick={() => speakGreeting(greet.german)}
              className="p-4 border border-gray-300 rounded-lg shadow-md flex justify-between items-center
                hover:bg-blue-500 hover:text-white transition-all"
            >
              <div className="flex flex-col justify-start items-start place-content-start">
                <p className="text-lg font-bold">{index + 1} {greet.german}</p>
                <p className="text-sm text-gray-600">{greet.bangla}</p>
                <p className="text-xs italic">{greet.meaning}</p>
              </div>
              <span className="text-xl">🔊</span>
            </button>
          ))}
        </div>
      </div>
    );
}
