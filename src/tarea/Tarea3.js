export function UncontrolledCheckbox(props) {
   const [check, setCheck] = React.useState(props.valorInicial);

   function handleCheckbox(event) {
      setCheck(event.target.checked);
   }

   return (
      <div>
         <label htmlFor={props.nombre}>{props.nombre}</label>
         <input
            id={props.nombre}
            type="checkbox"
            checked={check}
            onChange={handleCheckbox}
         />
      </div>
   );
}

export function CheckboxList(props) {
   return (
      <div>
         {Object.entries(props.items).map(([key, value]) => (
            <UncontrolledCheckbox key={key} valorInicial={value} nombre={key} />
         ))}
      </div>
   );
}
