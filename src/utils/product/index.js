import { InventoryType, PublishType, defaultPriceForFreeShipping, defaultShippingFee } from 'constants/index';
import { sentenceCase } from 'change-case';

export const formattedProduct = (product) => {
  let totalQuantity = 0;
  let inventoryType = 'out of stock';
  const productVariantsPricesArr = [];
  const productVariantsSalesPricesArr = [];
  const variantsOptions = [];
  let optionOne = [];
  let optionTwo = [];
  let optionThree = [];

  if (!product.id) {
    return product;
  }

  const {
    name,
    images: productImages,
    mainImage,
    variants: variantsList,
    option1_name,
    option2_name,
    option3_name,
  } = product;

  const images = productImages?.items?.map((image) => image?.urlImage || '')?.filter((item) => item);

  const variants = variantsList?.items;

  variants?.forEach((variant) => {
    const { option1_value = '', option2_value = '', option3_value = '' } = variant;
    if (variant?.price) {
      productVariantsPricesArr.push({ id: variant?.id, price: variant?.price, salePrice: variant?.salePrice || 0 });
    }
    if (variant?.salePrice) {
      productVariantsSalesPricesArr.push({ id: variant?.id, price: variant?.price, salePrice: variant?.salePrice });
    }
    if (variant?.inventory) {
      totalQuantity += variant?.inventory || 0;
    }

    // For Options
    if (option1_name && option1_value) {
      optionOne.push(option1_value);
    }

    if (option2_name && option2_value) {
      optionTwo.push(option2_value);
    }

    if (option3_name && option3_value) {
      optionThree.push(option3_value);
    }

    // Variants Options
    variantsOptions.push({
      variantId: variant?.id,
      optionValues: [option1_value, option2_value, option3_value],
    });
  });

  // Filter redunduncy of option
  optionOne = [...new Set(optionOne?.filter((item) => item))];
  optionTwo = [...new Set(optionTwo?.filter((item) => item))];
  optionThree = [...new Set(optionThree?.filter((item) => item))];

  if (totalQuantity <= 0) {
    inventoryType = InventoryType.OUT_OF_STOCK;
  } else {
    inventoryType = InventoryType.IN_STOCK;
  }

  const lowestSalesPrice = productVariantsSalesPricesArr?.sort(
    (a, b) => parseFloat(b?.salePrice) - parseFloat(a?.salePrice)
  )?.[productVariantsSalesPricesArr?.length - 1];

  // Price to Display
  const priceToDisplay = () => {
    // 1. If there's a sales price display the highest price
    if (lowestSalesPrice) {
      return lowestSalesPrice?.price;
    }

    // Return lowest price to display
    return productVariantsPricesArr?.sort((a, b) => parseFloat(b?.price) - parseFloat(a?.price))?.[
      productVariantsPricesArr?.length - 1
    ]?.price;
  };

  const options = {
    optionOne: {
      label: option1_name || '',
      list: optionOne,
    },
    optionTwo: {
      label: option2_name || '',
      list: optionTwo,
    },
    optionThree: {
      label: option3_name || '',
      list: optionThree,
    },
  };

  return {
    id: product?.id || '',
    publish: product?.publish || PublishType.DRAFT,
    category: product?.store?.category?.name,
    available: totalQuantity,
    salePrice: lowestSalesPrice?.salePrice || '',
    option1_name,
    option2_name,
    option3_name,
    taxes: [],
    quantity: totalQuantity,
    status: Boolean(lowestSalesPrice?.salePrice) ? 'sale' : '',
    inventoryType,
    images,
    ratings: [],
    reviews: [],
    // tags: ['Technology', 'Marketing', 'Design', 'Photography', 'Art'],
    code: product?.slug,
    description: `${product?.description || ''}`,
    sku: '',
    createdAt: product?.createdAt,
    saleLabel: {
      enabled: Boolean(lowestSalesPrice?.salePrice),
      content: Boolean(lowestSalesPrice?.salePrice) ? 'SALE' : '',
    },
    name,
    options,
    price: priceToDisplay(),
    variants: variantsList,
    variantsOptions,
    cover: mainImage?.urlImage || '',
    totalRatings: 0, // TODO
    totalSold: 0, //
    totalReviews: 0, // TODO
    subDescription:
      'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.',
  };
};

export const formatCategories = (categories) => {
  return categories.map((category) => ({
    label: sentenceCase(category?.name || ''),
    value: sentenceCase(category?.name || ''),
  }));
};

export const createProductOptions = (product, variant) => {
  const { option1_name, option2_name, option3_name } = product;
  const { option1_value, option2_value, option3_value } = variant;
  return [
    {
      label: option1_name,
      value: option1_value,
    },
    {
      label: option2_name,
      value: option2_value,
    },
    {
      label: option3_name,
      value: option3_value,
    },
  ];
};

