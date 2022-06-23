import { CheckCircle, Lock} from 'phosphor-react'
import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'
interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'
}


export function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvaliable = isPast(props.availableAt)
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  
  const isActive = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">{availableDateFormated}</span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActive,

      })}>
        <header className="flex items-center justify-between">

          {isLessonAvaliable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20}/>
              Conteudo Liberado
            </span>) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em breve
            </span>
            )}

          <span className="text-xs rounded px-2 py=[2px] text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'Aula Pratica'}
          </span>

        </header>
          <strong className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActive,
            'text-gray-200': !isActive,
          })}>{props.title}</strong>
      </div>
    </Link>
  )
}