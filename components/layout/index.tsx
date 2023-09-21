import Link from "next/link"
import { useRouter } from "next/router";
import { PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

const Layout = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    return <div className={`flex ${poppins.className}`}>
        <div className="menu">
            <h1>{router.pathname.split("/")[2] ?? 'Home'}</h1>
            <div className={'links'}>
                <Link href="/hooks/use-ref" className={'link'}>useRef</Link>
                <Link href="/hooks/use-imperative" className={'link'}>useImperative</Link>
                <Link href="/hooks/use-state" className={'link'}>useState</Link>
                <Link href="/hooks/use-effect" className={'link'}>useEffect</Link>
                <Link href="/hooks/use-reducer" className={'link'}>useReducer</Link>
            </div>
        </div>
        <main className="main">{children}</main>
    </div>
}

export default Layout;