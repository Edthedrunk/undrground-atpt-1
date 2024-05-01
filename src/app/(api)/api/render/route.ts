import { NextResponse } from "next/server";
import { Browser } from 'playwright-core';

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;
    const seed = searchParams.get("seed");

    if (!seed || seed.length !== 42) {
        return NextResponse.json({ error: "Invalid seed" }, { status: 400 });
    };



    try {
        let browser: Browser | undefined;

        if (process.env.VERCEL_ENV === "production") {
            const playwright = require("playwright-aws-lambda");
            browser = await playwright.launchChromium({ headless: true });
        } else {
            const playwright = require("playwright-core");
            browser = await playwright.chromium.launch({ headless: true });
        }

        if (!browser) {
            return NextResponse.json({ error: "Something went wrong (Browser)" }, { status: 500 });
        }

        const page = await browser.newPage();
        await page.setViewportSize({ width: 1000, height: 1000 });
        await page.goto(`https://www.blokcharms.com/api/render/page?seed=${seed}`);
        await page.waitForFunction('window.status === "ready"');
        const screenshot = await page.screenshot({ type: "jpeg" });
        await browser.close();

        if (!screenshot) {
            return NextResponse.json({ error: "Something went wrong (Screenshot)" }, { status: 500 });
        }

        const response = new NextResponse(screenshot)
        response.headers.set("content-type", "image/png");

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong (Try Catch)" }, { status: 500 });
    }

}