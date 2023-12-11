"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeTagsByTagId = exports.storeTagsByStoreId = exports.storeOrdersByStoreId = exports.storeOrdersByOrderId = exports.storeCustomersByUserId = exports.storeCustomersByStoreId = exports.productTagsByTagId = exports.productTagsByProductId = exports.listVariants = exports.listUsers = exports.listTags = exports.listStores = exports.listStoreTags = exports.listStoreOrders = exports.listStoreCustomers = exports.listStoreCategories = exports.listProducts = exports.listProductTags = exports.listOrders = exports.listOrderLineItems = exports.listImages = exports.listCompanies = exports.listCategories = exports.listCarts = exports.listCartLineItems = exports.imagesByBelongsTo = exports.getVariantsByProduct = exports.getVariant = exports.getUser = exports.getTag = exports.getStoresByCompany = exports.getStoresByCategory = exports.getStoreTags = exports.getStoreOrders = exports.getStoreCustomers = exports.getStoreCategory = exports.getStore = exports.getProductsByStore = exports.getProductsByCompany = exports.getProductsByCategory = exports.getProductTags = exports.getProduct = exports.getOrdersByUser = exports.getOrderLineItemsByOrder = exports.getOrderLineItem = exports.getOrder = exports.getImage = exports.getCompany = exports.getCategory = exports.getCategoriesByStore = exports.getCartLineItemByCart = exports.getCartLineItem = exports.getCart = void 0;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getCompany = /* GraphQL */`
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
exports.getCompany = getCompany;
const listCompanies = /* GraphQL */`
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        companyProfileImageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listCompanies = listCompanies;
const getStore = /* GraphQL */`
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
exports.getStore = getStore;
const listStores = /* GraphQL */`
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.listStores = listStores;
const getStoreCategory = /* GraphQL */`
  query GetStoreCategory($id: ID!) {
    getStoreCategory(id: $id) {
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
exports.getStoreCategory = getStoreCategory;
const listStoreCategories = /* GraphQL */`
  query ListStoreCategories(
    $filter: ModelStoreCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listStoreCategories = listStoreCategories;
const getCategory = /* GraphQL */`
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
exports.getCategory = getCategory;
const listCategories = /* GraphQL */`
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listCategories = listCategories;
const getTag = /* GraphQL */`
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
exports.getTag = getTag;
const listTags = /* GraphQL */`
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listTags = listTags;
const getProduct = /* GraphQL */`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
exports.getProduct = getProduct;
const listProducts = /* GraphQL */`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.listProducts = listProducts;
const getVariant = /* GraphQL */`
  query GetVariant($id: ID!) {
    getVariant(id: $id) {
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
exports.getVariant = getVariant;
const listVariants = /* GraphQL */`
  query ListVariants(
    $filter: ModelVariantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVariants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.listVariants = listVariants;
const getUser = /* GraphQL */`
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
exports.getUser = getUser;
const listUsers = /* GraphQL */`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.listUsers = listUsers;
const getCart = /* GraphQL */`
  query GetCart($id: ID!) {
    getCart(id: $id) {
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
exports.getCart = getCart;
const listCarts = /* GraphQL */`
  query ListCarts(
    $id: ID
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listCarts = listCarts;
const getCartLineItem = /* GraphQL */`
  query GetCartLineItem($id: ID!) {
    getCartLineItem(id: $id) {
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
exports.getCartLineItem = getCartLineItem;
const listCartLineItems = /* GraphQL */`
  query ListCartLineItems(
    $filter: ModelCartLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartId
        variantId
        quantity
        createdAt
        updatedAt
        variantInCartLineItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listCartLineItems = listCartLineItems;
const getOrder = /* GraphQL */`
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
exports.getOrder = getOrder;
const listOrders = /* GraphQL */`
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.listOrders = listOrders;
const getOrderLineItem = /* GraphQL */`
  query GetOrderLineItem($id: ID!) {
    getOrderLineItem(id: $id) {
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
exports.getOrderLineItem = getOrderLineItem;
const listOrderLineItems = /* GraphQL */`
  query ListOrderLineItems(
    $filter: ModelOrderLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
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
      nextToken
      __typename
    }
  }
`;
exports.listOrderLineItems = listOrderLineItems;
const getImage = /* GraphQL */`
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
exports.getImage = getImage;
const listImages = /* GraphQL */`
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listImages = listImages;
const getStoreOrders = /* GraphQL */`
  query GetStoreOrders($id: ID!) {
    getStoreOrders(id: $id) {
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
exports.getStoreOrders = getStoreOrders;
const listStoreOrders = /* GraphQL */`
  query ListStoreOrders(
    $filter: ModelStoreOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeId
        orderId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listStoreOrders = listStoreOrders;
const getStoreCustomers = /* GraphQL */`
  query GetStoreCustomers($id: ID!) {
    getStoreCustomers(id: $id) {
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
exports.getStoreCustomers = getStoreCustomers;
const listStoreCustomers = /* GraphQL */`
  query ListStoreCustomers(
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listStoreCustomers = listStoreCustomers;
const getStoreTags = /* GraphQL */`
  query GetStoreTags($id: ID!) {
    getStoreTags(id: $id) {
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
exports.getStoreTags = getStoreTags;
const listStoreTags = /* GraphQL */`
  query ListStoreTags(
    $filter: ModelStoreTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listStoreTags = listStoreTags;
const getProductTags = /* GraphQL */`
  query GetProductTags($id: ID!) {
    getProductTags(id: $id) {
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
exports.getProductTags = getProductTags;
const listProductTags = /* GraphQL */`
  query ListProductTags(
    $filter: ModelProductTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagId
        productId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.listProductTags = listProductTags;
const getStoresByCompany = /* GraphQL */`
  query GetStoresByCompany(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoresByCompany(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getStoresByCompany = getStoresByCompany;
const getStoresByCategory = /* GraphQL */`
  query GetStoresByCategory(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoresByCategory(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getStoresByCategory = getStoresByCategory;
const getCategoriesByStore = /* GraphQL */`
  query GetCategoriesByStore(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCategoriesByStore(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        storeId
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.getCategoriesByStore = getCategoriesByStore;
const getProductsByStore = /* GraphQL */`
  query GetProductsByStore(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByStore(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getProductsByStore = getProductsByStore;
const getProductsByCompany = /* GraphQL */`
  query GetProductsByCompany(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByCompany(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getProductsByCompany = getProductsByCompany;
const getProductsByCategory = /* GraphQL */`
  query GetProductsByCategory(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByCategory(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getProductsByCategory = getProductsByCategory;
const getVariantsByProduct = /* GraphQL */`
  query GetVariantsByProduct(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVariantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getVariantsByProduct(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getVariantsByProduct = getVariantsByProduct;
const getCartLineItemByCart = /* GraphQL */`
  query GetCartLineItemByCart(
    $cartId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCartLineItemByCart(
      cartId: $cartId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        variantId
        quantity
        createdAt
        updatedAt
        variantInCartLineItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.getCartLineItemByCart = getCartLineItemByCart;
const getOrdersByUser = /* GraphQL */`
  query GetOrdersByUser(
    $customerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrdersByUser(
      customerId: $customerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
exports.getOrdersByUser = getOrdersByUser;
const getOrderLineItemsByOrder = /* GraphQL */`
  query GetOrderLineItemsByOrder(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderLineItemsByOrder(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
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
      nextToken
      __typename
    }
  }
`;
exports.getOrderLineItemsByOrder = getOrderLineItemsByOrder;
const imagesByBelongsTo = /* GraphQL */`
  query ImagesByBelongsTo(
    $belongsTo: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imagesByBelongsTo(
      belongsTo: $belongsTo
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        belongsTo
        description
        title
        urlImage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.imagesByBelongsTo = imagesByBelongsTo;
const storeOrdersByStoreId = /* GraphQL */`
  query StoreOrdersByStoreId(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeOrdersByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        orderId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeOrdersByStoreId = storeOrdersByStoreId;
const storeOrdersByOrderId = /* GraphQL */`
  query StoreOrdersByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeOrdersByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        orderId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeOrdersByOrderId = storeOrdersByOrderId;
const storeCustomersByStoreId = /* GraphQL */`
  query StoreCustomersByStoreId(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeCustomersByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeCustomersByStoreId = storeCustomersByStoreId;
const storeCustomersByUserId = /* GraphQL */`
  query StoreCustomersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeCustomersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeCustomersByUserId = storeCustomersByUserId;
const storeTagsByStoreId = /* GraphQL */`
  query StoreTagsByStoreId(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeTagsByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeTagsByStoreId = storeTagsByStoreId;
const storeTagsByTagId = /* GraphQL */`
  query StoreTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        tagId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.storeTagsByTagId = storeTagsByTagId;
const productTagsByTagId = /* GraphQL */`
  query ProductTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        productId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.productTagsByTagId = productTagsByTagId;
const productTagsByProductId = /* GraphQL */`
  query ProductTagsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productTagsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        productId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
exports.productTagsByProductId = productTagsByProductId;