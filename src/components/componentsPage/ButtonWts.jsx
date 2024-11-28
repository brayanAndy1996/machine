import { Button } from "@nextui-org/react";
import Image from "next/image";

const ButtonWts = () => {
  return (
    <div className="sticky bottom-10 right-10 z-50 w-10 ml-auto">
      <Button
        isIconOnly
        as="a"
        href="https://api.whatsapp.com/send?phone=935756218&text=Estoy%20interesado%20en%20el%20curso"
        // download
        color="success"
        variant="solid"
      >
        <Image
          src="/images/wtsapp.png"
          width={40}
          height={40}
          alt="image"
          className="w-auto h-auto"
        />
      </Button>
    </div>
  );
};

export default ButtonWts;
