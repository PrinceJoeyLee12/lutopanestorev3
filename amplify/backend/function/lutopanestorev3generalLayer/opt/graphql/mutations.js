"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.updateVariant = exports.updateUser = exports.updateTag = exports.updateStoreTags = exports.updateStoreOrders = exports.updateStoreCustomers = exports.updateStoreCategory = exports.updateStore = exports.updateProductTags = exports.updateProduct = exports.updateOrderLineItem = exports.updateOrder = exports.updateImage = exports.updateCompany = exports.updateCategory = exports.updateCartLineItem = exports.updateCart = exports.registerUser = exports.loginUser = exports.deleteVariant = exports.deleteUser = exports.deleteTag = exports.deleteStoreTags = exports.deleteStoreOrders = exports.deleteStoreCustomers = exports.deleteStoreCategory = exports.deleteStore = exports.deleteProductTags = exports.deleteProduct = exports.deleteOrderLineItem = exports.deleteOrder = exports.deleteImage = exports.deleteCompany = exports.deleteCategory = exports.deleteCartLineItem = exports.deleteCart = exports.createVariant = exports.createUser = exports.createTag = exports.createStoreTags = exports.createStoreOrders = exports.createStoreCustomers = exports.createStoreCategory = exports.createStore = exports.createProductTags = exports.createProduct = exports.createOrderLineItem = exports.createOrder = exports.createImage = exports.createCompany = exports.createCategory = exports.createCartLineItem = exports.createCart = exports.checkoutCart = exports.batchDeleteCartLineItems = exports.batchAddCartLineItems = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const registerUser = /* GraphQL */`
  mutation RegisterUser($args: RegisterUserArgs!) {
    registerUser(args: $args)
  }
`;
exports.registerUser = registerUser;
const loginUser = /* GraphQL */`
  mutation LoginUser($args: LoginUserArgs!) {
    loginUser(args: $args)
  }
`;
exports.loginUser = loginUser;
const verifyToken = /* GraphQL */`
  mutation VerifyToken($args: UserToken!) {
    verifyToken(args: $args)
  }
`;
exports.verifyToken = verifyToken;
const checkoutCart = /* GraphQL */`
  mutation CheckoutCart($args: AWSJSON) {
    checkoutCart(args: $args)
  }
