import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {}
export type PageOutBoundReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OutBoundReportFormPageInput>
}>

export type PageOutBoundReportFormQuery = {
  pageOutBoundReportForm: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          id: SchemaTypes.Maybe<number>
          outboundCode: SchemaTypes.Maybe<string>
          batchStockCode: SchemaTypes.Maybe<string>
          merchant: SchemaTypes.Maybe<string>
          repository: SchemaTypes.Maybe<string>
          productName: SchemaTypes.Maybe<string>
          outboundType: SchemaTypes.Maybe<string>
          quantity: SchemaTypes.Maybe<number>
          unit: SchemaTypes.Maybe<string>
          outboundTime: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type ExportOutBoundReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OutBoundReportFormQueryInput>
}>

export type ExportOutBoundReportFormQuery = { exportOutBoundReportForm: SchemaTypes.Maybe<string> }

export type ListMerchantOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type ListMerchantOptionQuery = {
  listMerchantOption: SchemaTypes.Maybe<{
    options: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          label: SchemaTypes.Maybe<string>
          value: SchemaTypes.Maybe<string>
          disable: SchemaTypes.Maybe<boolean>
        }>
      >
    >
  }>
}

export type ListStockTypeOptionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.StockTypeOptionInput>
}>

export type ListStockTypeOptionQuery = {
  listStockTypeOption: SchemaTypes.Maybe<{
    option: SchemaTypes.Maybe<
      Array<SchemaTypes.Maybe<{ label: SchemaTypes.Maybe<string>; value: SchemaTypes.Maybe<string> }>>
    >
  }>
}

export type PageSalesReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.SalesReportFormPageInput>
}>

export type PageSalesReportFormQuery = {
  pageSalesReportForm: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          merchant: SchemaTypes.Maybe<string>
          id: SchemaTypes.Maybe<number>
          payMethod: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
          orderCode: SchemaTypes.Maybe<string>
          customerId: SchemaTypes.Maybe<number>
          customerName: SchemaTypes.Maybe<string>
          payTime: SchemaTypes.Maybe<number>
          customerType: SchemaTypes.Maybe<string>
          productId: SchemaTypes.Maybe<number>
          productName: SchemaTypes.Maybe<string>
          batchStockCode: SchemaTypes.Maybe<string>
          unit: SchemaTypes.Maybe<string>
          quantity: SchemaTypes.Maybe<number>
          unitPrice: SchemaTypes.Maybe<number>
          totalMoney: SchemaTypes.Maybe<number>
          remark: SchemaTypes.Maybe<string>
          varietyGroupId: SchemaTypes.Maybe<number>
          varietyGroup: SchemaTypes.Maybe<string>
          numberOfBalances: SchemaTypes.Maybe<number>
        }>
      >
    >
  }>
}

export type ExportSalesReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.SalesReportFormQueryInput>
}>

export type ExportSalesReportFormQuery = { exportSalesReportForm: SchemaTypes.Maybe<string> }

export type ListPayMethodOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type ListPayMethodOptionQuery = {
  listPayMethodOption: SchemaTypes.Maybe<{
    options: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          label: SchemaTypes.Maybe<string>
          value: SchemaTypes.Maybe<string>
          disable: SchemaTypes.Maybe<boolean>
        }>
      >
    >
  }>
}

export type ListCustomerTypeOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

export type ListCustomerTypeOptionQuery = {
  listCustomerTypeOption: SchemaTypes.Maybe<{
    options: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          label: SchemaTypes.Maybe<string>
          value: SchemaTypes.Maybe<string>
          disable: SchemaTypes.Maybe<boolean>
        }>
      >
    >
  }>
}

export type PageOrderReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OrderReportFormPageInput>
}>

export type PageOrderReportFormQuery = {
  pageOrderReportForm: SchemaTypes.Maybe<{
    pageCurrent: SchemaTypes.Maybe<number>
    pageSize: SchemaTypes.Maybe<number>
    totalRecords: SchemaTypes.Maybe<number>
    records: SchemaTypes.Maybe<
      Array<
        SchemaTypes.Maybe<{
          id: SchemaTypes.Maybe<number>
          orderCode: SchemaTypes.Maybe<string>
          merchant: SchemaTypes.Maybe<string>
          customerType: SchemaTypes.Maybe<string>
          customerName: SchemaTypes.Maybe<string>
          salesmanName: SchemaTypes.Maybe<string>
          cashierName: SchemaTypes.Maybe<string>
          totalMoney: SchemaTypes.Maybe<number>
          totalQuantity: SchemaTypes.Maybe<number>
          discountMoney: SchemaTypes.Maybe<number>
          cashMoney: SchemaTypes.Maybe<number>
          elecpayMoney: SchemaTypes.Maybe<number>
          arrearsMoney: SchemaTypes.Maybe<number>
          payMethod: SchemaTypes.Maybe<Array<SchemaTypes.Maybe<string>>>
          billingTime: SchemaTypes.Maybe<number>
          payTime: SchemaTypes.Maybe<number>
          receivableMoney: SchemaTypes.Maybe<number>
          productAndCount: SchemaTypes.Maybe<
            Array<
              SchemaTypes.Maybe<{
                productName: SchemaTypes.Maybe<string>
                quantity: SchemaTypes.Maybe<number>
                unit: SchemaTypes.Maybe<string>
              }>
            >
          >
        }>
      >
    >
  }>
}

