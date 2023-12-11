// @mui
import { Skeleton, TableCell, TableRow, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonCartItems() {
  return (
    <>
      {[...Array(3)].map(() => (
        <TableRow>
          <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
            <Skeleton variant="rounded" width={60} height={60} />
            <Stack spacing={0.5}>
              <Skeleton variant="text" sx={{ fontSize: '1rem', m: 1 }} width={50} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50} />
            </Stack>
          </TableCell>

          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          </TableCell>

          <TableCell>
            <Skeleton variant="rounded" width={60} height={40} />
          </TableCell>

          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={10} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
