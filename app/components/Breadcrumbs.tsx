import Link from "next/link";
import HouseIcon from '@mui/icons-material/House';


export default function Breadcrumbs({ breadcrumbsList }: {breadcrumbsList: any}) {
    return (
        <ul className="breadcrumbs">
            <li className="home"><Link href="/">
                <HouseIcon sx={{ fontSize: 19 }}>Accueil</HouseIcon>
            </Link></li>
            {breadcrumbsList.map(({label, url}: {label: string, url: string}, i: number, {length}: {length: number}) => (
                <li className={i === length - 1 ? "last" : ''}>
                    { url ? <Link href={url}>{label}</Link> : <span>{label}</span>}
                </li>
            ))}
        </ul>
    );
}