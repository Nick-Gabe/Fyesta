import { PlannerListaInput } from '.';

// TODO Refatorar pra isso tudo ser um componente só

type Title = { Title: string, editable: boolean }

export function PlannerColumn({ Title, editable }: Title) {
  return (
    <div className='flex flex-col gap-3 w-[352px]'>
      <div className='pb-3 border-b-2 border-[#707070] dark:border-[#383838]'>
        <h3 className='text-2xl text-violet-900 dark:text-green-700 '>{Title}</h3>
      </div>
      <PlannerListaInput editable={editable} />
    </div>
  )
}
