import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Form from "../Form";
import MostrarNotas from "../MostrarNotas";
import LayoutPublic from "../layout/LayOutPublic";
import NoticiaDetalle from "../Components/NoticiaDetalle";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/Registrarse";
import Logout from "../Components/Logout";
import  ProtectedRoute from"../Components/ProtectedRoute"
import SearchForm from "../Components/SearchForm";
import ForgotPasswordForm from "../Components/ForgotPassword";
import ResetPasswordForm from "../Components/ResetPassword";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "misnoticias/notas",
        element: <MostrarNotas />,
      },
      // Envolvemos la ruta "redactar" con ProtectedRoute
      {
        path: "/misnoticias/redactar",
        element: (
          <ProtectedRoute>
            <Form />
          </ProtectedRoute>
        ),
      },
      {
        path: "/misnoticias/loguearse",
        element: <LoginForm/>,
      },
      {
        path: "/misnoticias/logout",
        element: <Logout/>,
      },
      {
        path: "/misnoticias/forgot-password",
        element: <ForgotPasswordForm/>,
      },
      {
      path: "/misnoticias/reset-password",
      element: <ResetPasswordForm/>,
    },
      {
        path: "/misnoticias/registrarse",
        element: <RegisterForm/>,
      },
      {
        path: "/misnoticias/noticia/:id",
        element: <NoticiaDetalle />,
      },
      {
        path: "/misnoticias/buscar",
        element: <SearchForm />,
      },
    ],
    
  },
];

export const router = createBrowserRouter(routes);


