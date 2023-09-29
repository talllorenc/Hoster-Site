"use client"

import Image from "next/image"
const navigation = {
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/hoster.kz',
      icon: (props) => (
        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} {...props} />
      ),
    },
    {
      name: 'Siter',
      href: 'https://siter.kz/',
      icon: (props) => (
        <Image src="/main-logo.svg" alt="Siter" width={24} height={24} {...props} />
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/talllorenc',
      icon: (props) => (
        <Image src="/github.svg" alt="GitHub" width={24} height={24} {...props} />
      ),
    },
  ],
}

const links = [
  {
    id: 1,
    title: "О нас",
    url: "/about",
  },
  {
    id: 2,
    title: "Решения",
    url: "/solutions",
  },
  {
    id: 3,
    title: "Разработчики",
    url: "/developers",
  },
  {
    id: 4,
    title: "Образная связь",
    url: "/feedback",
  },
];
const Footer = () => {

  return (
    <footer className="border-t border-black dark:border-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-6 px-4 sm:px-6 lg:px-8">
        <nav className="mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {links.map((item) => (
            <div key={item.id} className="px-5 py-2">
              <a href={item.url} className="text-base text-gray-400 hover:text-red-500">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 HOSTERdev, made by Alexandr Boyarchuk</p>
      </div>
    </footer>
  )
}

export default Footer