export type Priority = 'High' | 'Medium' | 'Low'
export type Status = 'In progress' | 'Ready for review' | 'Backlog'

export type Task = {
  id: string
  title: string
  description: string
  priority: Priority
  status: Status
  owner: string
  initials: string
  updatedAt: string
}
