export default function StatusMessage({ message }: { message: string }) {
  return <p className="status-message" role="status" aria-live="polite">{message}</p>
}
