import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import type React from 'react';
import { IconMenu } from '../IconMenu';
import { useEffect, useState } from 'react';


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
                <a href="#" title='Tela inical'>
                    <IconMenu>
                        <HouseIcon />
                    </IconMenu>
                </a>
                <a href="#" title='Histórico'>
                    <IconMenu>
                        <HistoryIcon />
                    </IconMenu>
                </a>
                <a href="#" title='Configurações'>
                    <IconMenu>
                        <SettingsIcon />
                    </IconMenu>
                </a>
                <a
                    href="#"
                    title='Tema'
                    onClick={handleThemeChange}
                >
                    <IconMenu>
                        {nextThemeIcon[theme]}
                    </IconMenu>
                </a>
            </nav>
        </>
    )
}