`;
exports.checkoutCart = checkoutCart;
const batchAddCartLineItems = /* GraphQL */`
  mutation BatchAddCartLineItems($items: [CartLineItemInput!]!) {
    batchAddCartLineItems(items: $items) {
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
exports.batchAddCartLineItems = batchAddCartLineItems;
const batchDeleteCartLineItems = /* GraphQL */`
  mutation BatchDeleteCartLineItems($ids: [ID!]!) {
    batchDeleteCartLineItems(ids: $ids)
  }
`;
exports.batchDeleteCartLineItems = batchDeleteCartLineItems;
const createCompany = /* GraphQL */`
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
exports.createCompany = createCompany;
const updateCompany = /* GraphQL */`
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
exports.updateCompany = updateCompany;
const deleteCompany = /* GraphQL */`
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
exports.deleteCompany = deleteCompany;
const createStore = /* GraphQL */`
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
exports.createStore = createStore;
const updateStore = /* GraphQL */`
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
exports.updateStore = updateStore;
const deleteStore = /* GraphQL */`
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
exports.deleteStore = deleteStore;
const createStoreCategory = /* GraphQL */`
  mutation CreateStoreCategory(
    $input: CreateStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    createStoreCategory(input: $input, condition: $condition) {
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
exports.createStoreCategory = createStoreCategory;
const updateStoreCategory = /* GraphQL */`
  mutation UpdateStoreCategory(
    $input: UpdateStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    updateStoreCategory(input: $input, condition: $condition) {
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
exports.updateStoreCategory = updateStoreCategory;
const deleteStoreCategory = /* GraphQL */`
  mutation DeleteStoreCategory(
    $input: DeleteStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    deleteStoreCategory(input: $input, condition: $condition) {
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
exports.deleteStoreCategory = deleteStoreCategory;
const createCategory = /* GraphQL */`
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
exports.createCategory = createCategory;
const updateCategory = /* GraphQL */`
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
exports.updateCategory = updateCategory;
const deleteCategory = /* GraphQL */`
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
exports.deleteCategory = deleteCategory;
const createTag = /* GraphQL */`
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
exports.createTag = createTag;
const updateTag = /* GraphQL */`
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
exports.updateTag = updateTag;
const deleteTag = /* GraphQL */`
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
exports.deleteTag = deleteTag;
const createProduct = /* GraphQL */`
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
exports.createProduct = createProduct;
const updateProduct = /* GraphQL */`
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
exports.updateProduct = updateProduct;
const deleteProduct = /* GraphQL */`
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
exports.deleteProduct = deleteProduct;
const createVariant = /* GraphQL */`
  mutation CreateVariant(
    $input: CreateVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    createVariant(input: $input, condition: $condition) {
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
exports.createVariant = createVariant;
const updateVariant = /* GraphQL */`
  mutation UpdateVariant(
    $input: UpdateVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    updateVariant(input: $input, condition: $condition) {
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
exports.updateVariant = updateVariant;
const deleteVariant = /* GraphQL */`
  mutation DeleteVariant(
    $input: DeleteVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    deleteVariant(input: $input, condition: $condition) {
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
exports.deleteVariant = deleteVariant;
const createUser = /* GraphQL */`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
exports.createUser = createUser;
const updateUser = /* GraphQL */`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
exports.updateUser = updateUser;
const deleteUser = /* GraphQL */`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
exports.deleteUser = deleteUser;
const createCart = /* GraphQL */`
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
exports.createCart = createCart;
const updateCart = /* GraphQL */`
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
exports.updateCart = updateCart;
const deleteCart = /* GraphQL */`
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
exports.deleteCart = deleteCart;
const createCartLineItem = /* GraphQL */`
  mutation CreateCartLineItem(
    $input: CreateCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    createCartLineItem(input: $input, condition: $condition) {
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
exports.createCartLineItem = createCartLineItem;
const updateCartLineItem = /* GraphQL */`
  mutation UpdateCartLineItem(
    $input: UpdateCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    updateCartLineItem(input: $input, condition: $condition) {
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
exports.updateCartLineItem = updateCartLineItem;
const deleteCartLineItem = /* GraphQL */`
  mutation DeleteCartLineItem(
    $input: DeleteCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    deleteCartLineItem(input: $input, condition: $condition) {
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
exports.deleteCartLineItem = deleteCartLineItem;
const createOrder = /* GraphQL */`
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
exports.createOrder = createOrder;
const updateOrder = /* GraphQL */`
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
exports.updateOrder = updateOrder;
const deleteOrder = /* GraphQL */`
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
exports.deleteOrder = deleteOrder;
const createOrderLineItem = /* GraphQL */`
  mutation CreateOrderLineItem(
    $input: CreateOrderLineItemInput!
    $condition: ModelOrderLineItemConditionInput
  ) {
    createOrderLineItem(input: $input, condition: $condition) {
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
exports.createOrderLineItem = createOrderLineItem;
const updateOrderLineItem = /* GraphQL */`
  mutation UpdateOrderLineItem(
    $input: UpdateOrderLineItemInput!
    $condition: ModelOrderLineItemConditionInput
  ) {
    updateOrderLineItem(input: $input, condition: $condition) {
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
exports.updateOrderLineItem = updateOrderLineItem;
const deleteOrderLineItem = /* GraphQL */`
  mutation DeleteOrderLineItem(
    $input: DeleteOrderLineItemInput!
    $condition: ModelOrderLineItemConditionInput
  ) {
    deleteOrderLineItem(input: $input, condition: $condition) {
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
exports.deleteOrderLineItem = deleteOrderLineItem;
const createImage = /* GraphQL */`
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
exports.createImage = createImage;
const updateImage = /* GraphQL */`
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
exports.updateImage = updateImage;
const deleteImage = /* GraphQL */`
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
exports.deleteImage = deleteImage;
const createStoreOrders = /* GraphQL */`
  mutation CreateStoreOrders(
    $input: CreateStoreOrdersInput!
    $condition: ModelStoreOrdersConditionInput
  ) {
    createStoreOrders(input: $input, condition: $condition) {
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
exports.createStoreOrders = createStoreOrders;
const updateStoreOrders = /* GraphQL */`
  mutation UpdateStoreOrders(
    $input: UpdateStoreOrdersInput!
    $condition: ModelStoreOrdersConditionInput
  ) {
    updateStoreOrders(input: $input, condition: $condition) {
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
exports.updateStoreOrders = updateStoreOrders;
const deleteStoreOrders = /* GraphQL */`
  mutation DeleteStoreOrders(
    $input: DeleteStoreOrdersInput!
    $condition: ModelStoreOrdersConditionInput
  ) {
    deleteStoreOrders(input: $input, condition: $condition) {
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
exports.deleteStoreOrders = deleteStoreOrders;
const createStoreCustomers = /* GraphQL */`
  mutation CreateStoreCustomers(
    $input: CreateStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    createStoreCustomers(input: $input, condition: $condition) {
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
exports.createStoreCustomers = createStoreCustomers;
const updateStoreCustomers = /* GraphQL */`
  mutation UpdateStoreCustomers(
    $input: UpdateStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    updateStoreCustomers(input: $input, condition: $condition) {
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
exports.updateStoreCustomers = updateStoreCustomers;
const deleteStoreCustomers = /* GraphQL */`
  mutation DeleteStoreCustomers(
    $input: DeleteStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    deleteStoreCustomers(input: $input, condition: $condition) {
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
exports.deleteStoreCustomers = deleteStoreCustomers;
const createStoreTags = /* GraphQL */`
  mutation CreateStoreTags(
    $input: CreateStoreTagsInput!
    $condition: ModelStoreTagsConditionInput
  ) {
    createStoreTags(input: $input, condition: $condition) {
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
exports.createStoreTags = createStoreTags;
const updateStoreTags = /* GraphQL */`
  mutation UpdateStoreTags(
    $input: UpdateStoreTagsInput!
    $condition: ModelStoreTagsConditionInput
  ) {
    updateStoreTags(input: $input, condition: $condition) {
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
exports.updateStoreTags = updateStoreTags;
const deleteStoreTags = /* GraphQL */`
  mutation DeleteStoreTags(
    $input: DeleteStoreTagsInput!
    $condition: ModelStoreTagsConditionInput
  ) {
    deleteStoreTags(input: $input, condition: $condition) {
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
exports.deleteStoreTags = deleteStoreTags;
const createProductTags = /* GraphQL */`
  mutation CreateProductTags(
    $input: CreateProductTagsInput!
    $condition: ModelProductTagsConditionInput
  ) {
    createProductTags(input: $input, condition: $condition) {
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
exports.createProductTags = createProductTags;
const updateProductTags = /* GraphQL */`
  mutation UpdateProductTags(
    $input: UpdateProductTagsInput!
    $condition: ModelProductTagsConditionInput
  ) {
    updateProductTags(input: $input, condition: $condition) {
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
exports.updateProductTags = updateProductTags;
const deleteProductTags = /* GraphQL */`
  mutation DeleteProductTags(
    $input: DeleteProductTagsInput!
    $condition: ModelProductTagsConditionInput
  ) {
    deleteProductTags(input: $input, condition: $condition) {
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
exports.deleteProductTags = deleteProductTags;