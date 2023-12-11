"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateVariant = exports.onUpdateUser = exports.onUpdateTag = exports.onUpdateStoreTags = exports.onUpdateStoreOrders = exports.onUpdateStoreCustomers = exports.onUpdateStoreCategory = exports.onUpdateStore = exports.onUpdateProductTags = exports.onUpdateProduct = exports.onUpdateOrderLineItem = exports.onUpdateOrder = exports.onUpdateImage = exports.onUpdateCompany = exports.onUpdateCategory = exports.onUpdateCartLineItem = exports.onUpdateCart = exports.onDeleteVariant = exports.onDeleteUser = exports.onDeleteTag = exports.onDeleteStoreTags = exports.onDeleteStoreOrders = exports.onDeleteStoreCustomers = exports.onDeleteStoreCategory = exports.onDeleteStore = exports.onDeleteProductTags = exports.onDeleteProduct = exports.onDeleteOrderLineItem = exports.onDeleteOrder = exports.onDeleteImage = exports.onDeleteCompany = exports.onDeleteCategory = exports.onDeleteCartLineItem = exports.onDeleteCart = exports.onCreateVariant = exports.onCreateUser = exports.onCreateTag = exports.onCreateStoreTags = exports.onCreateStoreOrders = exports.onCreateStoreCustomers = exports.onCreateStoreCategory = exports.onCreateStore = exports.onCreateProductTags = exports.onCreateProduct = exports.onCreateOrderLineItem = exports.onCreateOrder = exports.onCreateImage = exports.onCreateCompany = exports.onCreateCategory = exports.onCreateCartLineItem = exports.onCreateCart = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const onCreateCompany = /* GraphQL */`
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
      id
      profile {
        name
        email
        phone
        __typename
      }
      stores {
        nextToken
        __typename
      }
      products {
        nextToken
        __typename
      }
      profileImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      companyProfileImageId
      __typename
    }
  }
`;
exports.onCreateCompany = onCreateCompany;
const onUpdateCompany = /* GraphQL */`
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
      id
      profile {
        name
        email
        phone
        __typename
      }
      stores {
        nextToken
        __typename
      }
      products {
        nextToken
        __typename
      }
      profileImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      companyProfileImageId
      __typename
    }
  }
`;
exports.onUpdateCompany = onUpdateCompany;
const onDeleteCompany = /* GraphQL */`
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
      id
      profile {
        name
        email
        phone
        __typename
      }
      stores {
        nextToken
        __typename
      }
      products {
        nextToken
        __typename
      }
      profileImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      companyProfileImageId
      __typename
    }
  }
