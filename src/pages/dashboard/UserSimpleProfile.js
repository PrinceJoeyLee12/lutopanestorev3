import { paramCase, capitalCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'redux/store';
import { Container } from '@mui/material';
// routes
import { PATH } from 'routes/paths';
// hooks
import useSettings from 'hooks/useSettings';
// _mock_
import { _userList } from '_mock';
// components
import Page from 'components/Page';
import HeaderBreadcrumbs from 'components/HeaderBreadcrumbs';
// sections
import SimpleProfileForm from 'sections/@dashboard/user/simple-profile/UserSimpleProfile';

// ----------------------------------------------------------------------

export default function UserSimpleProfile() {
  const { themeStretch } = useSettings();

  const { name = '' } = useParams();

  // const currentUser = _userList.find((user) => paramCase(user.name) === name);

  const currentUser = useSelector((state) => state.user.data);

  return (
    <Page title="User: Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={'Profile'}
          links={[{ name: 'User', href: PATH.user.list }, { name: capitalCase(name) }]}
        />

        <SimpleProfileForm currentUser={currentUser} />
      </Container>
    </Page>
  );
}
