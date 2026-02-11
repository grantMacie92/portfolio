import { SpotlightBackground } from "../Spotlight/Spotlight.tsx";
import './layout.css';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='container'>
            <SpotlightBackground />
            <div className='children'>{children}</div>
        </div>
    );
}