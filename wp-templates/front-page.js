import Link from 'next/link';
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
              <p>Hello, I'm Erika. I'm a software engineer and DevOps practicioner.</p>
          </div>
          <div className='links'>
              <ul>
                  <li><Link href="https://evm-resumes.s3.amazonaws.com/E_Miguel_Resume_10292023.pdf">Resume</Link></li>
                  <li><Link href="https://github.com/evmiguel">Github</Link></li>
                  <li><Link href="https://www.linkedin.com/in/evmiguel/">LinkedIn</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
              </ul>
          </div>
          <footer>
            Thanks for stopping by!
          </footer>
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
