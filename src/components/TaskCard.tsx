import type { Task } from '../types'

type TaskCardProps = {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="task-card">
      <div className="task-card__topline">
        <span className="task-id">{task.id}</span>
        <span className={`priority priority--${task.priority.toLowerCase()}`}>
          <span className="priority__dot" />
          {task.priority}
        </span>
      </div>

      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <div className="task-card__footer">
        <div className="owner">
          <span className="avatar" aria-hidden="true">{task.initials}</span>
          <span className="sr-only">Assigned to {task.owner}</span>
          <span className="updated">Updated {task.updatedAt}</span>
        </div>
        <span className={`status status--${task.status.toLowerCase().replaceAll(' ', '-')}`}>
          {task.status}
        </span>
      </div>
    </article>
  )
}
