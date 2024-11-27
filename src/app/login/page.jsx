"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { Inconsolata } from "next/font/google";
import {
  Card,
  CardBody,
  Button,
  Checkbox,
  Link,
  Tabs,
  Tab,
} from "@nextui-org/react";
import InputComponent from "../../components/input/Input";
import { useForm } from "../../hooks/useForm";
import { EyeFilledIcon } from "../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/EyeSlashFalledIcon";
import Image from "next/image";
import toasts from "../../helpers/toast";

const inconsolata = Inconsolata({ subsets: ["latin"] });
const initialData = {
  email: "",
  password: "",
  nombre: ''
};

const PageLogin = () => {
  const validations = {
    email: [(value) => value.includes("@"), "Email invalido"],
    password: [(value) => value.length > 3, "Password invalido"]
  };
  const { formState, onInputChange, formErrorsValidation } = useForm(
    initialData,
    validations
  );
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("login");
  const isLoginSelected = useMemo(() => selected === 'login', [selected])
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)
  // const [isDisabledLink, setIsDisabledLink] = useState(true)
  const login = async () => {
    try {
      setIsLoadingLogin(true)
      const areThereErrorsValidations = (Object.values(formErrorsValidation))?.length > 0
      if(areThereErrorsValidations){
        Object.values(formErrorsValidation)?.forEach( error=>{
          toasts.error(error);
        } )
        return
      }
      const {data} = await axios.get('/api/users', {
        headers: {  
          'Content-Type': 'application/json',
          Accept: '*/*', 
        },
        params: formState
      })
      toasts.success("Logeo correcto, entrando ...");
      localStorage.setItem("email", formState.email);
      localStorage.setItem("nombre", data.nombre);
      router.push("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errors = error.response?.data?.errors;
        console.log("🚀 ~ login ~ errors:", errors)
        if (errors) {
          errors.forEach((error) => {
            toasts.error(error);
          });
        } else{
          toasts.error('Error en el logeo')
        }
        return
      }
      toasts.error('Error en el logeo')
    } finally {
      setIsLoadingLogin(false)
    }
  };

  const register = async() =>{
    try {
      setIsLoadingLogin(true)
      const areThereErrorsValidations = (Object.values(formErrorsValidation))?.length > 0
      if(areThereErrorsValidations){
        Object.values(formErrorsValidation)?.forEach( error=>{
          toasts.error(error);
        } )
        return
      }
      const {data} = await axios.post('/api/users', {
        headers: {  
          'Content-Type': 'application/json',
          Accept: '*/*', 
        },
        body: JSON.stringify(formState)
      })
      toasts.success("Registro correcto, entrando ...");
      localStorage.setItem("email", formState.email);
      localStorage.setItem("nombre", data.nombre);
      router.push("/");
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
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <Card className=" bg-neutral-950 p-10" isBlurred>
        <CardBody className="overflow-visible py-8 mx-auto w-11/12">
          <div className="md:flex flex-row gap-3">
            <div>
              <div className="flex flex-col justify-center items-center mb-16">
                <Image
                  src="/images/image_3.png"
                  alt="Intranet"
                  width={259}
                  height={250}
                />
                <p
                  className={
                    inconsolata.className + " text-2xl font-black mt-4"
                  }
                >
                  Bienvenido
                </p>
                <Tabs
                  variant="underlined"
                  aria-label="Tabs variants"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="login" title="Login" />
                  <Tab key="registro" title="Registro" />
                </Tabs>

                <p className={inconsolata.className}>
                  {isLoginSelected? 'Inicie sesión en': 'Registre'} su cuenta para continuar
                </p>
              </div>
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
              {!isLoginSelected && <InputComponent
                label="Nombre"
                name="nombre"
                value={formState.nombre}
                onChange={onInputChange}
                formErrorsValidation={formErrorsValidation}
                placeholder="Jhon Done"
                size="md"
                color="primary"
                variant="underlined"
                classNameComponent="mb-4 mx-auto w-full"
              />}
              <InputComponent
                label="Contraseña"
                name="password"
                placeholder="Ingrese su contraseña"
                classNameComponent="mb-6 mx-auto w-full"
                value={formState.password}
                onChange={onInputChange}
                formErrorsValidation={formErrorsValidation}
                size="md"
                color="primary"
                variant="underlined"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
             { isLoginSelected && <div className="flex justify-between mb-6">
                <Checkbox defaultSelected>Recordar</Checkbox>
                <Link href="#" color="foreground">
                  ¿Olvido su contraseña?
                </Link>
              </div>}
              <Button
                className="w-full"
                color="primary"
                variant="shadow"
                isLoading={isLoadingLogin}
                onClick={() => {
                  isLoginSelected 
                  ? login().catch((error) => {
                    console.log(error);
                  })
                  : register().catch((error) => {
                    console.log(error);
                  })
                }}
              >
               { isLoginSelected ? 'Iniciar Sesión': 'Registrar'}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PageLogin;
