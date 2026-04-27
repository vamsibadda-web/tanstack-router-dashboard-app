import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: () => <h3>Welcome to Dashboard</h3>,
})