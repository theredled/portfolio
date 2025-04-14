import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Contact'
}

const pageTitle = "Me contacter";
export default function Contact() {
    const data = getAllData();

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: pageTitle},
            ]}></Breadcrumbs>

            <h1>{pageTitle}</h1>
            <p></p>

        </div>
    );
}