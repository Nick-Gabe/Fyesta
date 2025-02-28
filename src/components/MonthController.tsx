import { Dispatch, SetStateAction } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Props {
  year: number
  monthIndex: number
  setYear: Dispatch<SetStateAction<number>>
  setMonthIndex: Dispatch<SetStateAction<number>>
}

const MonthController = ({ year, setYear, setMonthIndex, monthIndex }: Props) => {
  const arrMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  let monthDisplay = arrMeses[monthIndex]

  const minMonthIndex = 0;
  const maxMonthIndex = 11;

  const minusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex > minMonthIndex) return MonthIndex - 1;
    setYear(year => year - 1)
    return 11;
  };

  const plusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex < maxMonthIndex) return MonthIndex + 1;
    setYear(year => year + 1)
    return 0;
  };

  return (
    <div className='flex gap-6 items-center justify-center'>
      <AiOutlineArrowLeft
        className='w-7 h-7 cursor-pointer'
        onClick={() => {
          setMonthIndex(minusMonthIndex(monthIndex))
          monthDisplay = arrMeses[monthIndex]
        }}
        title='mês anterior'
      />
      <h1 className='text-3xl text-center select-none w-72'>{monthDisplay} de {year}</h1>
      <AiOutlineArrowRight className='w-7 h-7 cursor-pointer'
        onClick={() => {
          setMonthIndex(plusMonthIndex(monthIndex))
          monthDisplay = arrMeses[monthIndex]
        }}
        title='proximo mês'
      />
    </div>
  )
}

export default MonthController
