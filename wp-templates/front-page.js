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
        <div className='container'>
          <div className='welcome'>
              <div className='image-container'>
                <Image className='headshot' src='/headshot.jpg' layout='fill' objectFit='contain' alt="Picture of Erika" />
              </div>
              <p>Hello, I'm Erika. I'm a software engineer, DevOps geek, and tech generalist.</p>
          </div>
          <div className='links'>
              <ul>
                  <li className="links__link"><Link href="https://evm-resumes.s3.amazonaws.com/E_Miguel_Resume_10292023.pdf"><a className='links__link-dest'>Resume</a></Link></li>
                  <li className="links__link"><Link href="https://github.com/evmiguel"><a className='links__link-dest'>Github</a></Link></li>
                  <li className="links__link"><Link href="https://www.linkedin.com/in/evmiguel/"><a className='links__link-dest'>LinkedIn</a></Link></li>
                  <li className="links__link"><Link href="/blog"><a className='links__link-dest'>Blog</a></Link></li>
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
