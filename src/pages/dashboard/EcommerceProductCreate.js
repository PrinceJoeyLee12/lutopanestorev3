import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getProducts } from '../../redux/slices/product/product';
// routes
import { PATH } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import ProductNewEditForm from '../../sections/@dashboard/e-commerce/ProductNewEditForm';

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { products } = useSelector((state) => state.product);
  const isEdit = pathname.includes('edit');
  const currentProduct = products.find((product) => paramCase(product.name) === name);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Page title="Ecommerce: Create a new product">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new product' : 'Edit product'}
          links={[
            { name: 'Dashboard', href: PATH.root },
            {
              name: 'Products',
              href: PATH.eCommerce.root,
            },
            { name: !isEdit ? 'New product' : name },
          ]}
        />

        <ProductNewEditForm isEdit={isEdit} currentProduct={currentProduct} />
      </Container>
    </Page>
  );
}
