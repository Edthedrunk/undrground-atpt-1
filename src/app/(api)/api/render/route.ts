import { Browser } from 'puppeteer';
import { NextResponse } from "next/server";

const getAbsoluteURL = (path: string) => {
    if (process.env.NODE_ENV === "development") {
        return `http://localhost:3001${path}`;
    }
    return `https://${process.env.VERCEL_URL}${path}`;
};

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;
    const seed = searchParams.get("seed");

    if (!seed || seed.length !== 42) {
        return NextResponse.json({ error: "Invalid seed" }, { status: 400 });
    };



    try {
        let browser: Browser | undefined | null
        if (process.env.NODE_ENV !== 'development') {
            const chromium = require('@sparticuz/chromium')
            const puppeteer = require('puppeteer-core')
            browser = await puppeteer.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
            })
        } else {
            const puppeteer = require('puppeteer')
            browser = await puppeteer.launch({ headless: 'new' })
        }

        if (!browser) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }

        const page = await browser.newPage();
        await page.setViewport({ width: 1000, height: 1000 });
        await page.goto(getAbsoluteURL(`/api/render/page?seed=${seed}`));
        await page.waitForFunction('window.status === "ready"');
        const screenshot = await page.screenshot();
        await browser.close();

        if (!screenshot) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }

        const response = new NextResponse(screenshot)
        response.headers.set("content-type", "image/png");

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

}