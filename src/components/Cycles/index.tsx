import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';


export function Cycles() {

    const { state } = useTaskContext()


    const cycleStep = Array(state.currentCycle).fill(null)

    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo'
    }

    return (
        <>
            <div className={styles.cycle}>
                <p>Ciclos:</p>
                <div className={styles.cycleDots}>
                    {
                        cycleStep.map(
                            (_, index) => {
                                const nextCycle = getNextCycle(index)
                                const nextCycleType = getNextCycleType(nextCycle)
                                return (
                                    <div
                                        key={`${nextCycleType}_${nextCycle}`}
                                        className={`${styles.cycleDot}
                                        ${styles[nextCycleType]}`}
                                        title={cycleDescriptionMap[nextCycleType]}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}