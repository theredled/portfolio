"use client"
import {ReactNode, useEffect, useRef} from "react";
declare class SnapEvent {}


export default function CardsScroller({children}: {children: ReactNode[]}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titlesRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const browserSupportsSnapEvents = typeof SnapEvent !== "undefined";

    useEffect(() => {
        if (!containerRef.current || !titlesRef.current || !scrollerRef.current)
            return;

        const allTitles = containerRef.current.querySelectorAll('.card-title')
        const allCards = containerRef.current.querySelectorAll('.card')

        const selectTitle = (index: number) => {
            allTitles.forEach((title: Element, i: number) => {
                if (i !== index)
                    title.classList.remove('active');
            });
            allTitles[index].classList.add('active');
        }

        const scrollToCard = (index: number) => {
            if (!scrollerRef.current)
                return;

            const card = allCards[index];
            const scrollDestination = card.getBoundingClientRect().left + scrollerRef.current.scrollLeft;
            scrollerRef.current?.scrollTo(scrollDestination, 0)
        }

        const handleScroll = (e: any) => {
            if (!scrollerRef.current)
                return;

            const cardIndex = browserSupportsSnapEvents
                ? Array.from(allCards).indexOf(e.snapTargetInline)
                : Math.round(e.target.scrollLeft / scrollerRef.current.clientWidth);
            selectTitle(cardIndex);
        }

        const handleTitleClick = (e: any) => {
            const cardIndex = Array.from(allTitles).indexOf(e.currentTarget);
            scrollToCard(cardIndex);
        }

        //-- déplacement titres
        Array.from(allTitles).map((title: Element, i: number) => {
            titlesRef.current?.appendChild(title);
            title.addEventListener('click', handleTitleClick);
        });

        //-- scrollend non pris en charge par Safari
        scrollerRef.current.addEventListener(browserSupportsSnapEvents ? 'scrollsnapchanging' : 'scroll', handleScroll);
        selectTitle(0);

        return () => {
            scrollerRef.current?.removeEventListener(browserSupportsSnapEvents ? 'scrollsnapchanging' : 'scroll', handleScroll);
            Array.from(allTitles).map((title: Element, i: number) => {
                title.removeEventListener('click', handleTitleClick);
            });
        };
    }, []);

    return (
        <div ref={containerRef}>
            <div className="cards-scroller-titles" ref={titlesRef}></div>
            <div className="cards-scroller" ref={scrollerRef}>
                {children}
            </div>
        </div>
    );
}