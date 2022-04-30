
interface Props {
  type: string,
  id: string,
  label: string,
  disabled: boolean
}

export const Input = ({ id, type, label, disabled }: Props) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} />
);