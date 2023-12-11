/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
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
export const onUpdateCompany = /* GraphQL */ `
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
export const onDeleteCompany = /* GraphQL */ `
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
export const onCreateStore = /* GraphQL */ `
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
export const onUpdateStore = /* GraphQL */ `
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
export const onDeleteStore = /* GraphQL */ `
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
export const onCreateStoreCategory = /* GraphQL */ `
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
export const onUpdateStoreCategory = /* GraphQL */ `
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
export const onDeleteStoreCategory = /* GraphQL */ `
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
export const onCreateCategory = /* GraphQL */ `
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
export const onUpdateCategory = /* GraphQL */ `
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
export const onDeleteCategory = /* GraphQL */ `
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
export const onCreateTag = /* GraphQL */ `
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
export const onUpdateTag = /* GraphQL */ `
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
export const onDeleteTag = /* GraphQL */ `
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
export const onCreateProduct = /* GraphQL */ `
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
export const onUpdateProduct = /* GraphQL */ `
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
export const onDeleteProduct = /* GraphQL */ `
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
export const onCreateVariant = /* GraphQL */ `
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
export const onUpdateVariant = /* GraphQL */ `
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
export const onDeleteVariant = /* GraphQL */ `
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
export const onCreateUser = /* GraphQL */ `
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
export const onUpdateUser = /* GraphQL */ `
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
export const onDeleteUser = /* GraphQL */ `
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
export const onCreateCart = /* GraphQL */ `
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
export const onUpdateCart = /* GraphQL */ `
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
export const onDeleteCart = /* GraphQL */ `
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
export const onCreateCartLineItem = /* GraphQL */ `
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
export const onUpdateCartLineItem = /* GraphQL */ `
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
export const onDeleteCartLineItem = /* GraphQL */ `
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
export const onCreateOrder = /* GraphQL */ `
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
export const onUpdateOrder = /* GraphQL */ `
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
export const onDeleteOrder = /* GraphQL */ `
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
export const onCreateOrderLineItem = /* GraphQL */ `
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
export const onUpdateOrderLineItem = /* GraphQL */ `
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
export const onDeleteOrderLineItem = /* GraphQL */ `
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
export const onCreateImage = /* GraphQL */ `
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
export const onUpdateImage = /* GraphQL */ `
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
export const onDeleteImage = /* GraphQL */ `
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
export const onCreateStoreOrders = /* GraphQL */ `
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
export const onUpdateStoreOrders = /* GraphQL */ `
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
export const onDeleteStoreOrders = /* GraphQL */ `
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
export const onCreateStoreCustomers = /* GraphQL */ `
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
export const onUpdateStoreCustomers = /* GraphQL */ `
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
export const onDeleteStoreCustomers = /* GraphQL */ `
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
export const onCreateStoreTags = /* GraphQL */ `
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
export const onUpdateStoreTags = /* GraphQL */ `
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
export const onDeleteStoreTags = /* GraphQL */ `
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
export const onCreateProductTags = /* GraphQL */ `
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
export const onUpdateProductTags = /* GraphQL */ `
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
export const onDeleteProductTags = /* GraphQL */ `
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
