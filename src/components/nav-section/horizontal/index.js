import PropTypes from 'prop-types';
import { memo } from 'react';
import { Stack } from '@mui/material';
import { pascalCase } from 'change-case';
import { useSelector } from 'redux/store';
import { NavListRoot } from './NavList';

// ----------------------------------------------------------------------

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

NavSectionHorizontal.propTypes = {
  navConfig: PropTypes.func,
};

function NavSectionHorizontal({ navConfig }) {
  const { firstName = 'first-name', lastName = 'last-name' } = useSelector((state) => state.user.data);

  const name = pascalCase(`${firstName}-${lastName}`);

  return (
    <Stack direction="row" justifyContent="center" sx={{ bgcolor: 'background.neutral', borderRadius: 1, px: 0.5 }}>
      <Stack direction="row" sx={{ ...hideScrollbar, py: 1 }}>
        {navConfig({ name }).map((group) => (
          <Stack key={group.subheader} direction="row" flexShrink={0}>
            {group.items.map((list) => (
              <NavListRoot key={list.title + list.path} list={list} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default memo(NavSectionHorizontal);
