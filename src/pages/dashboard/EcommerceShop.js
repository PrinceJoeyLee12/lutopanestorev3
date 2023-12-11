import { useEffect, useState, useCallback } from 'react';
import { sentenceCase } from 'change-case';
import { useForm } from 'react-hook-form';
// @mui
import { Container, Typography, Stack } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { filterProducts } from '../../redux/slices/product/product';
import { getProducts, getStoreCategories, getProductsByStoreCategories } from '../../redux/slices/product/actions';
// routes
import { PATH } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { FormProvider } from '../../components/hook-form';
// sections
import {
  ShopTagFiltered,
  ShopProductList,
  ShopFilterSidebar,
  ShopProductSearch,
} from '../../sections/@dashboard/e-commerce/shop';
import CartWidget from '../../sections/@dashboard/e-commerce/CartWidget';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const { themeStretch } = useSettings();

  const dispatch = useDispatch();

  const [openFilter, setOpenFilter] = useState(false);

  const { products, sortBy, filters } = useSelector((state) => state.product);

  const filteredProducts = applyFilter(products, sortBy, filters);

  const defaultValues = {
    categories: filters.categories,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, setValue } = methods;

  const values = watch();
  const watchCategories = watch('categories');

  const isFilterCategoriesByAll = values?.categories?.length === 1 && values?.categories?.[0] === 'All';

  const isDefault = isFilterCategoriesByAll;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getStoreCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterProducts(values));
  }, [dispatch, values]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = useCallback(async () => {
    if (watchCategories.length === 0) {
      setValue('categories', ['All']);
    }

    const hasAll = watchCategories.includes('All');

    if (hasAll) {
      dispatch(getProducts());
    }
    // } else {
    //   dispatch(getProductsByStoreCategories(watchCategories));
    // }
    setOpenFilter(false);
  }, [watchCategories, dispatch]);

  const handleResetFilter = () => {
    reset();
    handleCloseFilter();
  };

  // Don't put anything from here to avoid infinit render as it watch categories and update categories itself
  useEffect(() => {
    if (watchCategories.length === 0) {
      setValue('categories', ['All']);
    }

    if (watchCategories.length >= 2 && watchCategories.includes('All')) {
      if (watchCategories[watchCategories.length - 1] === 'All') {
        // if added last then set only to all values
        setValue('categories', ['All']);
      } else {
        const newValue = watchCategories.filter((item) => item !== 'All');
        setValue('categories', newValue);
      }
    }
  }, [watchCategories]);

  const handleRemoveCategory = (value) => {
    if (value !== 'All') {
      const newValue = filters.categories.filter((item) => item !== value);
      setValue('categories', newValue);
    }

    if (!filters.categories.length) {
      setValue('categories', ['All']);
    }
  };

  return (
    <Page title="LutopanEStore: Shop">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Shop"
          links={[
            {
              name: 'Products',
              href: PATH.eCommerce.root,
            },
            { name: 'Shop' },
          ]}
        />

        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <ShopProductSearch />

          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <FormProvider methods={methods}>
              <ShopFilterSidebar
                onResetAll={handleResetFilter}
                isOpen={openFilter}
                onOpen={handleOpenFilter}
                onClose={handleCloseFilter}
                isFilterCategoriesByAll={isFilterCategoriesByAll}
              />
            </FormProvider>

            {/* <ShopProductSort /> */}
          </Stack>
        </Stack>

        <Stack sx={{ mb: 3 }}>
          {!isDefault && (
            <>
              <Typography variant="body2" gutterBottom>
                <strong>{filteredProducts.length}</strong>
                &nbsp;Products found
              </Typography>

              <ShopTagFiltered
                filters={filters}
                isShowReset={!isDefault && !openFilter}
                onRemoveCategory={handleRemoveCategory}
                onResetAll={handleResetFilter}
              />
            </>
          )}
        </Stack>

        <ShopProductList products={filteredProducts} loading={!products.length && isDefault} />
        <CartWidget />
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applyFilter(products, sortBy, filters) {
  // FILTER PRODUCTS
  if (!filters.categories.includes('All')) {
    products = products.filter((product) => filters.categories.includes(sentenceCase(product.category)));
  }
  return products;
}
