import { Suspense } from "react";
import { BaseUIProvider, RouterProvider } from "./app/providers";

function App() {
  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <BaseUIProvider>
          <RouterProvider />
        </BaseUIProvider>
      </Suspense>
    </>
  );
}

export default App;