`;
exports.onDeleteCompany = onDeleteCompany;
const onCreateStore = /* GraphQL */`
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
      id
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      profile {
        name
        email
        phone
        __typename
      }
      addressCode
      type
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      categoryId
      category {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      categories {
        nextToken
        __typename
      }
      customers {
        nextToken
        __typename
      }
      tags {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateStore = onCreateStore;
const onUpdateStore = /* GraphQL */`
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
      id
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      profile {
        name
        email
        phone
        __typename
      }
      addressCode
      type
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      categoryId
      category {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      categories {
        nextToken
        __typename
      }
      customers {
        nextToken
        __typename
      }
      tags {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateStore = onUpdateStore;
const onDeleteStore = /* GraphQL */`
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
      id
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      profile {
        name
        email
        phone
        __typename
      }
      addressCode
      type
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      categoryId
      category {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      categories {
        nextToken
        __typename
      }
      customers {
        nextToken
        __typename
      }
      tags {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteStore = onDeleteStore;
const onCreateStoreCategory = /* GraphQL */`
  subscription OnCreateStoreCategory(
    $filter: ModelSubscriptionStoreCategoryFilterInput
  ) {
    onCreateStoreCategory(filter: $filter) {
      id
      name
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateStoreCategory = onCreateStoreCategory;
const onUpdateStoreCategory = /* GraphQL */`
  subscription OnUpdateStoreCategory(
    $filter: ModelSubscriptionStoreCategoryFilterInput
  ) {
    onUpdateStoreCategory(filter: $filter) {
      id
      name
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateStoreCategory = onUpdateStoreCategory;
const onDeleteStoreCategory = /* GraphQL */`
  subscription OnDeleteStoreCategory(
    $filter: ModelSubscriptionStoreCategoryFilterInput
  ) {
    onDeleteStoreCategory(filter: $filter) {
      id
      name
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteStoreCategory = onDeleteStoreCategory;
const onCreateCategory = /* GraphQL */`
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      products {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateCategory = onCreateCategory;
const onUpdateCategory = /* GraphQL */`
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      products {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateCategory = onUpdateCategory;
const onDeleteCategory = /* GraphQL */`
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      products {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteCategory = onDeleteCategory;
const onCreateTag = /* GraphQL */`
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      label
      products {
        nextToken
        __typename
      }
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateTag = onCreateTag;
const onUpdateTag = /* GraphQL */`
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      label
      products {
        nextToken
        __typename
      }
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateTag = onUpdateTag;
const onDeleteTag = /* GraphQL */`
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      label
      products {
        nextToken
        __typename
      }
      stores {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteTag = onDeleteTag;
const onCreateProduct = /* GraphQL */`
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      categoryId
      category {
        id
        name
        storeId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      publish
      images {
        nextToken
        __typename
      }
      addressCode
      mainImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      option1_name
      option2_name
      option3_name
      slug
      description
      tags {
        nextToken
        __typename
      }
      variants {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateProduct = onCreateProduct;
const onUpdateProduct = /* GraphQL */`
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      categoryId
      category {
        id
        name
        storeId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      publish
      images {
        nextToken
        __typename
      }
      addressCode
      mainImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      option1_name
      option2_name
      option3_name
      slug
      description
      tags {
        nextToken
        __typename
      }
      variants {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateProduct = onUpdateProduct;
const onDeleteProduct = /* GraphQL */`
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      storeId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      companyId
      company {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      categoryId
      category {
        id
        name
        storeId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      publish
      images {
        nextToken
        __typename
      }
      addressCode
      mainImage {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      option1_name
      option2_name
      option3_name
      slug
      description
      tags {
        nextToken
        __typename
      }
      variants {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteProduct = onDeleteProduct;
const onCreateVariant = /* GraphQL */`
  subscription OnCreateVariant($filter: ModelSubscriptionVariantFilterInput) {
    onCreateVariant(filter: $filter) {
      id
      productId
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      sku
      soldByWeight
      price
      salePrice
      inventory
      option1_value
      option2_value
      option3_value
      description
      loyverseId
      loyverse
      inCartLineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateVariant = onCreateVariant;
const onUpdateVariant = /* GraphQL */`
  subscription OnUpdateVariant($filter: ModelSubscriptionVariantFilterInput) {
    onUpdateVariant(filter: $filter) {
      id
      productId
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      sku
      soldByWeight
      price
      salePrice
      inventory
      option1_value
      option2_value
      option3_value
      description
      loyverseId
      loyverse
      inCartLineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateVariant = onUpdateVariant;
const onDeleteVariant = /* GraphQL */`
  subscription OnDeleteVariant($filter: ModelSubscriptionVariantFilterInput) {
    onDeleteVariant(filter: $filter) {
      id
      productId
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      sku
      soldByWeight
      price
      salePrice
      inventory
      option1_value
      option2_value
      option3_value
      description
      loyverseId
      loyverse
      inCartLineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteVariant = onDeleteVariant;
const onCreateUser = /* GraphQL */`
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      firstName
      lastName
      email
      userSub
      password
      number_1
      number_2
      address {
        addressLine1
        addressLine2
        country
        region
        regionCode
        state
        stateCode
        city
        cityCode
        barangay
        barangayCode
        landMark
        zipCode
        latitude
        longitude
        accuracy
        altitudeAccuracy
        speed
        heading
        __typename
      }
      billingInfo {
        id
        type
        fullName
        phone
        email
        isDefault
        __typename
      }
      loyverseId
      loyverse {
        id
        customer_code
        data
        __typename
      }
      orderedStores {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateUser = onCreateUser;
const onUpdateUser = /* GraphQL */`
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      firstName
      lastName
      email
      userSub
      password
      number_1
      number_2
      address {
        addressLine1
        addressLine2
        country
        region
        regionCode
        state
        stateCode
        city
        cityCode
        barangay
        barangayCode
        landMark
        zipCode
        latitude
        longitude
        accuracy
        altitudeAccuracy
        speed
        heading
        __typename
      }
      billingInfo {
        id
        type
        fullName
        phone
        email
        isDefault
        __typename
      }
      loyverseId
      loyverse {
        id
        customer_code
        data
        __typename
      }
      orderedStores {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateUser = onUpdateUser;
const onDeleteUser = /* GraphQL */`
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      firstName
      lastName
      email
      userSub
      password
      number_1
      number_2
      address {
        addressLine1
        addressLine2
        country
        region
        regionCode
        state
        stateCode
        city
        cityCode
        barangay
        barangayCode
        landMark
        zipCode
        latitude
        longitude
        accuracy
        altitudeAccuracy
        speed
        heading
        __typename
      }
      billingInfo {
        id
        type
        fullName
        phone
        email
        isDefault
        __typename
      }
      loyverseId
      loyverse {
        id
        customer_code
        data
        __typename
      }
      orderedStores {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteUser = onDeleteUser;
const onCreateCart = /* GraphQL */`
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
      id
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      lineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateCart = onCreateCart;
const onUpdateCart = /* GraphQL */`
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
      id
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      lineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateCart = onUpdateCart;
const onDeleteCart = /* GraphQL */`
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
      id
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      lineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteCart = onDeleteCart;
const onCreateCartLineItem = /* GraphQL */`
  subscription OnCreateCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onCreateCartLineItem(filter: $filter) {
      id
      cartId
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      variantId
      variant {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        option1_value
        option2_value
        option3_value
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      variantInCartLineItemsId
      __typename
    }
  }
`;
exports.onCreateCartLineItem = onCreateCartLineItem;
const onUpdateCartLineItem = /* GraphQL */`
  subscription OnUpdateCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onUpdateCartLineItem(filter: $filter) {
      id
      cartId
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      variantId
      variant {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        option1_value
        option2_value
        option3_value
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      variantInCartLineItemsId
      __typename
    }
  }
`;
exports.onUpdateCartLineItem = onUpdateCartLineItem;
const onDeleteCartLineItem = /* GraphQL */`
  subscription OnDeleteCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onDeleteCartLineItem(filter: $filter) {
      id
      cartId
      cart {
        id
        createdAt
        updatedAt
        __typename
      }
      variantId
      variant {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        option1_value
        option2_value
        option3_value
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      variantInCartLineItemsId
      __typename
    }
  }
`;
exports.onDeleteCartLineItem = onDeleteCartLineItem;
const onCreateOrder = /* GraphQL */`
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      customerId
      customer {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      stores {
        nextToken
        __typename
      }
      receiptNumber
      receiptType
      orderDate
      lineItems {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateOrder = onCreateOrder;
const onUpdateOrder = /* GraphQL */`
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      customerId
      customer {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      stores {
        nextToken
        __typename
      }
      receiptNumber
      receiptType
      orderDate
      lineItems {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateOrder = onUpdateOrder;
const onDeleteOrder = /* GraphQL */`
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      customerId
      customer {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      stores {
        nextToken
        __typename
      }
      receiptNumber
      receiptType
      orderDate
      lineItems {
        nextToken
        __typename
      }
      loyverseId
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteOrder = onDeleteOrder;
const onCreateOrderLineItem = /* GraphQL */`
  subscription OnCreateOrderLineItem(
    $filter: ModelSubscriptionOrderLineItemFilterInput
  ) {
    onCreateOrderLineItem(filter: $filter) {
      id
      orderId
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      productId
      variantId
      storeId
      quantity
      price
      salePrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateOrderLineItem = onCreateOrderLineItem;
const onUpdateOrderLineItem = /* GraphQL */`
  subscription OnUpdateOrderLineItem(
    $filter: ModelSubscriptionOrderLineItemFilterInput
  ) {
    onUpdateOrderLineItem(filter: $filter) {
      id
      orderId
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      productId
      variantId
      storeId
      quantity
      price
      salePrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateOrderLineItem = onUpdateOrderLineItem;
const onDeleteOrderLineItem = /* GraphQL */`
  subscription OnDeleteOrderLineItem(
    $filter: ModelSubscriptionOrderLineItemFilterInput
  ) {
    onDeleteOrderLineItem(filter: $filter) {
      id
      orderId
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      productId
      variantId
      storeId
      quantity
      price
      salePrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteOrderLineItem = onDeleteOrderLineItem;
const onCreateImage = /* GraphQL */`
  subscription OnCreateImage($filter: ModelSubscriptionImageFilterInput) {
    onCreateImage(filter: $filter) {
      id
      belongsTo
      description
      title
      urlImage
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateImage = onCreateImage;
const onUpdateImage = /* GraphQL */`
  subscription OnUpdateImage($filter: ModelSubscriptionImageFilterInput) {
    onUpdateImage(filter: $filter) {
      id
      belongsTo
      description
      title
      urlImage
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateImage = onUpdateImage;
const onDeleteImage = /* GraphQL */`
  subscription OnDeleteImage($filter: ModelSubscriptionImageFilterInput) {
    onDeleteImage(filter: $filter) {
      id
      belongsTo
      description
      title
      urlImage
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteImage = onDeleteImage;
const onCreateStoreOrders = /* GraphQL */`
  subscription OnCreateStoreOrders(
    $filter: ModelSubscriptionStoreOrdersFilterInput
  ) {
    onCreateStoreOrders(filter: $filter) {
      id
      storeId
      orderId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateStoreOrders = onCreateStoreOrders;
const onUpdateStoreOrders = /* GraphQL */`
  subscription OnUpdateStoreOrders(
    $filter: ModelSubscriptionStoreOrdersFilterInput
  ) {
    onUpdateStoreOrders(filter: $filter) {
      id
      storeId
      orderId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateStoreOrders = onUpdateStoreOrders;
const onDeleteStoreOrders = /* GraphQL */`
  subscription OnDeleteStoreOrders(
    $filter: ModelSubscriptionStoreOrdersFilterInput
  ) {
    onDeleteStoreOrders(filter: $filter) {
      id
      storeId
      orderId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        customerId
        receiptNumber
        receiptType
        orderDate
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteStoreOrders = onDeleteStoreOrders;
const onCreateStoreCustomers = /* GraphQL */`
  subscription OnCreateStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onCreateStoreCustomers(filter: $filter) {
      id
      storeId
      userId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateStoreCustomers = onCreateStoreCustomers;
const onUpdateStoreCustomers = /* GraphQL */`
  subscription OnUpdateStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onUpdateStoreCustomers(filter: $filter) {
      id
      storeId
      userId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateStoreCustomers = onUpdateStoreCustomers;
const onDeleteStoreCustomers = /* GraphQL */`
  subscription OnDeleteStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onDeleteStoreCustomers(filter: $filter) {
      id
      storeId
      userId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        email
        userSub
        password
        number_1
        number_2
        loyverseId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteStoreCustomers = onDeleteStoreCustomers;
const onCreateStoreTags = /* GraphQL */`
  subscription OnCreateStoreTags(
    $filter: ModelSubscriptionStoreTagsFilterInput
  ) {
    onCreateStoreTags(filter: $filter) {
      id
      storeId
      tagId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateStoreTags = onCreateStoreTags;
const onUpdateStoreTags = /* GraphQL */`
  subscription OnUpdateStoreTags(
    $filter: ModelSubscriptionStoreTagsFilterInput
  ) {
    onUpdateStoreTags(filter: $filter) {
      id
      storeId
      tagId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateStoreTags = onUpdateStoreTags;
const onDeleteStoreTags = /* GraphQL */`
  subscription OnDeleteStoreTags(
    $filter: ModelSubscriptionStoreTagsFilterInput
  ) {
    onDeleteStoreTags(filter: $filter) {
      id
      storeId
      tagId
      store {
        id
        companyId
        addressCode
        type
        categoryId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteStoreTags = onDeleteStoreTags;
const onCreateProductTags = /* GraphQL */`
  subscription OnCreateProductTags(
    $filter: ModelSubscriptionProductTagsFilterInput
  ) {
    onCreateProductTags(filter: $filter) {
      id
      tagId
      productId
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onCreateProductTags = onCreateProductTags;
const onUpdateProductTags = /* GraphQL */`
  subscription OnUpdateProductTags(
    $filter: ModelSubscriptionProductTagsFilterInput
  ) {
    onUpdateProductTags(filter: $filter) {
      id
      tagId
      productId
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onUpdateProductTags = onUpdateProductTags;
const onDeleteProductTags = /* GraphQL */`
  subscription OnDeleteProductTags(
    $filter: ModelSubscriptionProductTagsFilterInput
  ) {
    onDeleteProductTags(filter: $filter) {
      id
      tagId
      productId
      tag {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        storeId
        companyId
        categoryId
        publish
        addressCode
        option1_name
        option2_name
        option3_name
        slug
        description
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
exports.onDeleteProductTags = onDeleteProductTags;