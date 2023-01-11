import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <span>Home</span>,
    },
    {
        path: "/products/:id",
        element: <span>Products</span>,
    },
    {
        path: "/product/:id",
        element: <span>Product</span>,
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
