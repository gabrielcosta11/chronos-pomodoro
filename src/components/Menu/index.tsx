import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import type React from 'react';
import { IconMenu } from '../IconMenu';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';


type AvailableThemes = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return (
            localStorage.getItem('theme') as AvailableThemes || 'dark'
        )
    })

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(
            prevTheme => {
                const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
                return nextTheme
            }
        )
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            <nav className={styles.menu}>
                <RouterLink href="/" title='Tela inical'>
                    <IconMenu>
                        <HouseIcon />
                    </IconMenu>
                </RouterLink>
                <RouterLink href="/history" title='Histórico'>
                    <IconMenu>
                        <HistoryIcon />
                    </IconMenu>
                </RouterLink>
                <RouterLink href="/settings" title='Configurações'>
                    <IconMenu>
                        <SettingsIcon />
                    </IconMenu>
                </RouterLink>
                <RouterLink
                    href="#"
                    title='Tema'
                    onClick={handleThemeChange}
                >
                    <IconMenu>
                        {nextThemeIcon[theme]}
                    </IconMenu>
                </RouterLink>
            </nav>
        </>
    )
}