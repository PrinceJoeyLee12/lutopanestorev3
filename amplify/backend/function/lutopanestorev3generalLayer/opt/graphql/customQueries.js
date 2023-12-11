"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsersCustom = exports.listProductsCustom = exports.listCartsCustom = exports.getProductCustom = exports.getCartCustom = void 0;
const listUsersCustom = /* GraphQL */`
  query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
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
        billingInfo {
          id
          email
          fullName
          address {
            accuracy
            addressLine1
            addressLine2
            altitudeAccuracy
            barangay
            barangayCode
            city
            cityCode
            country
            heading
            latitude
            longitude
            region
            regionCode
            speed
            state
            stateCode
            zipCode
          }
          isDefault
          phone
          type
        }
        cart {
          id
          lineItems(limit: 500) {
            items {
              id
              quantity
              variantId
              variant {
                inventory
                id
                price
                salePrice
                option1_value
                option2_value
                option3_value
                product {
                  option1_name
                  option2_name
                  option3_name
                  id
                  mainImage {
                    urlImage
                  }
                  name
                }
              }
            }
          }
          createdAt
          updatedAt
          __typename
        }
      }
      nextToken
      __typename
    }
  }
`;
exports.listUsersCustom = listUsersCustom;
const listProductsCustom = /* GraphQL */`
  query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeId
        store {
          id
          companyId
          categoryId
          category {
            id
            name
          }
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
        }
        companyId
        categoryId
        publish
        slug
        category {
          id
          name
          loyverseId
          loyverse
          createdAt
          updatedAt
        }
        images(limit: 20) {
          items {
            id
            belongsTo
            description
            title
            urlImage
            createdAt
            updatedAt
          }
          nextToken
        }
        mainImage {
          id
          belongsTo
          description
          title
          urlImage
          createdAt
          updatedAt
        }
        option1_name
        option2_name
        option3_name
        variants(limit: 100) {
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
            loyverseId
            loyverse
            createdAt
            updatedAt
            __typename
          }
          nextToken
        }
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
exports.listProductsCustom = listProductsCustom;
const getProductCustom = /* GraphQL */`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      storeId
      store {
        id
        companyId
        type
        loyverseId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      images(limit: 20) {
        items {
          id
          belongsTo
          description
          title
          urlImage
          createdAt
          updatedAt
        }
        nextToken
      }
      option1_name
      option2_name
      option3_name
      variants(limit: 100) {
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
          loyverseId
          loyverse
          createdAt
          updatedAt
          __typename
        }
        nextToken
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
exports.getProductCustom = getProductCustom;
const getCartCustom = /* GraphQL */`
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      lineItems(limit: 500) {
        items {
          id
          quantity
          variantId
          variant {
            inventory
            id
            price
            salePrice
            option1_value
            option2_value
            option3_value
            product {
              option1_name
              option2_name
              option3_name
              id
              mainImage {
                urlImage
              }
              name
            }
          }
        }
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
exports.getCartCustom = getCartCustom;
const listCartsCustom = /* GraphQL */`
  query ListCarts($filter: ModelCartFilterInput, $limit: Int, $nextToken: String) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lineItems(limit: 500) {
          items {
            id
            quantity
            variantId
            variant {
              inventory
              id
              price
              salePrice
              option1_value
              option2_value
              option3_value
              product {
                option1_name
                option2_name
                option3_name
                id
                mainImage {
                  urlImage
                }
                name
              }
            }
          }
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
      nextToken
      __typename
    }
  }
`;
exports.listCartsCustom = listCartsCustom;