import {
  PageOrgGroupQuery,
  UpdateOrgMutationVariables,
} from '@/graphql/operations/base-data/__generated__/organization-management'

// 组织分组列表项
export type OrgGroupItem = PageOrgGroupQuery['pageOrgGroup']['records'][0]

// 修改组织架构入参
export type UpdateOrgInput = Required<UpdateOrgMutationVariables>['input']
