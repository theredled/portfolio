import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import NavBar from "@/src/components/NavBar";
import {getAllData} from "@/src/lib/getData";
import {I18nProviderClient} from '@/src/locales/client'
import Breadcrumbs from "@/src/components/Breadcrumbs";
import {BreadcrumbsContextProvider} from "@/src/context/BreadcrumbsContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Benoît Guchet | Full-stack freelance developer",
        absolute: "",
        template: "%s | Benoît Guchet | Full-stack freelance developer"
    },
    description: "Portfolio de Benoît Guchet",
};

export default async function RootLayout({params, children}:
                                         Readonly<{
                                             params: Promise<{ locale: string }>,
                                             children: React.ReactNode;
                                         }>) {

    const {locale} = await params;
    return (
        <html lang={locale}>
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-EL0JKV2RPQ"></script>
            <script>{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-EL0JKV2RPQ');
                  `}
            </script>


            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap"
                  rel="stylesheet"/>

            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            <link type="image/png" sizes="16x16" rel="icon"
                  href={'/icons8-brackets-external-basicons-solid-edtgraphics-16.png'}/>
            <link type="image/png" sizes="32x32" rel="icon"
                  href={'/icons8-brackets-external-basicons-solid-edtgraphics-32.png'}/>
            <link type="image/png" sizes="96x96" rel="icon"
                  href={'/icons8-brackets-external-basicons-solid-edtgraphics-96.png'}/>
            <link type="image/png" sizes="72x72" rel="icon"
                  href={'/icons8-brackets-external-basicons-solid-edtgraphics-72.png'}/>
            <link type="image/png" sizes="96x96" rel="icon"
                  href={'/icons8-brackets-external-basicons-solid-edtgraphics-96.png'}/>
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <I18nProviderClient locale={locale}>
            <NavBar data={getAllData()}></NavBar>
            <BreadcrumbsContextProvider>
                <Breadcrumbs/>
                <main id="main">
                    {children}
                </main>
            </BreadcrumbsContextProvider>
        </I18nProviderClient>
        </body>
        </html>

    );
}
