import { BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre } from "./tarea/Tarea2.js";
import { PasswordInput } from "./tarea/Tarea2.js";
import { ValidationInput } from "./tarea/Tarea2.js";
import { UncontrolledCheckbox } from "./tarea/Tarea3.js";
import { CheckboxList } from "./tarea/Tarea3.js";
import { CheckboxListWithState } from "./tarea/Tarea4.js";

/*    tarea-1

/*
ReactDOM.render(
   <BlogPost
      titulo="Ardillas"
      parrafos={`Hoy vi una ardilla.
  La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
  Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
         nombre: "Mipmipp",
         titulo: "Programador Front End",
         imagen: "https://avatars.githubusercontent.com/u/106466126?v=4",
      }}
   />,
   document.getElementById("react-app")
);
*/

/*    tarea-2

ReactDOM.render(
   <MatchNombre nombre="mipmipp" />,
   document.getElementById("react-app")
);

ReactDOM.render(
   <PasswordInput minLength="10" type="password" />,
   document.getElementById("react-app")
);

ReactDOM.render(
   <ValidationInput
      validation={(value) =>
         value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         )
      }
      isPassword={false}
   />,
   document.getElementById("react-app")
);
*/

/*  tarea-3

ReactDOM.render(
   <UncontrolledCheckbox nombre="checkbox" valorInicial={false} />,
   document.getElementById("react-app")
);

ReactDOM.render(
   <CheckboxList
      items={{
         uno: false,
         dos: true,
         tres: false,
         cuatro: true,
      }}
   />,
   document.getElementById("react-app")
);
*/

ReactDOM.render(
   <CheckboxListWithState
      items={{
         uno: false,
         dos: true,
         tres: false,
         cuatro: true,
         cinco: true,
         seis: false,
      }}
   />,
   document.getElementById("react-app")
);
