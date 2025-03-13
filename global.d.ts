declare module "speak-tts" {
    export default class Speech {
        init(config?: {
            volume?: number;
            lang?: string;
            rate?: number;
            pitch?: number;
            voice?: string;
            splitSentences?: boolean;
        }): Promise<void>;

        setVoice(voice: string): void;
        speak(options: { text: string }): void;
        pause(): void;
        resume(): void;
        cancel(): void;
    }
}
