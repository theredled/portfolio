'use client'
import {useEffect, useRef} from 'react';
import { redirect } from 'next/navigation'
//import Modal from './Modal';

const WrapLink = ({children, linkSelector = 'a[data-toggle-wrap-link="1"], a', onClick = null}) => {
    const wrapperRef = useRef(null);
    //const navigate = useNavigate();

    useEffect(() => {
        const $wrapper = wrapperRef.current;
        if (!$wrapper) return;

        const $link = $wrapper.querySelector(linkSelector);
        if (!$link) return;

        const handleClick = (ev) => {
            // Dropdown
            /*const $target = ev.target;
            const $linkAncestor = $target.closest('a');
            if ($linkAncestor && $linkAncestor !== $link) {
              const dropdown = $target.closest('.dropdown');
              if (dropdown) {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) menu.style.display = 'none';
              }
              return;
            }*/

            // Action personnalisée
            if (onClick) {
                onClick();
                ev.preventDefault();
                return;
            }

            // Modal ?
            /*if ($link.dataset.toggleModal !== undefined) {
              Modal.openModalFromLink($link);
            } else if ($link.href) {
              window.location.href = $link.href;
            }*/

            redirect($link.href);
        };

        $wrapper.classList.add('wrap-link');
        $wrapper.addEventListener('click', handleClick);
        $link.classList.add('hidden');

        return () => {
            $link.classList.remove('hidden');
            $wrapper.removeEventListener('click', handleClick);
        };
    }, [linkSelector, onClick]);

    return <div ref={wrapperRef}>{children}</div>;
};

export default WrapLink;
