type Type = string
type UserPayload = Record<string, unknown>

interface SmartMessage {
  getText(): string
  getType(): Type
  getUserPayload(): UserPayload
  meetRequirementsToSend(messages: SmartMessage[]): void
}
