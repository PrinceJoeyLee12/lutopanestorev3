import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { capitalCase, sentenceCase } from 'change-case';
import { useForm } from 'react-hook-form';
import useIsMountedRef from 'hooks/useIsMountedRef';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack, Button, Rating, Divider, IconButton, Typography, Chip } from '@mui/material';
// routes
import { PATH } from '../../../../routes/paths';
// utils
import { fShortenNumber, fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import SocialsButton from '../../../../components/SocialsButton';
import { FormProvider } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up(1368)]: {
    padding: theme.spacing(5, 8),
  },
}));

// ----------------------------------------------------------------------

ProductDetailsSummary.propTypes = {
  cart: PropTypes.array,
  onAddCart: PropTypes.func,
  onGotoStep: PropTypes.func,
  product: PropTypes.shape({
    available: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    cover: PropTypes.string,
    id: PropTypes.string,
    inventoryType: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    salePrice: PropTypes.any,
    variants: PropTypes.any,
    options: PropTypes.any,
    variantsOptions: PropTypes.any,
    status: PropTypes.string,
    totalRating: PropTypes.number,
    totalReview: PropTypes.number,
  }),
};

export default function ProductDetailsSummary({ cart, product, onAddCart, onGotoStep, ...other }) {
  const theme = useTheme();

  const navigate = useNavigate();

  const isMountedRef = useIsMountedRef();

  const {
    variants: variantsList,
    variantsOptions,
    options,
    id,
    name,
    price,
    cover,
    status,
    available: availableQuantity,
    salePrice,
    // totalRating,
    // totalReview,
    inventoryType,
    option1_name = '',
    option2_name = '',
    option3_name = '',
    code,
  } = product;

  const initialValuesForSelectedOption = {
    optionOne: '',
    optionTwo: '',
    optionThree: '',
  };

  const [selectedVariant, setSelectedVariant] = useState({});
  const [optionSelected, setOptionSelected] = useState(initialValuesForSelectedOption);
  const [available, setAvailableQuantity] = useState(availableQuantity);
  const [salePriceDisplay, setSalePriceDisplay] = useState(salePrice);
  const [priceDisplay, setPriceDisplay] = useState(price);

  const variants = variantsList?.items || [];
  const hasOneVariant = variants?.length === 1;

  const hasSelectedOption = optionSelected?.optionOne || optionSelected?.optionTwo || optionSelected?.optionThree;

  const productInCart = cart.find((item) => item.id === selectedVariant?.id);

  const isMaxQuantity = (productInCart?.quantity || 0) >= available;

  const enableAddToCartButton = isMaxQuantity || !selectedVariant?.id || available <= 0;

  const availableToAdd = available - (productInCart?.quantity || 0);

  const selectOptionHandler = useCallback((value) => {
    setOptionSelected((prev) => ({
      ...prev,
      ...value,
    }));
  }, []);

  const handleResetSelection = useCallback(
    (value) => {
      setOptionSelected(initialValuesForSelectedOption);
    },
    [initialValuesForSelectedOption]
  );

  // Preselect if there's only one variant
  useEffect(() => {
    if (variants?.length === 1) {
      const preSelectedVariant = variants?.[0];
      setOptionSelected({
        ...(option1_name && { optionOne: preSelectedVariant?.option1_value }),
        ...(option2_name && { optionTwo: preSelectedVariant?.option2_value }),
        ...(option3_name && { optionThree: preSelectedVariant?.option3_value }),
      });
    }
  }, [variants, option1_name, option2_name, option3_name]);

  // Get variant from selected option
  useEffect(() => {
    const selected = variants?.find(
      (variant) =>
        (option1_name ? variant?.option1_value === optionSelected?.optionOne : true) &&
        (option2_name ? variant?.option2_value === optionSelected?.optionTwo : true) &&
        (option3_name ? variant?.option3_value === optionSelected?.optionThree : true)
    );
    setSelectedVariant(selected || {});
    if (selected?.id) {
      setValue('variant', selected);
      setValue('id', selected?.id);
      setAvailableQuantity(selected?.inventory);
      setSalePriceDisplay(selected?.salePrice);
      setPriceDisplay(selected?.price);
    } else {
      setValue('variant', null);
      setValue('id', '');
      setAvailableQuantity(availableQuantity);
      setSalePriceDisplay(salePrice);
      setPriceDisplay(price);
    }
  }, [optionSelected, variants, available, price, salePrice, option1_name, option2_name, option3_name]);

  const defaultValues = {
    id,
    name,
    cover,
    available,
    price: priceDisplay,
    quantity: available < 1 ? 0 : 1,
    variant: null,
    option1_name,
    option2_name,
    option3_name,
    code,
  };

  const methods = useForm({
    defaultValues,
  });

  const { watch, setValue, handleSubmit, reset } = methods;

  const values = watch();

  useEffect(() => {
    if (isMountedRef.current) {
      reset();
    }
  }, [isMountedRef]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        if (!isMaxQuantity) {
          onAddCart(data);
          setValue('quantity', 1);
        }
        onGotoStep(0);
        navigate(PATH.eCommerce.checkout);
      } catch (error) {
        console.error(error);
      }
    },
    [isMaxQuantity]
  );

  const handleAddCart = useCallback(async () => {
    try {
      onAddCart(values);
      setValue('quantity', 1);
    } catch (error) {
      console.error(error);
    }
  }, [values]);

  return (
    <RootStyle {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" justifyContent="start" sx={{ mb: 3 }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={inventoryType === 'in_stock' ? 'success' : 'error'}
            sx={{ textTransform: 'uppercase' }}
          >
            {sentenceCase(inventoryType || '')}
          </Label>

          <Typography
            variant="overline"
            sx={{
              mt: 0.2,
              ml: 1,
              display: 'block',
              color: status === 'sale' ? 'error.main' : 'info.main',
            }}
          >
            {status}
          </Typography>
        </Stack>
        <Typography variant="h5" paragraph>
          {name}
        </Typography>

        {/* <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Rating value={totalRating} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReview)}
            reviews)
          </Typography>
        </Stack> */}

        <Typography variant="h4" sx={{ mb: 3 }}>
          {salePriceDisplay ? (
            <>
              <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                {fCurrency(salePriceDisplay)}
              </Box>
              &nbsp;&nbsp;{fCurrency(priceDisplay)}
            </>
          ) : (
            <>{fCurrency(priceDisplay)}</>
          )}
          {available <= 0 && (
            <Typography
              variant="overline"
              sx={{
                color: status === 'sale' ? 'error.main' : 'info.main',
              }}
            >
              (OUT OF STOCK)
            </Typography>
          )}
        </Typography>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <OptionRenderer
          options={options}
          selectOptionHandler={selectOptionHandler}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
          handleResetSelection={handleResetSelection}
          variantsOptions={variantsOptions}
          hasSelectedOption={hasSelectedOption}
          hasOneVariant={hasOneVariant}
        />
        {productInCart?.quantity && isMaxQuantity && (
          <Typography variant="caption" component="div" color="error" sx={{ mt: 1, textAlign: 'right' }}>
            Maximum quantity added to cart!
          </Typography>
        )}
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
            Quantity
          </Typography>

          <div>
            <Incrementer
              name="quantity"
              quantity={values.quantity}
              available={availableToAdd}
              onIncrementQuantity={() => setValue('quantity', values.quantity + 1)}
              onDecrementQuantity={() => setValue('quantity', values.quantity - 1)}
              disabled={!selectedVariant?.id || isMaxQuantity}
            />
            <Typography variant="caption" component="div" sx={{ mt: 1, textAlign: 'right', color: 'text.secondary' }}>
              Available: {availableToAdd}
            </Typography>
          </div>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
          <Button
            fullWidth
            disabled={enableAddToCartButton}
            size="large"
            color="warning"
            variant="contained"
            startIcon={<Iconify icon={'ic:round-add-shopping-cart'} />}
            onClick={handleAddCart}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Add to Cart
          </Button>

          <Button fullWidth size="large" type="submit" variant="contained" disabled={enableAddToCartButton}>
            Buy Now
          </Button>
        </Stack>

        {/* <Stack alignItems="center" sx={{ mt: 3 }}>
          <SocialsButton initialColor />
        </Stack> */}
      </FormProvider>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

Incrementer.propTypes = {
  available: PropTypes.number,
  quantity: PropTypes.number,
  onIncrementQuantity: PropTypes.func,
  onDecrementQuantity: PropTypes.func,
  disabled: PropTypes.bool,
};

function Incrementer({ available, quantity, onIncrementQuantity, onDecrementQuantity, disabled }) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      <IconButton size="small" color="inherit" disabled={quantity <= 1 || disabled} onClick={onDecrementQuantity}>
        <Iconify icon={'eva:minus-fill'} width={14} height={14} />
      </IconButton>

      <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
        {quantity}
      </Typography>

      <IconButton
        size="small"
        color="inherit"
        disabled={quantity >= available || disabled}
        onClick={onIncrementQuantity}
      >
        <Iconify icon={'eva:plus-fill'} width={14} height={14} />
      </IconButton>
    </Box>
  );
}

