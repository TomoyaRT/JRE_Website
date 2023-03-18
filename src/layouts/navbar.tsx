import Link from 'next/link'

function Navbar() {
  const routes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
    },
  ]

  return (
    <nav>
      <ul className="flex justify-end items-center">
        {routes.map((route) => {
          return (
            <li key={route.name} className="flex justify-center items-center">
              <Link
                className="border px-5 py-3 mr-4 hover:bg-sky-300"
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
