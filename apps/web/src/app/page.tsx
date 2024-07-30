'use client';

import Link from 'next/link';
import {
  Award01Icon,
  CoinsStacked03Icon,
  CurrencyDollarCircleIcon,
  Diamond01Icon,
  GraduationHat01Icon,
  Lightbulb02Icon,
  UserRight01Icon,
  Users01Icon,
  UsersPlusIcon,
  UserUp02Icon,
} from '@var-meta/icons';
import {
  Autocomplete,
  Button,
  CalendarIcon,
  HStack,
  Layout,
  Modal,
  Select,
  Sidebar,
  Text,
  toast,
  type AutocompleteProps,
} from '@var-meta/ui';

const options: AutocompleteProps['options'] = [
  {
    value: 'Phoenix Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=1" />
        <div className="text-foreground text-md font-medium">Phoenix Baker</div>
        <div className="text-md text-gray-600">@phoenix</div>
      </div>
    ),
  },
  {
    value: 'Henry',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=2" />
        <div className="text-foreground text-md font-medium">Henry</div>
        <div className="text-md text-gray-600">@Henry</div>
      </div>
    ),
  },
  {
    value: 'Kevin Baker',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=3" />
        <div className="text-foreground text-md font-medium">Kevin Baker</div>
        <div className="text-md text-gray-600">@Kevin</div>
      </div>
    ),
  },
  {
    value: 'Josh William',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=4" />
        <div className="text-foreground text-md font-medium">Josh William</div>
        <div className="text-md text-gray-600">@William</div>
      </div>
    ),
  },

  {
    value: 'Jenifer Chang',
    label: (
      <div className="flex gap-2">
        <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/500?img=5" />
        <div className="text-foreground text-md font-medium">Jenifer Chang</div>
        <div className="text-md text-gray-600">@Jenifer</div>
      </div>
    ),
  },
];

const Logo = () => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <rect width={40} height={40} rx={20} fill="#312DCA" />
      <path
        d="m22.139 25.065-2.277-3.956a.31.31 0 0 0-.536 0l-2.284 3.956a.31.31 0 0 0 .268.464h4.564a.31.31 0 0 0 .265-.464"
        fill="#fff"
      />
      <path
        d="m21.89 15.007.004-.007h-.658c-.11 0-.214.06-.268.153l-1.037 1.797a.31.31 0 0 1-.536 0l-1.033-1.796a.3.3 0 0 0-.268-.154l-11.784.007a.31.31 0 0 0-.268.464l5.715 9.915a.3.3 0 0 0 .268.154h3.614c.11 0 .214-.06.268-.154l3.488-6.048a.309.309 0 0 1 .537 0l3.488 6.048a.3.3 0 0 0 .268.154h3.614c.11 0 .214-.06.268-.154l5.722-9.922a.31.31 0 0 0-.268-.464z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter id="a" x={0} y={-4} width={40} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={-4} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
        <feBlend in2="shape" result="effect1_innerShadow_31_6926" />
      </filter>
    </defs>
  </svg>
);