export const cartHasChangesFunction = (localCart, userCart = { cartId: '', lineItems: [] }) => {
  const userCartLineItems = userCart.lineItems;
  const itemsLengthsNotEqual =
    (localCart?.length || userCartLineItems?.length) && userCartLineItems?.length !== localCart?.length;

  if (itemsLengthsNotEqual) {
    return true;
  }

  const localCartCheck = localCart?.some((item) => {
    const userCartItem = userCartLineItems?.find((lineItem) => lineItem?.variantId === item?.id);
    if (!userCartItem) {
      return true;
    }
    const quantity = userCartItem?.quantity;
    if (quantity !== item?.quantity) {
      return true;
    }

    return false;
  });

  if (localCartCheck) {
    return true;
  }

  const userCartCheck = userCartLineItems?.some((item) => {
    const localCartItem = localCart?.find((cartItem) => cartItem?.id === item?.variantId);
    if (!localCartItem) {
      return true;
    }
    const quantity = localCartItem?.quantity;
    if (quantity !== item?.quantity) {
      return true;
    }

    return false;
  });

  return userCartCheck;
};

export const cartDifferencesAnalyzer = (localCart, userCart, cartId) => {
  const toDeleteItems = [];
  const toCreateItems = [];

  const userCartLineItems = userCart?.lineItems;

  // Checking local
  localCart?.forEach((item) => {
    const userCartItem = userCartLineItems?.find((lineItem) => lineItem?.variantId === item?.id);

    // Add
    // 1. There's Changes in Quantity
    // 2. Not yet in Cart
    const quantityHasChange = userCartItem && userCartItem?.quantity !== item?.quantity;

    if (!userCartItem || quantityHasChange) {
      toCreateItems?.push({
        variantId: item?.id,
        cartId,
        quantity: item?.quantity || 1,
      });
    }

    if (userCartItem && quantityHasChange) {
      toDeleteItems.push(userCartItem?.cartItemId);
    }
  });

  // Checking user cart
  userCartLineItems?.forEach((cartItem, ind, arr) => {
    const localCartItem = localCart?.find((item) => item?.id === cartItem?.variantId);

    // If this Cant be found in local cart this means that user removes it
    if (!localCartItem) {
      toDeleteItems.push(cartItem?.cartItemId);
    }
  });

  // Finding duplicates
  const toFindDuplicates = (array) =>
    array.filter(
      (item, index) => array?.findIndex((cartLineItem) => cartLineItem?.variantId === item?.variantId) !== index
    );
  const duplicates = toFindDuplicates(userCartLineItems);

  if (duplicates?.length) {
    duplicates?.forEach((dupItem, index) => {
      const itemVariantDuplicate = dupItem?.variantId;
      const allItems = userCartLineItems?.filter((userCartItem) => userCartItem?.variantId === itemVariantDuplicate);

      // Remove all duplicates
      allItems?.forEach((item) => {
        if (!toDeleteItems?.some((someItem) => item?.cartItemId && someItem === item?.cartItemId)) {
          toDeleteItems.push(item?.cartItemId);
        }
      });

      // Add the local
      const isAlreadyAdded = toCreateItems?.some((item) => item?.variantId === itemVariantDuplicate);

      if (!isAlreadyAdded) {
        const localFindItem = localCart?.filter((item) => item?.id === itemVariantDuplicate);
        if (localFindItem) {
          toCreateItems?.push({
            variantId: localFindItem?.id,
            cartId,
            quantity: localFindItem?.quantity || 1,
          });
        }
      }
    });
  }

  return {
    toDeleteItems,
    toCreateItems: toCreateItems?.filter((item) => item?.variantId && item?.cartId && item?.quantity),
  };
};

export const formattedCreateCartItemsInput = (items) => {
  return items
    ?.filter((item) => item?.id && item?.quantity && item?.cartId)
    ?.map((item) => {
      return {
        cartId: item?.cartId,
        quantity: item?.quantity,
        variantId: item?.id,
      };
    });
};

export const cartQuantityChecker = (cart) => {
  const lineItems = cart?.lineItems?.items || [];

  const requestQuantityIsInAvailability = !lineItems?.some((item) => {
    const inventory = item?.variant?.inventory || 0;
    const requestedQuantity = item?.quantity || 0;

    // Means requested Quantity is greater than the availability
    const hasGreaterQuantity = inventory && requestedQuantity && inventory < requestedQuantity;

    if (hasGreaterQuantity) {
      return true;
    }
    return false;
  });

  return {
    requestQuantityIsInAvailability,
  };
};

export const calculateCart = (cart) => {
  const subtotal = cart?.reduce(
    (total, item) => (item?.price > 0 && item?.quantity > 0 ? total + item.price * item?.quantity : total),
    0
  );
  let shipping = 0;

  if (subtotal > 0) {
    shipping = subtotal > defaultPriceForFreeShipping ? 0 : defaultShippingFee;
  }

  const total = subtotal > 0 ? subtotal + shipping : 0;

  return {
    shipping,
    subtotal,
    total,
  };
};
