// @mui
import { Container } from '@mui/material';
// routes
import { PATH } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { BlogNewPostForm } from '../../sections/@dashboard/blog';

// ----------------------------------------------------------------------

export default function BlogNewPost() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Blog: New Post">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new post"
          links={[{ name: 'Dashboard', href: PATH.root }, { name: 'Blog', href: PATH.blog.root }, { name: 'New Post' }]}
        />

        <BlogNewPostForm />
      </Container>
    </Page>
  );
}
