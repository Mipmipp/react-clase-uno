export function MatchNombre(props) {
   const [value, setValue] = React.useState("");

   function handlerInputValue(event) {
      setValue(event.target.value);
   }

   return (
      <input
         value={value}
         onChange={handlerInputValue}
         className={value === props.nombre ? "input" : "input-mach"}
      />
   );
}

export function PasswordInput(props) {
   const [value, setValue] = React.useState("");

   function handlerInputValue(event) {
      setValue(event.target.value);
   }

   return (
      <input
         type={props.type}
         value={value}
         onChange={handlerInputValue}
         className={value.length < props.minLength ? "input-mach" : "input"}
      />
   );
}

/*
 * DATO: Pueden usar las siguientes funciones como prueba:
 * - (value) => value.length >= 8;
 *   Esta función chequea que el input tenga más de 8 caracteres.
 *
 * - (value) => !value.match(" ");
 *   Esta función chequea que el input no tenga espacios.
 *
 * - (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
 *   Esta hermosa regex robada de internet chequea que el input sea una dirección de mail válida.
 *
 * Si quieren, pueden agregar una prop extra "isPassword". Si es true el input deberá tener type="password".
 */

export function ValidationInput(props) {
   const [value, setValue] = React.useState("");

   function handlerInputValue(event) {
      setValue(event.target.value);
   }

   return (
      <input
         value={value}
         onChange={handlerInputValue}
         type={props.isPassword ? "password" : ""}
         className={props.validation(value) ? "input" : "input-mach"}
      />
   );
}
