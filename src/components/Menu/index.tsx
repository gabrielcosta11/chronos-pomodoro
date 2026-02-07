import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import type React from 'react';
import { IconMenu } from '../IconMenu';


export function Menu() {

    return (
        <>
            <div className={styles.menu}>
                <a href="#">
                    <IconMenu>
                        <HouseIcon />
                    </IconMenu>
                </a>
                <a href="#">
                    <IconMenu>
                        <HistoryIcon />
                    </IconMenu>
                </a>
                <a href="#">
                    <IconMenu>
                        <SettingsIcon />
                    </IconMenu>
                </a>
                <a href="#">
                    <IconMenu>
                        <SunIcon />
                    </IconMenu>
                </a>
            </div>
        </>
    )
}