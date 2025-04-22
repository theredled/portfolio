'use client'

import {useContext, useEffect} from "react";
import {BreadcrumbsContext, useBreadcrumbs} from "@/app/components/BreadcrumbsContext";

export function BreadcrumbsSetter({list}: {list: any[]}) {
    const {setBreadcrumbsList} = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbsList(list);
    }, [list, setBreadcrumbsList]);

    return null;
}