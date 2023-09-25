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
                <Link href="/hook-pages/use-ref" className={'link'}>useRef</Link>
                <Link href="/hook-pages/use-imperative" className={'link'}>useImperative</Link>
                <Link href="/hook-pages/use-state" className={'link'}>useState</Link>
                <Link href="/hook-pages/use-effect" className={'link'}>useEffect</Link>
                <Link href="/hook-pages/use-layout-effect" className={'link'}>useLayoutEffect</Link>
                <Link href="/hook-pages/use-reducer" className={'link'}>useReducer</Link>
                <Link href="/hook-pages/use-context" className={'link'}>useContext</Link>
                <Link href="/hook-pages/use-memo" className={'link'}>useMemo</Link>
                <Link href="/hook-pages/react-memo" className={'link'}>reactMemo</Link>
                <Link href="/hook-pages/use-callback" className={'link'}>useCallback</Link>
                <Link href="/hook-pages/custom-hook" className={'link'}>Custom</Link>
            </div>
        </div>
        <main className="main">{children}</main>
    </div>
}

export default Layout;