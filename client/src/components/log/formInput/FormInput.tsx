interface PropsInput {
  type: string,
  id: string,
  label: string,

}

export const Input = ({ id, type, label }: PropsInput) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} required={true} />
);