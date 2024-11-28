import { useState } from "react";
import { Button } from "@nextui-org/react";
import useModal from "../../hooks/useModal";
import ModalGeneral from "../../components/modal/ModalGeneral";
import axios from "axios";
import InputComponent from "../input/Input";
import { useForm } from "../../hooks/useForm";
import toasts from "../../helpers/toast";

const initialData = {
  nombre: "",
  apellido: "",
  email: "",
  celular: "",
  code: "",
};

const ModalTransformaPage = () => {
  const { isOpen, open, onOpenChange, close } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  const validations = {
    nombre: [(value) => value.length > 1, "Ingrese un nombre"],
    apellido: [(value) => value.length > 1, "Ingrese un apellido"],
    email: [(value) => value.includes("@"), "Email invalido"],
    celular: [(value) => value.length === 9, "Ingrese un celular valido"]
  };
  const { formState, onInputChange, formErrorsValidation } = useForm(
    initialData,
    validations
  );

  const register = async() =>{
    try {
      setIsLoadingLogin(true)
      const { code, ...usuario } = formState
      const areThereErrorsValidations = (Object.values(formErrorsValidation))?.length > 0
      if(areThereErrorsValidations){
        Object.values(formErrorsValidation)?.forEach( error=>{
          toasts.error(error);
        } )
        return
      }
      await axios.post('/api/users', {
        headers: {  
          'Content-Type': 'application/json',
          Accept: '*/*', 
        },
        body: JSON.stringify(usuario)
      })
      
      toasts.success("Registro exitoso");
    } catch (error) {
      console.log("🚀 ~ register ~ error:", error)
      const errors = error.response?.data?.details
      if(errors && errors.length > 0){
        errors.forEach( error=>{
          toasts.error(error);
        } )
      } else{
        toasts.error('Error al crear');
      }
        
    } finally {
      setIsLoadingLogin(false)
    }
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <ModalGeneral
      isOpen={isOpen}
      buttonOpen={
        <Button
          color="primary"
          className="mr-auto p-8 rounded-3xl"
          size="lg"
          onPress={open}
        >
          ÚNETE AHORA
        </Button>
      }
      onOpenChange={onOpenChange}
      title={
        <p className="text-center">
          ¡Inscríbete ahora para comenzar <br />
          tu viaje en Machine Learning!{" "}
        </p>
      }
      tamano="m"
    >
      <div className="w-4/5 mx-auto mt-8">
        <InputComponent
          label="Nombre"
          name="nombre"
          value={formState.nombre}
          onChange={onInputChange}
          formErrorsValidation={formErrorsValidation}
          placeholder="Jhon"
          size="md"
          color="primary"
          variant="underlined"
          classNameComponent="mb-4 mx-auto w-full"
        />
        <InputComponent
          label="Apellido"
          name="apellido"
          value={formState.apellido}
          onChange={onInputChange}
          formErrorsValidation={formErrorsValidation}
          placeholder="Doe"
          size="md"
          color="primary"
          variant="underlined"
          classNameComponent="mb-4 mx-auto w-full"
        />
        <InputComponent
          label="Correo Electronico"
          name="email"
          value={formState.email}
          onChange={onInputChange}
          formErrorsValidation={formErrorsValidation}
          placeholder="example@gmail.com"
          size="md"
          color="primary"
          variant="underlined"
          classNameComponent="mb-4 mx-auto w-full"
        />
        <InputComponent
          label="Celular"
          name="celular"
          value={formState.celular}
          onChange={onInputChange}
          formErrorsValidation={formErrorsValidation}
          placeholder="987654321"
          size="md"
          color="primary"
          variant="underlined"
          classNameComponent="mb-4 mx-auto w-full"
        />
        <InputComponent
          label="Código Referencia"
          name="code"
          value={formState.code}
          onChange={onInputChange}
          formErrorsValidation={formErrorsValidation}
          placeholder="yyy-a"
          size="md"
          color="primary"
          variant="underlined"
          classNameComponent="mb-4 mx-auto w-full"
        />
        <div className="flex justify-around mb-8">
          <Button color="danger" onPress={close}>
            Cancelar
          </Button>
          <Button color="primary" isLoading={isLoadingLogin} onPress={register}>
            Enviar
          </Button>
        </div>
      </div>
    </ModalGeneral>
  );
};

export default ModalTransformaPage;
