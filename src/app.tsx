import { Suspense } from "react";
import { BaseUIProvider, RouterProvider } from "./app/providers";
import { SpinnerLoading } from "./components/atoms";

function App() {
  return (
    <>
      <BaseUIProvider>
        <Suspense fallback={<SpinnerLoading />}>
          <RouterProvider />
        </Suspense>
      </BaseUIProvider>
    </>
  );
}

export default App;
