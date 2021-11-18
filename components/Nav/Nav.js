import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/crearpost">Crear Post</Link>
    <Link href="/listarpost">Listar Post</Link>
  </nav>
);
export default Nav;