export type ExportOrderReportFormQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.Maybe<SchemaTypes.OrderReportFormQueryInput>
}>

export type ExportOrderReportFormQuery = { exportOrderReportForm: SchemaTypes.Maybe<string> }

export const PageOutBoundReportFormDocument = gql`
  query pageOutBoundReportForm($input: OutBoundReportFormPageInput) {
    pageOutBoundReportForm(input: $input) {
      records {
        id
        outboundCode
        batchStockCode
        merchant
        repository
        productName
        outboundType
        quantity
        unit
        outboundTime
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageOutBoundReportFormQuery__
 *
 * To run a query within a React component, call `usePageOutBoundReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOutBoundReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOutBoundReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageOutBoundReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<PageOutBoundReportFormQuery, PageOutBoundReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageOutBoundReportFormQuery, PageOutBoundReportFormQueryVariables>(
    PageOutBoundReportFormDocument,
    options,
  )
}
export function usePageOutBoundReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageOutBoundReportFormQuery, PageOutBoundReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageOutBoundReportFormQuery, PageOutBoundReportFormQueryVariables>(
    PageOutBoundReportFormDocument,
    options,
  )
}
export type PageOutBoundReportFormQueryHookResult = ReturnType<typeof usePageOutBoundReportFormQuery>
export type PageOutBoundReportFormLazyQueryHookResult = ReturnType<typeof usePageOutBoundReportFormLazyQuery>
export type PageOutBoundReportFormQueryResult = Apollo.QueryResult<
  PageOutBoundReportFormQuery,
  PageOutBoundReportFormQueryVariables
>
export const ExportOutBoundReportFormDocument = gql`
  query exportOutBoundReportForm($input: OutBoundReportFormQueryInput) {
    exportOutBoundReportForm(input: $input)
  }
`

