interface Props {
  serverMessage: string | null;
  setServerMessage: (value: string | null) => void
}

export const ServerFormValidationComponent = ({ serverMessage, setServerMessage }: Props) => {

  return (
    <div className="form-group__validation--server">

      <span> {serverMessage}</span>
      <button className="button button--primary full-width" onClick={() => setServerMessage(null)}>OK</button>
    </div>
  )
}