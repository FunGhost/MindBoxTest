import { memo } from "react";
import { CardFooter } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FilterType } from "@/types/Todo.type";
import { Button } from "@/components/ui/button";

type FooterProps = {
  completedLength: number;
  valueFilter: FilterType;
  changeValue: (value: FilterType) => void;
  clearCompleted: () => void;
};

const Footer: React.FC<FooterProps> = memo(
  ({ completedLength, valueFilter, changeValue, clearCompleted }) => {
    return (
      <CardFooter className="flex justify-between">
        <div>{completedLength} items left</div>
        <ToggleGroup
          type="single"
          value={valueFilter}
          onValueChange={changeValue}
        >
          <ToggleGroupItem value={FilterType.ALL} aria-label="Toggle bold">
            ALL
          </ToggleGroupItem>
          <ToggleGroupItem
            value={FilterType.NOT_COMPLETED}
            aria-label="Toggle strikethrough"
          >
            Active
          </ToggleGroupItem>
          <ToggleGroupItem
            value={FilterType.COMPLETED}
            aria-label="Toggle italic"
          >
            Completed
          </ToggleGroupItem>
        </ToggleGroup>
        <Button
          onClick={clearCompleted}
          className="bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-700 p-1.5"
        >
          Clear Completed
        </Button>
      </CardFooter>
    );
  },
);

export default Footer;
