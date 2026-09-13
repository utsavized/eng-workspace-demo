import { useMemo, useState } from 'react'
import { BellIcon, GridIcon, ListIcon, SearchIcon } from './components/Icons'
import { TaskCard } from './components/TaskCard'
import { tasks } from './data/tasks'

export default function App() {
  const [query, setQuery] = useState('')

  const visibleTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return tasks

    return tasks.filter((task) =>
      [task.id, task.title, task.description, task.owner, task.status]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [query])

  const inProgress = tasks.filter((task) => task.status === 'In progress').length
  const readyForReview = tasks.filter((task) => task.status === 'Ready for review').length

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Workboard home">
          <span className="brand__mark">W</span>
          <span>Workboard</span>
        </a>

        <nav aria-label="Primary navigation">
          <a className="nav-link nav-link--active" href="#tasks">Tasks</a>
          <a className="nav-link" href="#activity">Activity</a>
          <a className="nav-link" href="#team">Team</a>
        </nav>

        <div className="topbar__actions">
          <button className="icon-button" aria-label="Notifications">
            <BellIcon />
            <span className="notification-dot" />
          </button>
          <span className="avatar avatar--header">UT</span>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">Engineering</p>
            <h1 id="page-title">Task dashboard</h1>
            <p className="subtitle">Track what the team is building and where work needs attention.</p>
          </div>

          <div className="summary" aria-label="Task summary">
            <div className="summary__item">
              <strong>{tasks.length}</strong>
              <span>Open tasks</span>
            </div>
            <div className="summary__divider" />
            <div className="summary__item">
              <strong>{inProgress}</strong>
              <span>In progress</span>
            </div>
            <div className="summary__divider" />
            <div className="summary__item">
              <strong>{readyForReview}</strong>
              <span>In review</span>
            </div>
          </div>
        </section>

        <section className="workspace" id="tasks" aria-labelledby="task-list-title">
          <div className="toolbar">
            <label className="search">
              <SearchIcon />
              <span className="sr-only">Search tasks</span>
              <input
                type="search"
                aria-label="Search tasks"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tasks, owners, or status…"
              />
              <kbd>⌘ K</kbd>
            </label>

            <div className="view-toggle" aria-label="View options">
              <button className="view-toggle__button" aria-label="Grid view"><GridIcon /></button>
              <button className="view-toggle__button view-toggle__button--active" aria-label="List view"><ListIcon /></button>
            </div>
          </div>

          <div className="list-heading">
            <div>
              <h2 id="task-list-title">All tasks</h2>
              <span>{visibleTasks.length} results</span>
            </div>
            <span className="last-synced"><span /> Synced just now</span>
          </div>

          {visibleTasks.length > 0 ? (
            <div className="task-list">
              {visibleTasks.map((task) => <TaskCard key={task.id} task={task} />)}
            </div>
          ) : (
            <div className="empty-state">
              <SearchIcon size={24} />
              <h2>No matching tasks</h2>
              <p>Try a different search term.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
