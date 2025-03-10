import Link from 'next/link';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  NavigationMenu,
  SEO,
} from '../components';

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <main>
        <div className='grid md:grid-cols-2 h-screen min-h-full'>
          <div className='md:col-span-1 w-full mx-auto flex text-center flex-col justify-center items-center text-[2.5rem] text-white bg-slate-900'>
              <div className='top-[3rem] w-2/4 h-2/4 relative mb-[4rem] top-[-7rem]'>
                <Image className='clip-circle' src='/headshot.jpg' layout='fill' objectFit='contain' alt="Picture of Erika" />
              </div>
              <p className='top-0 p-10'>Hello, I'm Erika. I am a DevOps and Software Engineer with experience in the JavaScript stack, Python, and AWS.</p>
          </div>
          <div className='md:col-span-1 my-auto'>
              <ul className='self-center flex text-center justify-center flex-col'>
                  <li className="p-[1.5rem]"><Link href="https://evm-resumes.s3.amazonaws.com/Erika_Miguel_Resume_Master.pdf"><a className='text-gray-800 hover:text-black active:text-black hover:font-bold text-[2rem]'>Resume</a></Link></li>
                  <li className="p-[1.5rem]"><Link href="https://github.com/evmiguel"><a className='text-gray-800 hover:text-black active:text-black hover:font-bold text-[2rem]'>Github</a></Link></li>
                  <li className="p-[1.5rem]"><Link href="https://www.linkedin.com/in/evmiguel/"><a className='text-gray-800 hover:text-black active:text-black hover:font-bold text-[2rem]'>LinkedIn</a></Link></li>
                  <li className="p-[1.5rem]"><Link href="/blog"><a className='text-gray-800 hover:text-black active:text-black hover:font-bold text-[2rem]'>Blog</a></Link></li>
              </ul>
          </div>
        </div>
      </main>
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