const links = [
  {
    title: 'GENERAL',
    routes: [
      {
        icon: <Users01Icon className="h-5 w-5" />,
        label: 'Staff List',
        value: 'Staff List',
        href: '/',
      },
      {
        icon: <UserRight01Icon className="h-5 w-5" />,
        label: 'Request',
        value: 'Request',
        dropdowns: [
          {
            label: 'Work from home',
            value: 'Work from home',
            href: '/',
          },
          {
            label: 'Day off',
            value: 'Day off',
            href: '/',
          },
          {
            label: 'CI/CO',
            value: 'CI/CO',
            href: '/',
          },
          {
            label: 'Overtime',
            value: 'Overtime',
            href: '/',
          },
        ],
      },
      {
        icon: <Award01Icon className="h-5 w-5" />,
        label: 'Ranking Chart',
        value: 'Ranking Chart',
        href: '/',
      },
    ],
  },

  {
    title: 'SALARY',
    routes: [
      {
        icon: <CalendarIcon className="h-5 w-5" />,
        label: 'Time Keeping',
        value: 'Time Keeping',
        href: '/',
      },
      {
        icon: <CurrencyDollarCircleIcon className="h-5 w-5" />,
        label: 'Payroll',
        value: 'Payroll',
        href: '/',
      },
      {
        icon: <UserUp02Icon className="h-5 w-5" />,
        label: 'Check Point',
        value: 'Check Point',
        href: '/',
      },
    ],
  },

  {
    title: 'MANAGEMENT',
    routes: [
      {
        icon: <CoinsStacked03Icon className="h-5 w-5" />,
        label: 'Resource Management',
        value: 'Resource Management',
        href: '/',
      },
      {
        icon: <Lightbulb02Icon className="h-5 w-5" />,
        label: 'Initiative Management',
        value: 'Initiative Management',
        href: '/',
      },
      {
        icon: <Diamond01Icon className="h-5 w-5" />,
        label: 'Asset Management',
        value: 'Asset Management',
        href: '/',
      },
      {
        icon: <UsersPlusIcon className="h-5 w-5" />,
        label: 'Recruitment Management',
        value: 'Recruitment Management',
        dropdowns: [
          {
            label: 'Work from home',
            value: 'Work from home',
            href: '/',
          },
          {
            label: 'Day off',
            value: 'Day off',
            href: '/',
          },
          {
            label: 'CI/CO',
            value: 'CI/CO',
            href: '/',
          },
          {
            label: 'Overtime',
            value: 'Overtime',
            href: '/',
          },
        ],
      },
      {
        icon: <GraduationHat01Icon className="h-5 w-5" />,
        label: 'Skills Management',
        value: 'Skills Management',
        href: '/',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-background border-border relative min-h-[80vh] border">
        <Layout>
          <Sidebar.Overlay />
          <Sidebar>
            <Sidebar.Head>
              <Sidebar.Head.Toggle />

              <Sidebar.Head.Logo>
                <Logo />
              </Sidebar.Head.Logo>
              <Sidebar.Head.Title>Excellent in Every Block</Sidebar.Head.Title>
            </Sidebar.Head>

            <Sidebar.Body>
              {links.map((link) => (
                <Sidebar.Body.Section key={link.title}>
                  <Sidebar.Body.Title>{link.title}</Sidebar.Body.Title>
                  <Sidebar.Body.List>
                    {link.routes.map((item) => {
                      if (item?.dropdowns) {
                        return (
                          <Sidebar.Body.List.Dropdown key={item.label} icon={item.icon} label={item.label}>
                            {item.dropdowns.map((child) => (
                              <Link passHref legacyBehavior href={child.href} key={child.value}>
                                <Sidebar.Body.List.Item value={child.value} key={child.value} label={child.label} />
                              </Link>
                            ))}
                          </Sidebar.Body.List.Dropdown>
                        );
                      }

                      return (
                        <Link passHref legacyBehavior href={item.href} key={item.value}>
                          <Sidebar.Body.List.Item
                            value={item.value}
                            key={item.value}
                            icon={item.icon}
                            label={item.label}
                          />
                        </Link>
                      );
                    })}
                  </Sidebar.Body.List>
                </Sidebar.Body.Section>
              ))}
            </Sidebar.Body>

            <Sidebar.Footer>Footer</Sidebar.Footer>
          </Sidebar>

          <Layout.Content>
            <HStack className="w-full p-4" pos="apart">
              <p>Content</p>

              <Layout.BurgerMenu />
            </HStack>

            <div className="gap-2xl container flex min-h-screen flex-col items-center justify-center">
              <Text weight="bold">VAR UI</Text>

              <HStack
                className="w-full"
                pos={{
                  initial: 'center',
                  lg: 'apart',
                  sm: 'around',
                }}
              >
                <Button onClick={() => toast.success('Good UI')}>Show toast</Button>
                <Button onClick={() => toast.success('Good UI')}>Show toast</Button>
              </HStack>
              <div className="flex gap-4">
                <Modal trigger={<Button>Show Modal</Button>}>
                  <Modal.Header
                    title="Blog post published"
                    description="This blog post has been published. Team members will be able to edit this post and republish changes."
                  />

                  <Modal.Body>
                    <Autocomplete placeholder="Placeholder" options={options} />
                    <Select
                      fullWidth
                      placeholder="Placeholder"
                      options={Array.from({ length: 100 }, (_, i) => ({ value: `${i}`, label: `Option ${i}` }))}
                    />
                  </Modal.Body>
                  <Modal.Action>
                    <Button onClick={() => toast.error('discard')} variant="outline" color="gray" fullWidth>
                      Discard
                    </Button>
                    <Button onClick={() => toast.error('error')} fullWidth>
                      Save changes
                    </Button>
                  </Modal.Action>
                </Modal>
              </div>
            </div>
          </Layout.Content>
        </Layout>
      </div>
    </>
  );
}
