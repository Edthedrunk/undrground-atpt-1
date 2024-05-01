import puppeteerDev from 'puppeteer';
import puppeteerProd from 'puppeteer-core';
import chromium from '@sparticuz/chromium'
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
        let browser;
        if (process.env.NODE_ENV === "production") {
            browser = await puppeteerProd.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: true,
            });
        } else {
            browser = await puppeteerDev.launch({
                headless: true,
            });
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