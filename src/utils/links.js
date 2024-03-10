import { CONTACTS_URL, SALES_URL } from "./urls";

const LINKS = [
  {
    text: 'Contactos',
    href: CONTACTS_URL,
    hasSubLinks: true,
    mainLinks: [
      {
        text: 'Principales',
        href: CONTACTS_URL,
      },
      {
        text: 'Notificaciones',
        href: CONTACTS_URL,
      },
      {
        text: 'Nuevos',
        href: CONTACTS_URL,
      },
    ],
  },
  {
    text: 'Ventas',
    href: SALES_URL,
    hasSubLinks: true,
    mainLinks: [
      {
        text: 'Facturas',
        href: SALES_URL,
      },
      {
        text: 'Presupuestos',
        href: SALES_URL,
      },
    ],
    secondaryLinks: [
      {
        text: 'Actividades',
        href: SALES_URL,
      },
      {
        text: 'Servicios',
        href: SALES_URL,
      },
    ]
  },
  {
    text: 'Gastos',
    href: '/gastos',
  },
  {
    text: 'Equipo',
    href: '/equipo',
  },
  {
    text: 'Inventario',
    href: '/inventario',
  },
  {
    text: 'Proyectos',
    href: '/proyectos',
  },
  {
    text: 'Bancos',
    href: '/bancos',
  },
  {
    text: 'Contabilidad',
    href: '/contabilidad',
  },
  {
    text: 'Analítica',
    href: '/analitica',
    hasSubLinks: true,
    mainLinks: [
      {
        text: 'Ventas',
        href: '/analitica#ventas',
      },
      {
        text: 'Gastos',
        href: '/analitica#gastos',
      },
      {
        text: 'Clientes',
        href: '/analitica#clientes',
      },
    ],
  },
]

export default LINKS