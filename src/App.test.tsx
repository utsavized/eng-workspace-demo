import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('task dashboard', () => {
  it('renders the complete task list', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Task dashboard' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByText('ENG-142')).toBeInTheDocument()
  })

  it('searches across task content', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('searchbox', { name: 'Search tasks' }), 'telemetry')

    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByText('Improve workspace startup telemetry')).toBeInTheDocument()
  })

  it('shows an empty state when search has no results', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('searchbox', { name: 'Search tasks' }), 'not-a-real-task')

    expect(screen.getByRole('heading', { name: 'No matching tasks' })).toBeInTheDocument()
  })
})
