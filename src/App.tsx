import { useCallback, useState, useSyncExternalStore } from "react";
import { todosStore } from "@/stores/todoStore";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FilterType } from "@/types/Todo.type";
import Footer from "@/components/Footer";
import TodoItem from "@/components/TodoItem";
import { useFilter } from "@/shared/useFilter";
import Header from "@/components/Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
  const [isViewFull, setIsViewFull] = useState(true);
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot,
  );

  const completedLength = todos.filter((todo) => todo.isCompleted).length;

  const currentTodos = useFilter(filter, todos);

  const clearCompleted = useCallback(() => {
    todosStore.removeAllCompleted();
  }, []);

  const changeValue = useCallback((value: FilterType) => {
    setFilter(value);
  }, []);

  const toggleCompleted = useCallback((id: number) => {
    console.log("change", id);
    todosStore.toggleTodo(id);
  }, []);

  const handleAddTodo = () => {
    todosStore.addTodo(inputValue);
    setInputValue("");
  };

  const toggleViewFull = useCallback(() => {
    setIsViewFull((prev) => !prev);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-10 flex flex-col">
      <Card className="max-w-3xl w-full mx-auto mt-16 p-4 shadow">
        <Header
          btnFn={toggleViewFull}
          btnText={isViewFull ? "Close" : "View Full"}
        />
        {isViewFull && (
          <>
            <CardContent>
              <Input
                className="mb-4"
                type="text"
                value={inputValue}
                placeholder="What needs to be done?"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTodo();
                  }
                }}
              />
              <hr />
              <ul>
                {currentTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center space-x-2 p-1.5"
                  >
                    <TodoItem todo={todo} toggleCompleted={toggleCompleted} />
                  </li>
                ))}
              </ul>
            </CardContent>
            <Footer
              completedLength={completedLength}
              valueFilter={filter}
              changeValue={changeValue}
              clearCompleted={clearCompleted}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default App;
