import Link from "next/link";
import HouseIcon from '@mui/icons-material/House';
import { getI18n } from '@/locales/server'; // Import de la fonction de traduction

export default async function Breadcrumbs({ breadcrumbsList }: { breadcrumbsList: any }) {
    const t = await getI18n(); // Initialisation de la fonction de traduction

    return (
        <ul className="breadcrumbs">
            <li className="home">
                <Link href="/">
                    <HouseIcon sx={{ fontSize: 19 }}>{t('home')}</HouseIcon>
                </Link>
            </li>
            {breadcrumbsList.map(({ label, url }: { label: string, url: string }, i: number, { length }: { length: number }) => (
                <li className={i === length - 1 ? "last" : ''} key={i}>
                    {url ? <Link href={url}>{label}</Link> : <span>{label}</span>}
                </li>
            ))}
        </ul>
    );
}