/**
 * __useExportOutBoundReportFormQuery__
 *
 * To run a query within a React component, call `useExportOutBoundReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportOutBoundReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportOutBoundReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportOutBoundReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<ExportOutBoundReportFormQuery, ExportOutBoundReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExportOutBoundReportFormQuery, ExportOutBoundReportFormQueryVariables>(
    ExportOutBoundReportFormDocument,
    options,
  )
}
export function useExportOutBoundReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExportOutBoundReportFormQuery, ExportOutBoundReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExportOutBoundReportFormQuery, ExportOutBoundReportFormQueryVariables>(
    ExportOutBoundReportFormDocument,
    options,
  )
}
export type ExportOutBoundReportFormQueryHookResult = ReturnType<typeof useExportOutBoundReportFormQuery>
export type ExportOutBoundReportFormLazyQueryHookResult = ReturnType<typeof useExportOutBoundReportFormLazyQuery>
export type ExportOutBoundReportFormQueryResult = Apollo.QueryResult<
  ExportOutBoundReportFormQuery,
  ExportOutBoundReportFormQueryVariables
>
export const ListMerchantOptionDocument = gql`
  query listMerchantOption {
    listMerchantOption {
      options {
        label
        value
        disable
      }
    }
  }
`

/**
 * __useListMerchantOptionQuery__
 *
 * To run a query within a React component, call `useListMerchantOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMerchantOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMerchantOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMerchantOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListMerchantOptionQuery, ListMerchantOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListMerchantOptionQuery, ListMerchantOptionQueryVariables>(ListMerchantOptionDocument, options)
}
export function useListMerchantOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListMerchantOptionQuery, ListMerchantOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListMerchantOptionQuery, ListMerchantOptionQueryVariables>(
    ListMerchantOptionDocument,
    options,
  )
}
export type ListMerchantOptionQueryHookResult = ReturnType<typeof useListMerchantOptionQuery>
export type ListMerchantOptionLazyQueryHookResult = ReturnType<typeof useListMerchantOptionLazyQuery>
export type ListMerchantOptionQueryResult = Apollo.QueryResult<
  ListMerchantOptionQuery,
  ListMerchantOptionQueryVariables
>
export const ListStockTypeOptionDocument = gql`
  query listStockTypeOption($input: StockTypeOptionInput) {
    listStockTypeOption(input: $input) {
      option {
        label
        value
      }
    }
  }
`

/**
 * __useListStockTypeOptionQuery__
 *
 * To run a query within a React component, call `useListStockTypeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStockTypeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStockTypeOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListStockTypeOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListStockTypeOptionQuery, ListStockTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListStockTypeOptionQuery, ListStockTypeOptionQueryVariables>(
    ListStockTypeOptionDocument,
    options,
  )
}
export function useListStockTypeOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListStockTypeOptionQuery, ListStockTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListStockTypeOptionQuery, ListStockTypeOptionQueryVariables>(
    ListStockTypeOptionDocument,
    options,
  )
}
export type ListStockTypeOptionQueryHookResult = ReturnType<typeof useListStockTypeOptionQuery>
export type ListStockTypeOptionLazyQueryHookResult = ReturnType<typeof useListStockTypeOptionLazyQuery>
export type ListStockTypeOptionQueryResult = Apollo.QueryResult<
  ListStockTypeOptionQuery,
  ListStockTypeOptionQueryVariables
>
export const PageSalesReportFormDocument = gql`
  query pageSalesReportForm($input: SalesReportFormPageInput) {
    pageSalesReportForm(input: $input) {
      records {
        merchant
        id
        payMethod
        orderCode
        customerId
        customerName
        payTime
        customerType
        productId
        productName
        batchStockCode
        unit
        quantity
        unitPrice
        totalMoney
        remark
        varietyGroupId
        varietyGroup
        numberOfBalances
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageSalesReportFormQuery__
 *
 * To run a query within a React component, call `usePageSalesReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSalesReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSalesReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageSalesReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<PageSalesReportFormQuery, PageSalesReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageSalesReportFormQuery, PageSalesReportFormQueryVariables>(
    PageSalesReportFormDocument,
    options,
  )
}
export function usePageSalesReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageSalesReportFormQuery, PageSalesReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageSalesReportFormQuery, PageSalesReportFormQueryVariables>(
    PageSalesReportFormDocument,
    options,
  )
}
export type PageSalesReportFormQueryHookResult = ReturnType<typeof usePageSalesReportFormQuery>
export type PageSalesReportFormLazyQueryHookResult = ReturnType<typeof usePageSalesReportFormLazyQuery>
export type PageSalesReportFormQueryResult = Apollo.QueryResult<
  PageSalesReportFormQuery,
  PageSalesReportFormQueryVariables
>
export const ExportSalesReportFormDocument = gql`
  query exportSalesReportForm($input: SalesReportFormQueryInput) {
    exportSalesReportForm(input: $input)
  }
`

/**
 * __useExportSalesReportFormQuery__
 *
 * To run a query within a React component, call `useExportSalesReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportSalesReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportSalesReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportSalesReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<ExportSalesReportFormQuery, ExportSalesReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExportSalesReportFormQuery, ExportSalesReportFormQueryVariables>(
    ExportSalesReportFormDocument,
    options,
  )
}
export function useExportSalesReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExportSalesReportFormQuery, ExportSalesReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExportSalesReportFormQuery, ExportSalesReportFormQueryVariables>(
    ExportSalesReportFormDocument,
    options,
  )
}
export type ExportSalesReportFormQueryHookResult = ReturnType<typeof useExportSalesReportFormQuery>
export type ExportSalesReportFormLazyQueryHookResult = ReturnType<typeof useExportSalesReportFormLazyQuery>
export type ExportSalesReportFormQueryResult = Apollo.QueryResult<
  ExportSalesReportFormQuery,
  ExportSalesReportFormQueryVariables
>
export const ListPayMethodOptionDocument = gql`
  query listPayMethodOption {
    listPayMethodOption {
      options {
        label
        value
        disable
      }
    }
  }
`

/**
 * __useListPayMethodOptionQuery__
 *
 * To run a query within a React component, call `useListPayMethodOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPayMethodOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPayMethodOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPayMethodOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPayMethodOptionQuery, ListPayMethodOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPayMethodOptionQuery, ListPayMethodOptionQueryVariables>(
    ListPayMethodOptionDocument,
    options,
  )
}
export function useListPayMethodOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListPayMethodOptionQuery, ListPayMethodOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPayMethodOptionQuery, ListPayMethodOptionQueryVariables>(
    ListPayMethodOptionDocument,
    options,
  )
}
export type ListPayMethodOptionQueryHookResult = ReturnType<typeof useListPayMethodOptionQuery>
export type ListPayMethodOptionLazyQueryHookResult = ReturnType<typeof useListPayMethodOptionLazyQuery>
export type ListPayMethodOptionQueryResult = Apollo.QueryResult<
  ListPayMethodOptionQuery,
  ListPayMethodOptionQueryVariables
>
export const ListCustomerTypeOptionDocument = gql`
  query listCustomerTypeOption {
    listCustomerTypeOption {
      options {
        label
        value
        disable
      }
    }
  }
`

/**
 * __useListCustomerTypeOptionQuery__
 *
 * To run a query within a React component, call `useListCustomerTypeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomerTypeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomerTypeOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCustomerTypeOptionQuery(
  baseOptions?: Apollo.QueryHookOptions<ListCustomerTypeOptionQuery, ListCustomerTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListCustomerTypeOptionQuery, ListCustomerTypeOptionQueryVariables>(
    ListCustomerTypeOptionDocument,
    options,
  )
}
export function useListCustomerTypeOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListCustomerTypeOptionQuery, ListCustomerTypeOptionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListCustomerTypeOptionQuery, ListCustomerTypeOptionQueryVariables>(
    ListCustomerTypeOptionDocument,
    options,
  )
}
export type ListCustomerTypeOptionQueryHookResult = ReturnType<typeof useListCustomerTypeOptionQuery>
export type ListCustomerTypeOptionLazyQueryHookResult = ReturnType<typeof useListCustomerTypeOptionLazyQuery>
export type ListCustomerTypeOptionQueryResult = Apollo.QueryResult<
  ListCustomerTypeOptionQuery,
  ListCustomerTypeOptionQueryVariables
>
export const PageOrderReportFormDocument = gql`
  query pageOrderReportForm($input: OrderReportFormPageInput) {
    pageOrderReportForm(input: $input) {
      records {
        id
        orderCode
        productAndCount {
          productName
          quantity
          unit
        }
        merchant
        customerType
        customerName
        salesmanName
        cashierName
        totalMoney
        totalQuantity
        discountMoney
        cashMoney
        elecpayMoney
        arrearsMoney
        payMethod
        billingTime
        payTime
        receivableMoney
      }
      pageCurrent
      pageSize
      totalRecords
    }
  }
`

/**
 * __usePageOrderReportFormQuery__
 *
 * To run a query within a React component, call `usePageOrderReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOrderReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOrderReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageOrderReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<PageOrderReportFormQuery, PageOrderReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageOrderReportFormQuery, PageOrderReportFormQueryVariables>(
    PageOrderReportFormDocument,
    options,
  )
}
export function usePageOrderReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageOrderReportFormQuery, PageOrderReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageOrderReportFormQuery, PageOrderReportFormQueryVariables>(
    PageOrderReportFormDocument,
    options,
  )
}
export type PageOrderReportFormQueryHookResult = ReturnType<typeof usePageOrderReportFormQuery>
export type PageOrderReportFormLazyQueryHookResult = ReturnType<typeof usePageOrderReportFormLazyQuery>
export type PageOrderReportFormQueryResult = Apollo.QueryResult<
  PageOrderReportFormQuery,
  PageOrderReportFormQueryVariables
>
export const ExportOrderReportFormDocument = gql`
  query exportOrderReportForm($input: OrderReportFormQueryInput) {
    exportOrderReportForm(input: $input)
  }
`

/**
 * __useExportOrderReportFormQuery__
 *
 * To run a query within a React component, call `useExportOrderReportFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportOrderReportFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportOrderReportFormQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportOrderReportFormQuery(
  baseOptions?: Apollo.QueryHookOptions<ExportOrderReportFormQuery, ExportOrderReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExportOrderReportFormQuery, ExportOrderReportFormQueryVariables>(
    ExportOrderReportFormDocument,
    options,
  )
}
export function useExportOrderReportFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExportOrderReportFormQuery, ExportOrderReportFormQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExportOrderReportFormQuery, ExportOrderReportFormQueryVariables>(
    ExportOrderReportFormDocument,
    options,
  )
}
export type ExportOrderReportFormQueryHookResult = ReturnType<typeof useExportOrderReportFormQuery>
export type ExportOrderReportFormLazyQueryHookResult = ReturnType<typeof useExportOrderReportFormLazyQuery>
export type ExportOrderReportFormQueryResult = Apollo.QueryResult<
  ExportOrderReportFormQuery,
  ExportOrderReportFormQueryVariables
>
