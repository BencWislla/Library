// 1 passo - Quanto faltar algo preenchido no inpput deve surgr uma mensagem abaixo
// 2 passo - Quanto tudo for preenchido entao deve ser salvo ao localstorge
// 3 passo - apos isso deve ser redirecionado a page Home e aparecer o card do novo livro

import { FormRegisterBooks } from "../../components/FormRegisterBooks";
import { HeaderRegister } from "../../components/HeaderRegister";

function RegisterBooks() {
  return (
    <div>
      <div>
        <HeaderRegister />
      </div>
      <div>
        <FormRegisterBooks />
      </div>
    </div>
  );
}
export default RegisterBooks;
