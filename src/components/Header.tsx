import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { memo } from "react";

type HeaderProps = {
  btnFn: () => void;
  btnText: string;
};

const Header: React.FC<HeaderProps> = memo(({ btnFn, btnText }) => {
  return (
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          Todos
        </CardTitle>

        <Button
          onClick={btnFn}
          className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus-visible:ring-blue-700 p-2 h-full w-24"
        >
          {btnText}
        </Button>
      </div>
    </CardHeader>
  );
});

export default Header;
