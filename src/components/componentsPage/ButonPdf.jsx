import { Button } from "@nextui-org/react";
import { PdfIcon } from "../../icons/PdfIcon";
const ButonPdf = () => {
  return (
    <div className="sticky bottom-10 left-10 z-50 w-10">
      <Button
        isIconOnly
        as="a"
        href="/documents/documento.pdf"
        download
        color="primary"
        variant="solid"
      >
        <PdfIcon />
      </Button>
    </div>
  );
};

export default ButonPdf;
