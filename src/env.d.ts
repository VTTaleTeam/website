/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly API_KEY: string;
    readonly DISCORD_WEBHOOK_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
