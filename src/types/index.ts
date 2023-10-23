export type Rule = {
  id: string
  code: string
  description: string
  type: string
  severity: string
  state: string
  date: string
}

export type History = {
  id: number
  user: string
  reason: string
  time: string
  action: string
}