function OptionRenderer({
  options,
  selectOptionHandler,
  optionSelected,
  handleResetSelection,
  variantsOptions,
  hasSelectedOption,
  hasOneVariant,
}) {
  const { optionOne = {}, optionTwo = {}, optionThree = {} } = options;

  const itemsToEnable = variantsOptions?.filter((variantOptions) => {
    const values = variantOptions?.optionValues || [];
    return (
      (optionSelected?.optionOne ? values?.includes(optionSelected?.optionOne) : true) &&
      (optionSelected?.optionTwo ? values?.includes(optionSelected?.optionTwo) : true) &&
      (optionSelected?.optionThree ? values?.includes(optionSelected?.optionThree) : true)
    );
  });

  const itemValues = [
    ...new Set(
      itemsToEnable?.reduce((acc, item) => {
        if (item?.optionValues?.length) {
          acc.push(...item?.optionValues);
        }
        return acc;
      }, [])
    ),
  ];

  const optionComponent = (optionToRender, optionToSave) => {
    return (
      <>
        {optionToRender?.label && optionToRender?.list?.length && (
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              {capitalCase(optionToRender?.label || '')}
            </Typography>
            <div>
              {optionToRender?.list?.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  disabled={!itemValues?.includes(option)}
                  size="medium"
                  onClick={() =>
                    selectOptionHandler({
                      [optionToSave]: option,
                    })
                  }
                  sx={{ m: 0.5 }}
                  variant={optionSelected?.[optionToSave] === option ? 'filled' : 'outlined'}
                  color={optionSelected?.[optionToSave] === option ? 'primary' : 'default'}
                />
              ))}
            </div>
          </Stack>
        )}
      </>
    );
  };
  return (
    <>
      {optionComponent(optionOne, 'optionOne')}
      {optionTwo?.label && optionComponent(optionTwo, 'optionTwo')}
      {optionThree?.label && optionComponent(optionThree, 'optionThree')}
      {hasSelectedOption && !hasOneVariant && (
        <Stack direction="row" justifyContent="end" sx={{ mb: 3 }}>
          <Chip
            label={'Reset Selection'}
            icon={<Iconify icon={'bx:reset'} width={14} height={14} />}
            size="medium"
            onClick={handleResetSelection}
            sx={{ m: 0.5 }}
            variant={'outlined'}
            color={'error'}
          />
        </Stack>
      )}
    </>
  );
}
