import { useEffect, useRef } from 'react';
import { Container } from '../../components/Container';
import { DeafultInput } from '../../components/DeafultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { DeafultButton } from '../../components/DeafultButton';
import { SaveIcon } from 'lucide-react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionsTypes } from '../../contexts/TaskContext/TaskActions';


export function Settings() {

    const { state, dispatch } = useTaskContext()
    const { config } = state

    const workTimeInput = useRef<HTMLInputElement>(null)
    const shortBreakTimeInput = useRef<HTMLInputElement>(null)
    const longBreakTimeInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        document.title = 'Configurações - Chronos Pomodoro'
    }, [])

    function handleUpdateSettings(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        showMessage.dismiss()

        const formErros = []

        const workTimeValue = Number(workTimeInput.current?.value)
        const shortBreakTimeValue = Number(shortBreakTimeInput.current?.value)
        const longBreakTimeValue = Number(longBreakTimeInput.current?.value)

        if (!(workTimeValue > 0 && workTimeValue <= 90)) {
            formErros.push('O tempo de foco deve ser entre 1 e 90 minutos.')
        }
        if (!(shortBreakTimeValue > 0 && shortBreakTimeValue <= 30)) {
            formErros.push('O tempo de descanso curto deve ser entre 1 e 30 minutos.')
        }
        if (!(longBreakTimeValue > 0 && longBreakTimeValue <= 60)) {
            formErros.push('O tempo de descanso longo deve ser entre 1 e 60 minutos.')
        }

        if (formErros.length > 0) {
            formErros.forEach(error => {
                showMessage.error(error)
            });
            return
        }

        dispatch({
            type: TaskActionsTypes.CHANGE_SETTINGS,
            payload: {
                workTime: workTimeValue,
                shortBreakTime: shortBreakTimeValue,
                longBreakTime: longBreakTimeValue
            }
        })

        showMessage.success('Configurações salvas com sucesso!')

    }


    return (
        <>
            <MainTemplate>
                <div className={styles.settingsContainer}>
                    <Heading>Configurações</Heading>
                    <p>Modifique as configurações para tempo de foco, descanso curto e descanso longo</p>
                    <Container>
                        <form className={styles.form} action="#" onSubmit={handleUpdateSettings}>
                            <DeafultInput
                                id='workTimeInput'
                                labelText='Foco'
                                type='number'
                                ref={workTimeInput}
                                defaultValue={config.workTime}
                            />

                            <DeafultInput
                                id='shortBreakTimeInput'
                                labelText='Descanso curto'
                                type='number'
                                ref={shortBreakTimeInput}
                                defaultValue={config.shortBreakTime}
                            />

                            <DeafultInput
                                id='longBreakTimeInput'
                                labelText='Descanso longo'
                                type='number'
                                ref={longBreakTimeInput}
                                defaultValue={config.longBreakTime}
                            />

                            <DeafultButton
                                icon={<SaveIcon />}
                                title='Salvar alterações'
                                type='submit'
                            />
                        </form>
                    </Container>
                </div>
            </MainTemplate>
        </>
    )
}