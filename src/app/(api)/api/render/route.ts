import puppeteer from 'puppeteer-core';
import chrome from "chrome-aws-lambda";
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
            browser = await puppeteer.launch({
                args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
                defaultViewport: chrome.defaultViewport,
                executablePath: await chrome.executablePath,
                headless: chrome.headless,
                ignoreHTTPSErrors: true,
            });
        } else {
            browser = await puppeteer.launch({
                headless: true,
            });
        }

        const page = await browser.newPage();
        await page.setViewport({ width: 1000, height: 1000 });
        await page.goto(getAbsoluteURL(`/api/render/page?seed=${seed}`));
        await page.waitForFunction('window.status === "ready"');
        const screenshot = await page.screenshot();
        await browser.close();

        const response = new NextResponse(screenshot)
        response.headers.set("content-type", "image/png");

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

}